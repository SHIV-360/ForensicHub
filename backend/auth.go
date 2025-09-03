// backend/auth.go

package main

import (
	"encoding/json"
	"log" // Import the log package
	"net/http"
	"time"

	"github.com/golang-jwt/jwt/v4"
	"golang.org/x/crypto/bcrypt"
)

var jwtKey = []byte("my_secret_key")

type Claims struct {
	Username string `json:"username"`
	jwt.RegisteredClaims
}

func handleLogin(w http.ResponseWriter, r *http.Request) {
	var creds User
	if err := json.NewDecoder(r.Body).Decode(&creds); err != nil {
		w.WriteHeader(http.StatusBadRequest)
		return
	}

	log.Printf("--- Login Attempt ---")
	log.Printf("Received login attempt for username: '%s'", creds.Username)
	log.Printf("Received password: '%s'", creds.Password)

	// --- Find the user in our hardcoded list ---
	for _, user := range users {
		if user.Username == creds.Username {
			log.Printf("User '%s' found in database.", creds.Username)
			
			// --- Compare the provided password with the stored hash ---
			err := bcrypt.CompareHashAndPassword([]byte(user.Password), []byte(creds.Password))
			if err == nil {
				// Passwords match!
				log.Println("Password comparison successful!")
				
				expirationTime := time.Now().Add(60 * time.Minute)
				claims := &Claims{
					Username: creds.Username,
					RegisteredClaims: jwt.RegisteredClaims{
						ExpiresAt: jwt.NewNumericDate(expirationTime),
					},
				}

				token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)
				tokenString, err := token.SignedString(jwtKey)
				if err != nil {
					w.WriteHeader(http.StatusInternalServerError)
					return
				}

				http.SetCookie(w, &http.Cookie{
					Name:    "token",
					Value:   tokenString,
					Expires: expirationTime,
				})
				w.WriteHeader(http.StatusOK)
				log.Println("JWT token cookie sent successfully.")
				return // End the request
			} else {
				// Passwords do NOT match
				log.Printf("Password comparison FAILED. Error: %v", err)
				w.WriteHeader(http.StatusUnauthorized)
				return
			}
		}
	}

	// If the loop finishes, the user was not found
	log.Printf("User '%s' NOT found in database.", creds.Username)
	w.WriteHeader(http.StatusUnauthorized)
}

// (The jwtMiddleware function remains the same)
func jwtMiddleware(next http.Handler) http.Handler {
    return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
        c, err := r.Cookie("token")
        if err != nil {
            if err == http.ErrNoCookie {
                w.WriteHeader(http.StatusUnauthorized)
                return
            }
            w.WriteHeader(http.StatusBadRequest)
            return
        }

        tknStr := c.Value
        claims := &Claims{}

        tkn, err := jwt.ParseWithClaims(tknStr, claims, func(token *jwt.Token) (interface{}, error) {
            return jwtKey, nil
        })
        if err != nil || !tkn.Valid {
            w.WriteHeader(http.StatusUnauthorized)
            return
        }

        next.ServeHTTP(w, r)
    })
}
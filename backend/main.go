package main

import (
	"encoding/json"
	"log"
	"net/http"
)

// This function was missing.
func corsMiddleware(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Access-Control-Allow-Origin", "http://localhost:5173")
		w.Header().Set("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
		w.Header().Set("Access-Control-Allow-Headers", "Content-Type")
		w.Header().Set("Access-Control-Allow-Credentials", "true") // Allow cookies
		if r.Method == "OPTIONS" {
			w.WriteHeader(http.StatusOK)
			return
		}
		next.ServeHTTP(w, r)
	})
}

func main() {
	mux := http.NewServeMux()

	// Generic handler to serve global data
	makeHandler := func(data interface{}) http.HandlerFunc {
		return func(w http.ResponseWriter, r *http.Request) {
			w.Header().Set("Content-Type", "application/json")
			json.NewEncoder(w).Encode(data)
		}
	}

	
	//PUBLIC ROUTES
	mux.HandleFunc("/api/login", handleLogin)
	mux.HandleFunc("/api/contact-info", makeHandler(contactInfo))
	mux.HandleFunc("/api/office-hours", makeHandler(officeHours))
	mux.HandleFunc("/api/team", makeHandler(teamMembers))

	
	//PROTECTED ROUTES ony for alex bhai
	mux.Handle("/api/laws", jwtMiddleware(makeHandler(lawsData)))
	mux.Handle("/api/casestudies", jwtMiddleware(makeHandler(caseStudiesData)))
	mux.Handle("/api/resources", jwtMiddleware(makeHandler(resourcesData)))
	mux.Handle("/api/certification-resources", jwtMiddleware(makeHandler(certificationResources)))
	mux.Handle("/api/industry-standards", jwtMiddleware(makeHandler(industryStandards)))
	mux.Handle("/api/resource-categories", jwtMiddleware(makeHandler(resourceCategories)))
	mux.Handle("/api/challenges", jwtMiddleware(makeHandler(challengesData)))
	mux.Handle("/api/leaderboard", jwtMiddleware(makeHandler(leaderboardData)))
	mux.Handle("/api/activity", jwtMiddleware(makeHandler(recentActivityData)))
	mux.Handle("/api/profile", jwtMiddleware(makeHandler(userProfileData)))

	handler := corsMiddleware(mux)

	log.Println("Starting server on localhost:8080")
	if err := http.ListenAndServe(":8080", handler); err != nil {
		log.Fatal(err)
	}
}
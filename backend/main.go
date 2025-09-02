package main

import (
	"encoding/json"
	"log"
	"net/http"
)

func corsMiddleware(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Access-Control-Allow-Origin", "*") // Allow any origin
		w.Header().Set("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
		w.Header().Set("Access-Control-Allow-Headers", "Content-Type")
		if r.Method == "OPTIONS" {
			w.WriteHeader(http.StatusOK)
			return
		}
		next.ServeHTTP(w, r)
	})
}

func main() {
	mux := http.NewServeMux()

	// Generic handler to serve data
	makeHandler := func(data interface{}) http.HandlerFunc {
		return func(w http.ResponseWriter, r *http.Request) {
			w.Header().Set("Content-Type", "application/json")
			json.NewEncoder(w).Encode(data)
		}
	}

	// Create API endpoints
	mux.HandleFunc("/api/laws", makeHandler(lawsData))
	mux.HandleFunc("/api/casestudies", makeHandler(caseStudiesData))
	mux.HandleFunc("/api/resources", makeHandler(resourcesData))
	mux.HandleFunc("/api/certification-resources", makeHandler(certificationResources))
	mux.HandleFunc("/api/industry-standards", makeHandler(industryStandards))
	mux.HandleFunc("/api/resource-categories", makeHandler(resourceCategories))
	mux.HandleFunc("/api/challenges", makeHandler(challengesData))
	mux.HandleFunc("/api/leaderboard", makeHandler(leaderboardData))
	mux.HandleFunc("/api/activity", makeHandler(recentActivityData))
	mux.HandleFunc("/api/profile", makeHandler(userProfileData))
	mux.HandleFunc("/api/contact-info", makeHandler(contactInfo))
	mux.HandleFunc("/api/office-hours", makeHandler(officeHours))
	mux.HandleFunc("/api/team", makeHandler(teamMembers))

	// Wrap the mux with the CORS middleware
	handler := corsMiddleware(mux)

	log.Println("Starting server on localhost:8080")
	if err := http.ListenAndServe(":8080", handler); err != nil {
		log.Fatal(err)
	}
}
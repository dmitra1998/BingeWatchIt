package main

import (
	"log"
	"net/http"
	"os"

	"movie-backend/internal/db"
	"movie-backend/internal/handler"
	health_handler "movie-backend/internal/handler"
	middleware "movie-backend/internal/middleware"
	movieRepository "movie-backend/internal/repository"
	routes "movie-backend/internal/routes"

	"github.com/joho/godotenv"
)

func main() {
	// 1. Load env (local dev only)
	_ = godotenv.Load()

	// 2. Connect MongoDB
	client := db.Connect()
	database := client.Database(os.Getenv("DATABASE"))

	// 3. Setup routes
	mux := http.NewServeMux()
	mux.HandleFunc("/health", health_handler.Health)

	// 4. Start server
	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}

	movieRepo := movieRepository.NewMovieRepository(database)

	movieHandler := handler.NewMovieHandler(movieRepo)

	routes.RegisterMovieRoutes(mux, movieHandler)

	corsHandler := middleware.CORSMiddleware().Handler(mux)

	log.Fatal(http.ListenAndServe(":"+port, corsHandler))
}

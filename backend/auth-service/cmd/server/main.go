package main

import (
	handler "auth-service/internal/handlers"
	"log"
	"net/http"
	"os"

	"github.com/joho/godotenv"
)

func main() {

	err := godotenv.Load()

	if err != nil {
		log.Println("No .env file found")
	}

	port := os.Getenv("PORT")

	if port == "" {
		port = "8081"
	}
	mux := http.NewServeMux()
	mux.HandleFunc("/api/signup", handler.SignUp)
	mux.HandleFunc("/api/signin", handler.SignIn)

	log.Println("Server running on port", port)
	log.Fatal(http.ListenAndServe(":"+port, mux))
}

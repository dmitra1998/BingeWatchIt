package middleware

import (
	"os"
	"strings"

	"github.com/rs/cors"
)

func CORSMiddleware() *cors.Cors {
	originsEnv := os.Getenv("CORS_ALLOWED_ORIGINS")
	origins := strings.Split(originsEnv, ",")
	// log.Println("CORS_ALLOWED_ORIGINS:", origins)
	return cors.New(cors.Options{
		AllowedOrigins:   origins,
		AllowedMethods:   []string{"GET", "POST", "PUT", "DELETE", "OPTIONS"},
		AllowedHeaders:   []string{"Content-Type", "Authorization"},
		AllowCredentials: true,
		MaxAge:           600, // cache preflight for 10 min
	})
}

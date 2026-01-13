package routes

import (
	"movie-backend/internal/handler"
	"net/http"
)

func RegisterMovieRoutes(mux *http.ServeMux, movieHandler *handler.MovieHandler) {
	mux.HandleFunc("/api/v1/movies", movieHandler.GetAll)
}

package handler

import (
	"encoding/json"
	"net/http"

	movieRepository "movie-backend/internal/repository"
)

type MovieHandler struct {
	repo *movieRepository.MovieRepository
}

func NewMovieHandler(repo *movieRepository.MovieRepository) *MovieHandler {
	return &MovieHandler{repo: repo}
}

func (h *MovieHandler) GetAll(w http.ResponseWriter, r *http.Request) {
	movies, err := h.repo.GetMovies()
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(movies)
	// fmt.Println("Fetched movies:", movies)
}

package movieRepository

import (
	"context"
	"movie-backend/internal/model"
	"time"

	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
)

type MovieRepository struct {
	DB *mongo.Database
}

func NewMovieRepository(DB *mongo.Database) *MovieRepository {
	return &MovieRepository{
		DB: DB,
	}
}

func (r *MovieRepository) GetMovies() ([]model.Movies, error) {
	// 1. Create context with timeout
	ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
	defer cancel()

	// 2. Get collection
	collection := r.DB.Collection("movies")

	// 3. Query MongoDB
	cursor, err := collection.Find(ctx, bson.M{})
	if err != nil {
		return nil, err
	}
	defer cursor.Close(ctx)

	// 4. Decode results
	var movies []model.Movies
	for cursor.Next(ctx) {
		var movie model.Movies
		if err := cursor.Decode(&movie); err != nil {
			return nil, err
		}
		movies = append(movies, movie)
	}

	return movies, nil
}

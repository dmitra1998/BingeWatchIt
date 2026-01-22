package model

import "go.mongodb.org/mongo-driver/bson/primitive"

type Movies struct {
	ID          primitive.ObjectID `bson:"_id,omitempty" json:"id"`
	ImdbID      string             `bson:"imdbId" json:"imdbId"`
	Title       string             `bson:"title" json:"title"`
	ReleaseDate string             `bson:"releasDate" json:"releaseDate"`
	TrailerLink string             `bson:"trailerLink" json:"trailerLink"`
	Genres      []string           `bson:"genres" json:"genres"`
	Poster      string             `bson:"poster" json:"poster"`
	Backdrop    []string           `bson:"backdrops" json:"backdrops"`
	ReviewIds   []string           `bson:"reviewIds" json:"reviewIds"`
}

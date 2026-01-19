package db

import (
	"context"
	"log"
	"os"
	"sync"
	"time"

	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

var (
	client *mongo.Client
	once   sync.Once
)

// Connect initializes MongoDB once
func Connect() *mongo.Client {
	once.Do(func() {
		uri := os.Getenv("MONGO_URI")
		if uri == "" {
			log.Fatal("MONGO_URI not set")
		}

		ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
		defer cancel()

		var err error
		client, err = mongo.Connect(ctx, options.Client().ApplyURI(uri))
		if err != nil {
			log.Fatal("Mongo connect error:", err)
		}

		if err = client.Ping(ctx, nil); err != nil {
			log.Fatal("Mongo ping failed:", err)
		}

		log.Println("✅ MongoDB connected")
	})

	return client
}

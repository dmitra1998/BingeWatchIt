package signupHandler

import (
	"encoding/json"
	"log"
	"net/http"
	"strings"
)

type SignUpRequest struct {
	Username        string `json:"username"`
	Email           string `json:"email"`
	Password        string `json:"password"`
	ConfirmPassword string `json:"confirmPassword"`
}

type APIResponse struct {
	Message string `json:"message"`
}

func SignUp(w http.ResponseWriter, r *http.Request) {

	//Checking how the endpoint was called. It allows only POST method
	if r.Method != http.MethodPost {
		http.Error(w, "method not allowed", http.StatusMethodNotAllowed)
		return
	}

	//Checking if the content type is application/json
	if ct := r.Header.Get("Content-Type"); !strings.HasPrefix(ct, "application/json") {
		http.Error(w, "Content-Type must be application/json", http.StatusUnsupportedMediaType)
		return
	}
	log.Println("HIT /api/signup")

	//Prepare a struct to receive data. Allocates memory for the signup payload. This struct mirrors frontend JSON keys.
	var req SignUpRequest

	//JSON decoder with DisallowUnknownFields to avoid extra unexpected fields
	dec := json.NewDecoder(r.Body)
	dec.DisallowUnknownFields()

	//Decode the JSON payload into the struct
	if err := dec.Decode(&req); err != nil {
		http.Error(w, "invalid JSON: "+err.Error(), http.StatusBadRequest)
		return
	}

	//Basic validation of required fields
	req.Username = strings.TrimSpace(req.Username)
	req.Email = strings.TrimSpace(strings.ToLower(req.Email))
	if req.Username == "" || req.Email == "" || req.Password == "" || req.ConfirmPassword == "" {
		http.Error(w, "missing required fields", http.StatusBadRequest)
		return
	}

	log.Printf("Signup request: %+v\n", req)

	//Preparing JSON response headers
	w.Header().Set("Content-Type", "application/json")

	//Setting HTTP status code 200 OK and send a simple JSON response
	w.WriteHeader(http.StatusOK)
	_ = json.NewEncoder(w).Encode(APIResponse{Message: "received"})
}

package main

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"time"

	"github.com/go-chi/chi/v5"
	"github.com/go-chi/chi/v5/middleware"
	"github.com/rs/cors" // Untuk menangani CORS
)

// Struktur data untuk reservasi (sesuai dengan yang Anda kirim dari frontend)
type Reservation struct {
	ID          string    `json:"id"`
	Date        time.Time `json:"date"`
	Timeslot    string    `json:"timeslot"`
	Court       string    `json:"court"`
	Amount      float64   `json:"amount"`
	TransactionID string    `json:"transactionId"`
	Status      string    `json:"status"`
}

// Data simulasi (seharusnya dari database)
var reservations []Reservation

func main() {
	r := chi.NewRouter()

	// Middleware
	r.Use(middleware.Logger) // Log setiap permintaan
	r.Use(middleware.Recoverer) // Recover dari panic

	// Konfigurasi CORS
	corsHandler := cors.New(cors.Options{
		AllowedOrigins: []string{"http://localhost:3000"}, // Izinkan origin dari aplikasi React Anda
		AllowedMethods: []string{"GET", "POST", "PUT", "DELETE", "OPTIONS"},
		AllowedHeaders: []string{"Accept", "Authorization", "Content-Type", "X-CSRF-Token"},
		ExposedHeaders: []string{"Link"},
		AllowCredentials: true,
		MaxAge: 300, // Durasi cache CORS preflight request
	}).Handler

	r.Use(corsHandler)


	// Routes API
	r.Get("/", func(w http.ResponseWriter, r *http.Request) {
		w.Write([]byte("Welcome to the Badminton Booking API!"))
	})
	r.Post("/reservations", createReservation)
	r.Get("/reservations", getReservations)


	fmt.Println("Server Go berjalan di :8080")
	log.Fatal(http.ListenAndServe(":8080", r))
}

func createReservation(w http.ResponseWriter, r *http.Request) {
	var newReservation Reservation
	err := json.NewDecoder(r.Body).Decode(&newReservation)
	if err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	// Simulasi menyimpan ke database
	newReservation.ID = fmt.Sprintf("res-%d", len(reservations)+1)
	newReservation.Status = "confirmed" // Atur status
	newReservation.TransactionID = fmt.Sprintf("tx-%d", time.Now().Unix()) // Contoh
	reservations = append(reservations, newReservation)

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusCreated)
	json.NewEncoder(w).Encode(newReservation)
	fmt.Printf("New reservation created: %+v\n", newReservation)
}

func getReservations(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(reservations)
}
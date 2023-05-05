class AccommodationBooked {
    constructor(id, location, date_start, date_end) {
        this.id = id;
        this.location = location; // Address where the accommodation is located (Booking.com, Airbnb, etc.)
        this.date_start = date_start;
        this.date_end = date_end;
    }
}
module.exports = AccommodationBooked;
class Trip {
    constructor(id, user_id, avatar_id, list_destinations, list_activities, list_transports, hotels_booking) {
        this.id = id;
        this.user_id = user_id;
        this.avatar_id = avatar_id;
        this.list_destinations = list_destinations;
        this.list_activities = list_activities;
        this.list_transports = list_transports;
        this.hotels_booking = hotels_booking;
    }
}
module.exports = Trip;
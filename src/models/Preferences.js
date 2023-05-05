class Preferences {
    /**
     * TODO : Adapt the list of preferences with the most optimal ones
     */
    constructor(id, blind, reducedMobility, deaf, foodAllergy, petAllergy, otherAllergy, other) {
        this.id = id;
        this.blind = blind;
        this.reducedMobility = reducedMobility;
        this.deaf = deaf;
        this.foodAllergy = foodAllergy;
        this.petAllergy = petAllergy;
        this.otherAllergy = otherAllergy;
        this.other = other;
    }
}
module.exports = Preferences;
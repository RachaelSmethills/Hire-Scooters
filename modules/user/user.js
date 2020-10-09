class User {
    constructor(name) {
        this.name = name;
        this.scooter = {};
    }

    rentScooter(chargingStation) {
        const scooter = chargingStation.rentScooter();
        this.scooter = scooter;
        console.log(`${this.name} says: Got me a scooter`);
        console.table(this.scooter);
    }

    returnScooter(chargingStation) {
        chargingStation.returnScooter(this.scooter);
        console.log(`Bye scooter... says ${this.name}`);
        this.scooter = {};
    }

    rideScooter() {
        if(!this.scooter) {
            throw new Error('No scooter - your walking');
        }

        console.log(`Weeeeeeeeeeeeeeeee says ${this.name}`);
        this.scooter.accelerate();
    }
}

module.exports = User;
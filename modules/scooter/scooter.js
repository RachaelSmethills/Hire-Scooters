class Scooter {

}

class ElectricScooter extends Scooter {

    constructor() {
        super();
        this.power = 100;
    }

    async accelerate() {
        // Used till dead
        while(this.power > 0){
            this.power--;
            if (this.power % 10 == 0) {
                console.log(`Power is draining!: ${this.power}%`);
            }
        }
    }
    
}

module.exports = { Scooter, ElectricScooter }

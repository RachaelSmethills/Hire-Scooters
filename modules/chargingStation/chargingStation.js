class ChargingStation {

    constructor(...scooters) {
        this.availableScooters = scooters;
    }

    async returnScooter(...scooter) {
        scooter.map(x => {
            setTimeout(() => { 
                console.log('Scooter is now charged');
                x.power == 100;
                this.availableScooters.push(x);
            }, 2000);
            console.log('Scooter added');
        })
    }

    rentScooter() {
        if (this.availableScooters.length < 1) {
            throw new Error('No scooters left to take!');
        }

        const scooter = this.availableScooters.pop();
        console.log('Remaining Scooters:');
        console.table(this.availableScooters);

        return scooter;
    }

}

module.exports = ChargingStation;

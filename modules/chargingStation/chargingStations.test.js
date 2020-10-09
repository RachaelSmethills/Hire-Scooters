const { ElectricScooter } = require('../scooter/scooter');
const ChargingStation = require('./chargingStation');

describe('Charging Station', () => {

    test('has scooters', () => {
        const station = new ChargingStation();
        expect(station.availableScooters).toEqual([])
    });

    test('has scooters', async () => {
        const station = new ChargingStation();
        const scooter = new ElectricScooter();
        await station.returnScooter(scooter);
        expect(station.availableScooters).toEqual([])
    });

})
const ChargingStation = require('../chargingStation/chargingStation');
const { ElectricScooter } = require('../scooter/scooter');
const User = require('./user');

describe('User', () => {
    const user = new User('Fred');

    test('has given name', () => {
        expect(user.name).toEqual('Fred');
    });

    test('errors if he has no scooter to ride', () => {
        expect(() => user.rideScooter()).toThrowError();
    });

    test('has a scooter when rented and available', () => {
        const cs = new ChargingStation(new ElectricScooter());
        user.rentScooter(cs);
        expect(user.scooter).toBeTruthy()
    });

})
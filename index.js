const ChargingStation = require("./modules/chargingStation/chargingStation");
const { ElectricScooter } = require("./modules/scooter/scooter");
const User = require("./modules/user/user");

const scooter1 = new ElectricScooter(),
    scooter2 = new ElectricScooter(),
    scooter3 = new ElectricScooter(),
    scooter4 = new ElectricScooter(),
    scooter5 = new ElectricScooter();

const charles = new User('Charles');
const chargingStation = new ChargingStation(scooter1, scooter2, scooter3, scooter4, scooter5);

charles.rentScooter(chargingStation);
charles.rideScooter(); // rides till dead

charles.returnScooter(chargingStation);

console.log('Done');

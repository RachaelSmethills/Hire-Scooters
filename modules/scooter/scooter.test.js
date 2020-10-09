const { ElectricScooter } = require('./scooter');

describe('Electric Scooter', () => {
    const scooter = new ElectricScooter();

    test('starts with full charge', () => {
        expect(scooter.power).toEqual(100);
    });

})
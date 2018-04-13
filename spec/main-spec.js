const main = require('../main/main');

describe('taxi fee', function () {
    it('should 6 yuan with 1.8km without stop', function () {
        let fee = main.get_fee(1.8, 0);
        expect(fee).toEqual(6);
    });

    it('should 7 yuan with 1.8km and wait for 3min', function () {
        let fee = main.get_fee(1.8, 3);
        expect(fee).toEqual(7);
    });

    it('should 10 yuan with 3.5 km and wait for 10min', function () {
        let fee = main.get_fee(3.5, 10);
        expect(fee).toEqual(10);
    });

    it('should 17 yuan with 10km and wait for 15min', function () {
        let fee = main.get_fee(10, 15);
        expect(fee).toEqual(17);
    });
});

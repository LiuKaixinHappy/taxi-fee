const main = require('../main/main');

describe('taxi fee', function () {
    it('should 6 yuan with 1.8km without stop', function () {
        let fee = main.get_fee(1.8, 0);
        expect(fee).toEqual(6);
    });

    it('should 6 yuan with 1.8km and wait for 1min', function () {
        let fee = main.get_fee(1.8, 1);
        expect(fee).toEqual(6.25);
    });
});

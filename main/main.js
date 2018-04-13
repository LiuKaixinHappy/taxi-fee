function get_fee(km, wait_min) {
    if (km <= 2) {
        return 6 + wait_min * 0.25;
    }
}

module.exports = {get_fee};
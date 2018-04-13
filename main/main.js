function get_fee(km, wait_min) {
    if (km <= 2) {
        return Math.round(6 + wait_min * 0.25);
    } else if (km <= 8) {
        return Math.round(6 + (km - 2) * 0.8 + wait_min * 0.25);
    } else {
        return Math.round(6 + 6 * 0.8 + (km - 8) * 1.2 + wait_min * 0.25);
    }
}

module.exports = {get_fee};
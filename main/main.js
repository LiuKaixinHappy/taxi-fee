const FEE_FOR_START = 6;
const FEE_FOR_WAIT_PER_MIN = 0.25;
const FEE_FOR_NORMAL_PER_KM = 0.8;
const FEE_FOR_EXTRA = FEE_FOR_NORMAL_PER_KM + FEE_FOR_NORMAL_PER_KM * 0.5;

const DISTANCE_FOR_FREE = 2;
const DISTANCE_FOR_EXTRA_FEE = 8;

function is_less_than_free_distance(distance) {
    return distance <= DISTANCE_FOR_FREE;
}

function is_less_than_extra_fee_distance(distance) {
    return distance <= DISTANCE_FOR_EXTRA_FEE;
}

function get_fee_for_normal_distance(distance) {
    if (distance > DISTANCE_FOR_EXTRA_FEE) {
        distance = DISTANCE_FOR_EXTRA_FEE;
    }
    return (distance - DISTANCE_FOR_FREE)  * FEE_FOR_NORMAL_PER_KM;
}

function get_fee_for_wait(wait_min) {
    return wait_min * FEE_FOR_WAIT_PER_MIN;
}

function get_fee_for_extra_distance(distance) {
    return (distance - DISTANCE_FOR_EXTRA_FEE) * FEE_FOR_EXTRA;
}

function get_fee(distance, wait_min) {
    if (is_less_than_free_distance(distance)) {
        return Math.round(FEE_FOR_START + get_fee_for_wait(wait_min));
    } else if (is_less_than_extra_fee_distance(distance)) {
        return Math.round(FEE_FOR_START + get_fee_for_normal_distance(distance)
            + get_fee_for_wait(wait_min));
    } else {
        return Math.round(FEE_FOR_START + get_fee_for_normal_distance(distance)
            + get_fee_for_extra_distance(distance) + get_fee_for_wait(wait_min));
    }
}

module.exports = {get_fee};
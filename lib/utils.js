export const choice = (arr, rng) => {
    return arr[Math.floor(rng() * arr.length)]
}

export const chance = (pct, rng) => {
    return rng() >= pct;
}
export const choice = (arr, rng) => {
    return arr[Math.floor(rng() * arr.length)]
}

export const chance = (pct, rng) => {
    return rng() >= pct;
}

export const monthAbbrev = (month) => {
    switch(month) {
        case 0:
            return "Jan"
        case 1:
            return "Feb"
        case 2:
            return "Mar"
        case 3:
            return "Apr"
        case 4:
            return "May"
        case 5:
            return "Jun"
        case 6:
            return "Jul"
        case 7:
            return "Aug"
        case 8:
            return "Sep"
        case 9:
            return "Oct"
        case 10:
            return "Nov"
        case 11:
            return "Dec"
    }
}
// golf code
let name = ["Hole-inOne!", "Eagle", "birdie", "Par", "bogey", "Double Bogey" ]
function golfScore(par, strokes) {
    if (strokes == 1) {
        return names[0]
    } else if (strokes <= par - 2) {
        return name[1]
    } else if (strokes == par - 1) {
        return name[2]
    } else if (strokes == par) {
        return name[3]
    } else if (strokes == par - 1) {
        return name[4]
    } else if (strokes == par - 2) {
        return name[5]
    }
}

console.log(golfScore(5, 8));
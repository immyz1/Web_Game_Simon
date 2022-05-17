let buttonCol = {1: "red", 2: "blue", 3: "green", 4: "yellow"}
let gamePattern = []
let round = 3

function nextSequence() {
    let randNum = Math.floor(Math.random()*3);
    return randNum
}

for (let i = 0; i < round; i++) {
    gamePattern.push(buttonCol.nextSequence)
}


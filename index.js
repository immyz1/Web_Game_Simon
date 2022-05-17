let buttonCol = {0: "red", 1: "blue", 2: "green", 3: "yellow"};
let gamePattern = [];
let userChoosenCol = [];
let round = 1;
let gameState = true;

function nextSequence() {
    let randNum = Math.floor(Math.random()*4);
    return randNum
}

$(document).keypress(function(event) {
    if (event.key === 'a') {

        $('#level-title').text(`Level ${round}`)
        for (let i = 0; i < round; i++) {
            gamePattern.push(buttonCol[nextSequence()])
        }
        
        function initialPattern() {
            setTimeout(function() {s
        
            })
        }
        
        const timer = ms => new Promise(res => setTimeout(res, ms))
        
        async function load () { 
            for (const button of gamePattern) {
            let sound = new Audio(`sounds/${button}.mp3`)
            sound.play()
            $(`#${button}`).addClass("press");
            setInterval(function() {$(`#${button}`).removeClass("press")}, 500);
            await timer(1000); 
            }
        }
        
        load();
        
        $(document).click(function(event) {
            let clickSound = new Audio(`sounds/${event.target.id}.mp3`)
            
            if (userChoosenCol.length < gamePattern.length) {
                $(`#${event.target.id}`).addClass("press");
                userChoosenCol.push(event.target.id)
                clickSound.play()
                setTimeout(function() {
                $(`#${event.target.id}`).removeClass("press");
                }, 500);
            } else {
                if (userChoosenCol !== gamePattern) {
                    console.log("game over")
                }
            }
        });
    }
})












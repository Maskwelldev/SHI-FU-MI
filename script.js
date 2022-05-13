//déclaration des variables
let choice;
let playerSelection = btn1.addEventListener('click', shiFunction) || btn2.addEventListener('click', fuFunction) || btn3.addEventListener('click', miFunction);
let playerScore = 0;
var AIScore = 0;
let imgArray = [
    "<img src=\"icons/rock-svgrepo-com.svg\" class=\"image\" id=\"imageFilter1\" alt=\"rock\">",
    "<img src=\"icons/leaf-svgrepo-com.svg\" class=\"image\" id=\"imageFilter2\" alt=\"leaf\">",
    "<img src=\"icons/scissors-svgrepo-com.svg\" class=\"image\" id=\"imageFilter3\" alt=\"scissors\">"
]   
//switch light et dark mode
mode.addEventListener('click', displaySwitch);

//fonctions
function shiFunction() {
    choice = 0;
    let AISelector = Math.floor(Math.random() * 3);
    if (AISelector == choice) {
        sentence.innerHTML = 'DEUS';
    } else if (AISelector == 1) {
        sentence.innerHTML = 'YOU LOOSE';
        AIScore++;
    } else if (AISelector == 2) {
        sentence.innerHTML = 'YOU WIN';
        playerScore++;
    }
    scorePlayer.innerHTML = `Your score : ${playerScore}`;
    scoreAI.innerHTML = `AI score : ${AIScore}`;
    computerDisplay.innerHTML = imgArray[AISelector];
    document.querySelector("#computerDisplay > img").classList.add('roll');
    playerDisplay.innerHTML = imgArray[choice];
    // rampage();
}

function fuFunction() {
    choice = 1;
    let AISelector = Math.floor(Math.random() * 3);
    if (AISelector == choice) {
        sentence.innerHTML = 'DEUS';
    } else if (AISelector == 2) {
        sentence.innerHTML = 'YOU LOOSE';
        AIScore++;
    } else if (AISelector == 0) {
        sentence.innerHTML = 'YOU WIN';
        playerScore++;
    };
    scorePlayer.innerHTML = `Your score : ${playerScore}`;
    scoreAI.innerHTML = `AI score : ${AIScore}`;
    computerDisplay.innerHTML = imgArray[AISelector];
    document.querySelector("#computerDisplay > img").classList.add('roll');
    playerDisplay.innerHTML = imgArray[choice];
    // rampage();
}

function miFunction() {
    choice = 2;
    let AISelector = Math.floor(Math.random() * 3);
    if (AISelector == choice) {
        sentence.innerHTML = 'DEUS';
    } else if (AISelector == 0) {
        sentence.innerHTML = 'YOU LOOSE';
        AIScore++;
    } else if (AISelector == 1) {
        sentence.innerHTML = 'YOU WIN';
        playerScore++;
    };
    scorePlayer.innerHTML = `Your score : ${playerScore}`;
    scoreAI.innerHTML = `AI score : ${AIScore}`;
    computerDisplay.innerHTML = imgArray[AISelector];
    document.querySelector("#computerDisplay > img").classList.add('roll');
    playerDisplay.innerHTML = imgArray[choice];
    // rampage();
}

function displaySwitch(){
    body.classList.toggle('displayMode');
    versus.classList.toggle('versusWhite');
    scorePlayer.classList.toggle('scoreLight');
    scoreAI.classList.toggle('scoreLight');
}

versus.innerHTML = 'VS';
shi.innerHTML = 'SHI';
fu.innerHTML = 'FU';
mi.innerHTML = 'MI';

// function rampage() {
//     if ((playerScore > 10) && (AIScore < 10)) {
//         alert('WIN')
//     } else if ((AIScore > 10) && (playerScore < 10)) {
//         alert('LOST')
//     };
// }

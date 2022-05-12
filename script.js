//déclaration des variables que l'on utilisera ensuite
let choice;
let playerSelection = btn1.addEventListener('click', shiFunction) || btn2.addEventListener('click', fuFunction) || btn3.addEventListener('click', miFunction);
let playerScore = 0;
let AIScore = 0;
let imgArray = [
    "<img src=\"icons/rock-svgrepo-com.svg\" class=\"image\">",
    "<img src=\"icons/leaf-svgrepo-com.svg\" class=\"image\">",
    "<img src=\"icons/scissors-svgrepo-com.svg\" class=\"image\">"
    ]


function shiFunction() {
    choice = 0;
    let AISelector = Math.floor(Math.random() * 3);
    // console.log(AISelector);
    if (AISelector == choice) {
        console.log('Deus!')
    } else if (AISelector == 1) {   
        console.log('You loose');
        AIScore++;
    } else if (AISelector == 2) {
        console.log('You won');
        playerScore++;
    }
    console.log(playerScore, AIScore);
    scorePlayer.innerHTML = `Your score : ${playerScore}`;
    scoreAI.innerHTML = `AI score : ${AIScore}`;
    computerDisplay.innerHTML = imgArray[AISelector];
    // document.getElementsByClassName('image').classList.add("imageResize");
    playerDisplay.innerHTML = imgArray[choice];
    // document.getElementsByClassName('image').classList.add("imageResize");
}

function fuFunction() {
    choice = 1;
    let AISelector = Math.floor(Math.random() * 3);
    // console.log(AISelector);
    if (AISelector == choice) {
        console.log('Deus!')
    } else if (AISelector == 0) {
        console.log('You loose');
        AIScore++;
    } else if (AISelector == 2) {
        console.log('You won');
        playerScore++;
    };
    console.log(playerScore, AIScore);
    scorePlayer.innerHTML = `Your score : ${playerScore}`;
    scoreAI.innerHTML = `AI score : ${AIScore}`;
    computerDisplay.innerHTML = imgArray[AISelector];
    playerDisplay.innerHTML = imgArray[choice];
}

function miFunction() {
    choice = 2;
    let AISelector = Math.floor(Math.random() * 3);
    // console.log(AISelector);
    if (AISelector == choice) {
        console.log('Deus!')
    } else if (AISelector == 0) {
        console.log('You loose');
        AIScore++;
    } else if (AISelector == 1) {
        console.log('You won');
        playerScore++;
    };
    console.log(playerScore, AIScore);
    scorePlayer.innerHTML = `Your score : ${playerScore}`;
    scoreAI.innerHTML = `AI score : ${AIScore}`;
    computerDisplay.innerHTML = imgArray[AISelector];
    playerDisplay.innerHTML = imgArray[choice];
    }

    versus.innerHTML = 'VS';
    shi.innerHTML = 'SHI';
    fu.innerHTML = 'FU';
    mi.innerHTML = 'MI';
    union1.innerHTML = '-';
    union2.innerHTML = '-';



    
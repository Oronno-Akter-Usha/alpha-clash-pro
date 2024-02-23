// function play(){
//     //step-1: hide the home screen. to hide the screen add the class hidden to the home screen.
//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden');
//     // console.log(homeSection.classList)
//     //step-2: show the playground
//     const playGround = document.getElementById('play-ground');
//     playGround.classList.remove('hidden')
// }

// function handleKeyboardButtonPress(){
//     console.log('button pressed')
// }
// //capture keyboard key press
// document.addEventListener('keyup', handleKeyboardButtonPress);

function handleKeyboardKeyUpEvent(event){
    const playerPressed = event.key;

    //stop the game if pressed 'esc'
    if(playerPressed === 'Escape'){
        gameOver();
    }
    
    // key player is expected to press
    const currrentAlphabetElement = document.getElementById('current-alphabet');
    const currrentAlphabet = currrentAlphabetElement.innerText;
    const expectedAlphabet = currrentAlphabet.toLocaleLowerCase();

    // check right or worng key pressd
    if(playerPressed === expectedAlphabet){
        console.log('right key');

        const currentScore = getTextElementValueById('current-score');
        const updatedScore = currentScore + 1;
        setTextElementVlaueById('current-score', updatedScore);



        // update score
        // 1. get the current score
        // const currentScoreElement = document.getElementById('current-score');
        // const currentScoreText = currentScoreElement.innerText;
        // const currentScore = parseInt(currentScoreText);
        // console.log(currentScore);

        // //2. increase the score by 1
        // const newScore = currentScore + 1;

        // //3.show the update score
        // currentScoreElement.innerText = newScore;

        // //start a new round
        removeBackgroundColorById(expectedAlphabet);
        continueGame();
    }
    else{
        console.log('worng key');

        const currentLife = getTextElementValueById('current-life');
        const updateLife = currentLife - 1;
        setTextElementVlaueById('current-life', updateLife);

        if(updateLife === 0){
          gameOver();
        }
        



        // // step-1: get the current life number
        // const currentLifeElement = document.getElementById('current-life');
        // const currentLifeText = currentLifeElement.innerText;
        // const currentLife = parseInt(currentLifeText);
        // console.log(currentLife);
        // // step-2: reduce the life count
        // const newLife = currentLife - 1;

        // // step-3: display the update life count
        // currentLifeElement.innerText = newLife;

    }
}

document.addEventListener('keyup', handleKeyboardKeyUpEvent);

function continueGame(){
    //step-1: generate a ramdom alphabate
    const alphabet = getARandomAlphabet();
    // console.log('your random alphabet', alphabet);

    //set randomly generated alphabet to the screen (show it)
    const currrentAlphabetElement = document.getElementById('current-alphabet');
    currrentAlphabetElement.innerText = alphabet;

    // set Background color
    setBackgroundColorById(alphabet);
}

function play(){
    // hide everything show only the playground
    hideElementById('home-screen');
    hideElementById('final-score');
    showElementById('play-ground');

    // reset score and life
    setTextElementVlaueById('current-life', 5);
    setTextElementVlaueById('current-score', 0);


    continueGame()
}

function gameOver(){
    hideElementById('play-ground');
    showElementById('final-score');
    
    // update final score
    // 1.get the final score
    const lastScore = getTextElementValueById('current-score');
    console.log(lastScore);
    setTextElementVlaueById('last-score', lastScore);

    //clear the last selected alphabet highlight
    const currrentAlphabet = getElementTextById('current-alphabet');
    removeBackgroundColorById(currrentAlphabet);
}
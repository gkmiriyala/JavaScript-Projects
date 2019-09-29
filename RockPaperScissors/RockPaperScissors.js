const RPSgame = () => {

    //Score Countrer
    let playerScore = 0;
    let cScore = 0;

    //Start the game
    const startGame = () => {
        const playBtn = document.querySelector('.intro button');
        const introScreen = document.querySelector('.intro');
        const match = document.querySelector('.match');

        playBtn.addEventListener('click', () => {
            introScreen.classList.add("fadeOut");
            match.classList.add("fadeIn");
        });
    };

    //Play the match
    const playMatch = () => {
        const options = document.querySelectorAll('.options button')
        const playerHand = document.querySelector('player-hand')
        const computerHand = document.querySelector('computer-hand')

        //Computer Options
        
    };

    //call all the inner function
    startGame();
};

//start the game function
RPSgame();
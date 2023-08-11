function playGame(arg){
    clearMessages();
    let playerInput = arg; //prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

    let randomNumber = Math.floor(Math.random() * 3 + 1);

    console.log(randomNumber);

    function getMoveName(moveNumber) {
        if (moveNumber == 1) {
            return 'kamień';
        } else if (moveNumber == 2) {
            return 'papier';
        } else if (moveNumber == 3) {
            return 'nożyce'; j
        }
    }

    console.log(getMoveName(randomNumber));

    let computerMove = getMoveName(randomNumber);


    let playerMove = getMoveName(playerInput);

    function displayResult(playerMove, computerMove) {
        if ((playerMove == undefined) || (playerMove > 3)) {
            printMessage(`Masz raptem trzy cyfry do wyboru 1,2 lub 3 a ty wpisujesz co... ${playerInput}?! Popraw się!`);
        } else if ((computerMove == 'kamień' && playerMove == 'papier') || (computerMove == 'papier' && playerMove == 'nożyce') || (computerMove == 'nożyce' && playerMove == 'kamień')) {
            printMessage(`Twój ruch to: ${playerMove}, Ruch komputera to: ${computerMove} czyli... Ty wygrywasz!!!`);
        } else if (computerMove === playerMove) {
            printMessage(`Twój ruch to: ${playerMove}, Ruch komputera to: ${computerMove} Remis!`) 
        } else {
            printMessage(`Twój ruch to: ${playerMove}, Ruch komputera to: ${computerMove} Ty nie wygrywasz, bo wygrywa komputer!`) 
        }
    }

    displayResult(playerMove, computerMove);

}

document.getElementById('play-rock').addEventListener('click', function() {
    playGame(1);
});

document.getElementById('play-paper').addEventListener('click', function() {
    playGame(2);
});

document.getElementById('play-scissors').addEventListener('click', function() {
    playGame(3);
});




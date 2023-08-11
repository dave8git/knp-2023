{
function playGame(arg){
    clearMessages();
    const playerInput = arg; //prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

    const randomNumber = Math.floor(Math.random() * 3 + 1);

    console.log(randomNumber);

    const getMoveName = function(moveNumber) {
        if (moveNumber == 1) {
            return 'kamień';
        } else if (moveNumber == 2) {
            return 'papier';
        } else if (moveNumber == 3) {
            return 'nożyce'; j
        }
    }

    console.log(getMoveName(randomNumber));

    const computerMove = getMoveName(randomNumber);


    const playerMove = getMoveName(playerInput);

    const printMoves = function(computerMove, playerMove) {
       return  `Twój ruch to: ${playerMove}, Ruch komputera to: ${computerMove}`;
    }
    
    const displayResult = function(playerMove, computerMove) {
        if ((playerMove == undefined) || (playerMove > 3)) {
            printMessage(`Masz raptem trzy cyfry do wyboru 1,2 lub 3 a ty wpisujesz co... ${playerInput}?! Popraw się!`);
        } else if ((computerMove == 'kamień' && playerMove == 'papier') || (computerMove == 'papier' && playerMove == 'nożyce') || (computerMove == 'nożyce' && playerMove == 'kamień')) {
            printMessage(`${printMoves()} czyli... Ty wygrywasz!!!`);
        } else if (computerMove === playerMove) {
            printMessage(`${printMoves()} Remis!`) 
        } else {
            printMessage(`${printMoves()} Ty nie wygrywasz, bo wygrywa komputer!`) 
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
}




let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log(randomNumber);

function getMoveName(moveNumber) {
    if(moveNumber == 1){
        return 'kamień';
     } else if(moveNumber == 2) {
        return 'papier';
     } else if(moveNumber == 3){
        return 'nożyce';j
    }
}

console.log(getMoveName(randomNumber));

let computerMove = getMoveName(randomNumber);


let playerMove = getMoveName(playerInput);

// if(playerInput == 1){
//   playerMove = 'kamień';
// } else if (playerInput == 2) {
//     playerMove = 'papier';
// } else if (playerInput == 3) {
//     playerMove = 'nożyce';
// }

function displayResult(playerMove, computerMove) {
    if((playerMove == undefined) || (playerMove > 3)) {
        printMessage(`Masz raptem trzy cyfry do wyboru 1,2 lub 3 a ty wpisujesz co... ${playerInput}?! Popraw się!`);
    } else if((computerMove == 'kamień' && playerMove == 'papier') || (computerMove == 'papier' && playerMove == 'nożyce') || (computerMove == 'nożyce' && playerMove == 'kamień')) {
            printMessage('Twój ruch to: ' + playerMove);
            printMessage('Ruch komputera to ' + computerMove);
            printMessage('Ty wygrywasz!');
    } else if (computerMove === playerMove){
            printMessage('Twój ruch to: ' + playerMove);
            printMessage('Ruch komputera to ' + computerMove);
            printMessage('Remis!')
    }else    {
            printMessage('Twój ruch to: ' + playerMove);
            printMessage('Ruch komputera to ' + computerMove);
            printMessage('Ty nie wygrywasz, bo wygrywa komputer!')
    } 
}

displayResult(playerMove, computerMove); 



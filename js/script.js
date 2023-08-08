let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = 'nieznany ruch';

if(randomNumber == 1){
   computerMove = 'kamień';
} else if(computerMove == 2) {
    computerMove = 'papier';
} else {
    computerMove = 'nożyce';
}

printMessage('Mój ruch to: ' + computerMove);

console.log('Gracz wpisał: ' + playerInput);

let playerMove = 'nieznany ruch';

if(playerInput == '1'){
  playerMove = 'kamień';
} else if (playerInput == '2') {
    playerMove = 'papier';
} else if (playerInput == '3') {
    playerMove = 'nożyce';
}
if((playerMove !== '1') || (playerMove !== '2') || (playerMove !== '3')) {
    printMessage(`Masz raptem trzy cyfry do wyboru 1,2 lub 3 a ty wpisujesz co... ${playerInput}?! Popraw się!`)
} else if( (computerMove == 'kamień' && playerMove == 'papier') && (computerMove == 'papier' && playerMove == 'nożyce') && (computerMove == 'nożyce' && playerMove == 'kamień')){
    printMessage('Ty wygrywasz!');
    printMessage('Twój ruch to: ' + playerMove);
} else {
    printMessage('Ty nie wygrywasz, bo wygrywa komputer!')
}




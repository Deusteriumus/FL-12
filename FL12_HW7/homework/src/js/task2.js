const MAX_ATTEMPTS = 3;
const MAX_NUM_STEP = 4;
const PRIZE_MULT = 2;
let currentAttempt = 0;
let totalAttempts = 3;
let possiblePrize = 0;
let totalPrize = 0;
let maxNumber = 8;
let random = Math.floor(Math.random() * (maxNumber + 1));
let gamePlay = true;
let askAgain = '';
let userPlay = confirm('Do you want to play a game?');

while (gamePlay) {

    if (userPlay) {
        let firstPrize = 100;
        let secondPrize = 50;
        let thirdPrize = 25;

        let prize = [firstPrize, secondPrize, thirdPrize];
        possiblePrize = prize[currentAttempt];
        let userNumber = Number(prompt(`Choose a roulette pocket number from 0 to ${maxNumber}` + '\n' +
            `Attempts left: ${totalAttempts}` + '\n' +
            `Total prize: ${totalPrize}$` + '\n' +
            `Possible price on current attempt: ${possiblePrize}$`, null));

        if (userNumber < 0 || parseInt(userNumber) !== userNumber) {
            alert('Please, enter only natural positive numbers');
            ++currentAttempt;
            --totalAttempts;

            if (currentAttempt === MAX_ATTEMPTS) {
                totalPrize = 0;
                alert(`Thank you for your participation. Your prize is: ${totalPrize}$`);
                askAgain = confirm('Do you want to play again?');
                if (askAgain) {
                    currentAttempt = 0;
                    totalPrize = 0;
                    totalAttempts = MAX_ATTEMPTS;
                } else {
                    gamePlay = false;
                }
            }
        } else if (userNumber !== random) {
            ++currentAttempt;
            --totalAttempts;

            if (currentAttempt === MAX_ATTEMPTS) {
                totalPrize = 0;
                alert(`Thank you for your participation. Your prize is: ${totalPrize}$`);
                askAgain = confirm('Do you want to play again?');
                if (askAgain) {
                    currentAttempt = 0;
                    totalPrize = 0;
                    totalAttempts = MAX_ATTEMPTS;
                } else {
                    gamePlay = false;
                }
            }
        } else {
            totalPrize += prize[currentAttempt];
            let winGame = confirm('Congratulation, you won!' + '\n' +
                `Your prize is: ${totalPrize}$` + '\n' +
                'Do you want to continue?');
            if (winGame) {
                firstPrize *= PRIZE_MULT;
                secondPrize *= PRIZE_MULT;
                thirdPrize *= PRIZE_MULT;
                totalAttempts = MAX_ATTEMPTS;
                maxNumber += MAX_NUM_STEP;
                currentAttempt = 0;
            } else {
                alert(`Thank you for your participation. Your prize is: ${totalPrize}$`);
                askAgain = confirm('Do you want to play again?');
                if (askAgain) {
                    currentAttempt = 0;
                    totalPrize = 0;
                    totalAttempts = MAX_ATTEMPTS;
                } else {
                    gamePlay = false;
                }
            }
        }
    } else {
        gamePlay = false;
        alert('You did not become a billionaire, but can.');
    }
}
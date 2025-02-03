const numberToGuess = Math.floor(Math.random() * 10) + 1;

function checkGuess() {
    const userGuess = parseInt(document.getElementById('guess').value);
    const resultElement = document.getElementById('result');

    if (userGuess === numberToGuess) {
        resultElement.innerText = 'Congratulations! You guessed correctly!';
    } else {
        resultElement.innerText = `Sorry, that's not correct. The number was ${numberToGuess}.`;
    }
}

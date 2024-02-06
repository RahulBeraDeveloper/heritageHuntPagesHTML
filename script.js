function toggleMode(mode) {
    var body = document.body;

    if (mode === 'light') {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
    } else {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
    }
}

function checkAnswer() {
    var userAnswer = document.getElementById('answer').value.toLowerCase();
    var correctAnswer = 'victoria memorial';
    var resultDiv = document.getElementById('result');

    if (userAnswer === correctAnswer) {
        resultDiv.textContent = 'Correct! You identified the heritage place.';
        resultDiv.style.color = 'green';
    } else {
        resultDiv.textContent = 'Incorrect. Try again!';
        resultDiv.style.color = 'red';
    }
}

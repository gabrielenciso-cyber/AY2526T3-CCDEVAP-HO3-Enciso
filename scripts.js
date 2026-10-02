let num1, num2, operator, correctAnswer;
let score = 0;

const operators = ["+", "-", "*"];

function generateQuestion() {
    num1 = Math.floor(Math.random() * 11);
    num2 = Math.floor(Math.random() * 11);

    operator = operators[Math.floor(Math.random() * operators.length)];

    if (operator === "+") {
        correctAnswer = num1 + num2;
    } else if (operator === "-") { 
        correctAnswer = num1 - num2;
    } else if (operator === "*") {
        correctAnswer = num1 * num2;
    }

    document.getElementById("question").textContent = num1 + " " + operator + " " + num2;
    document.getElementById("answer").value = "";
}

function checkAnswer() {
    let userAnswer = Number(document.getElementById("answer").value);
    let message = document.getElementById("message");

    if (userAnswer === correctAnswer) {
        score++;
        message.textContent = "Correct!";
        message.style.color = "green";
    } else {
        message.textContent = "Wrong! Correct answer is " + correctAnswer + ".";
        message.style.color = "red";
    }

    document.getElementById("score").textContent = score;

    if (score === 5) {
        document.getElementById("div-questions").style.display = "none";
        document.getElementById("div-success").style.display = "block";
    } else {
        generateQuestion();
    }
}

function playAgain() {
    score = 0;

    document.getElementById("score").textContent = score;
    document.getElementById("message").textContent = "";

    document.getElementById("div-questions").style.display = "block";
    document.getElementById("div-success").style.display = "none";

    generateQuestion();
}

generateQuestion();

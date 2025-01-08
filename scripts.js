let systemCoefficients = {}; // Store coefficients for the current system

function generateProblem() {
    const num1 = Math.floor(Math.random() * 100);
    const num2 = Math.floor(Math.random() * 100);
    const correctAnswer = num1 + num2;

    document.getElementById("problem").textContent = `What is ${num1} + ${num2}?`;
    document.getElementById("answer").value = "";
    document.getElementById("feedback").textContent = "";

    // Store correct answer for validation
    window.correctAnswer = correctAnswer;
}

function checkAnswer() {
    const userAnswer = parseInt(document.getElementById("answer").value, 10);
    if (userAnswer === window.correctAnswer) {
        document.getElementById("feedback").textContent = "Correct! Great job!";
        document.getElementById("feedback").style.color = "green";
    } else {
        document.getElementById("feedback").textContent = `Incorrect! The correct answer is ${window.correctAnswer}.`;
        document.getElementById("feedback").style.color = "red";
    }
}

function generateSystem() {
    const x = Math.floor(Math.random() * 10) + 1;
    const y = Math.floor(Math.random() * 10) + 1;

    const a1 = Math.floor(Math.random() * 10) + 1;
    const b1 = Math.floor(Math.random() * 10) + 1;
    const c1 = a1 * x + b1 * y;

    const a2 = Math.floor(Math.random() * 10) + 1;
    const b2 = Math.floor(Math.random() * 10) + 1;
    const c2 = a2 * x + b2 * y;

    systemCoefficients = { a1, b1, c1, a2, b2, c2, x, y };

    document.getElementById("equations").textContent =
        `${a1}x + ${b1}y = ${c1}\n` +
        `${a2}x + ${b2}y = ${c2}`;

    document.getElementById("x-answer").value = "";
    document.getElementById("y-answer").value = "";
    document.getElementById("algebra-feedback").textContent = "";
}

function checkSystem() {
    const { x, y } = systemCoefficients;

    const userX = parseInt(document.getElementById("x-answer").value, 10);
    const userY = parseInt(document.getElementById("y-answer").value, 10);

    if (userX === x && userY === y) {
        document.getElementById("algebra-feedback").textContent = `Correct! The solution is x = ${x}, y = ${y}.`;
        document.getElementById("algebra-feedback").style.color = "green";
    } else {
        document.getElementById("algebra-feedback").textContent = `Incorrect. The correct solution is x = ${x}, y = ${y}.`;
        document.getElementById("algebra-feedback").style.color = "red";
    }
}

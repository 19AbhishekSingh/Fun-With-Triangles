const quizContainer = document.querySelector(".quiz-form");
const submit = document.querySelector("#check-btn");
const outputEl = document.querySelector("#output");

const correctAnswer = ['right', 'equilateral', '2 congruent sides', '180°'];

function calculateScore() {
    let score = 0;
    let index = 0;
    const formResult = new FormData(quizContainer);
    for (let value of formResult.values()) {

        if (value === correctAnswer[index]) {
            score = score + 1;
        }
        index = index + 1;
    }
    outputEl.innerText = "yay! your score is " + score;
}




const questions = [
    {
        question: "Which word means 'to clean or make pure'?",
        options: ["Demolish", "Purified", "Desertion", "Distinguish"],
        correct: 1
    },
    {
        question: "Which word refers to 'leaving a place without planning to return'?",
        options: ["Resistance", "Coincided", "Desertion", "Priority"],
        correct: 2
    },
    {
        question: "What does 'cutting-edge' mean?",
        options: ["Outdated", "Innovative and new", "Old-fashioned", "Ineffective"],
        correct: 1
    },
    {
        question: "If something is ____, it has the quality of being genuine or true.",
        options: ["Capacity", "Authenticity", "Resistance", "Dispute"],
        correct: 1
    },
    {
        question: "____ is the process of removing trees from a forested area.",
        options: ["Conservation", "Commence", "Deforestation", "Landmark"],
        correct: 2
    }
];

function displayQuiz() {
    const quizContainer = document.getElementById("quiz-container");
    questions.forEach((q, index) => {
        const questionElement = document.createElement("div");
        questionElement.classList.add("question");
        questionElement.innerHTML = <p>${index + 1}. ${q.question}</p>;
        q.options.forEach((option, i) => {
            const optionElement = document.createElement("div");
            optionElement.innerHTML = 
                <input type="radio" name="question${index}" value="${i}">
                <label>${option}</label>
            ;
            questionElement.appendChild(optionElement);
        });
        quizContainer.appendChild(questionElement);
    });
}

function submitQuiz() {
    let score = 0;
    questions.forEach((q, index) => {
        const selectedOption = document.querySelector(input[name="question${index}"]:checked);
        if (selectedOption && parseInt(selectedOption.value) === q.correct) {
            score++;
        }
    });
    document.getElementById("results").innerText = Your score: ${score}/${questions.length};
}

// Display the quiz when the page loads
window.onload = displayQuiz;
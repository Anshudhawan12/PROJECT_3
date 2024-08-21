
const quizData = [
    { question: "What is the capital of France?", options: ["Berlin", "Madrid", "Paris", "Lisbon"], correct: "Paris" },
    { question: "Which is the largest planet in the Solar System?", options: ["Earth", "Mars", "Jupiter", "Saturn"], correct: "Jupiter" },
    { question: "Who wrote 'Romeo and Juliet'?", options: ["William Shakespeare", "Charles Dickens", "Mark Twain", "Jane Austen"], correct: "William Shakespeare" },
    { question: "What is the largest mammal in the world?", options: ["Elephant", "Giraffe", "Blue Whale", "Great White Shark"], correct: "Blue Whale" },
    { question: "Who developed the theory of relativity?", options: ["Isaac Newton", "Galileo Galilei", "Albert Einstein", "Nikola Tesla"], correct: "Albert Einstein" },
    { question: "Which ocean is the largest by surface area?", options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"], correct: "Pacific Ocean" },
    { question: "Which planet is known as the Red Planet?", options: ["Earth", "Mars", "Venus", "Jupiter"], correct: "Mars" },
    { question: "Which gas do plants absorb from the atmosphere?", options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Helium"], correct: "Carbon Dioxide" },
    { question: "What color is the sky on a clear day?", options: ["Red", "Blue", "Green", "Yellow"], correct: "Blue" },
    { question: "How many continents are there on Earth?", options: ["5", "6", "7", "8"], correct: "7" }
];

const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

function createQuiz() {
    let quizHtml = "";

    quizData.forEach((question, index) => {
        quizHtml += `<h3>${question.question}</h3>`;

        question.options.forEach(option => {
            quizHtml += `
                <label>
                    <input type="radio" name="question${index}" value="${option}">
                    ${option}
                </label><br>
            `;
        });

        quizHtml += "<br>";
    });

    quizContainer.innerHTML = quizHtml;
}
function showResults() {
    let score = 0;

    quizData.forEach((question, index) => {
        const answerContainer = quizContainer.querySelectorAll(`input[name="question${index}"]`);
        answerContainer.forEach(answer => {
            if (answer.checked) {
                if (answer.value === question.correct) {
                    answer.parentElement.style.color = 'green'; // Correct answer
                    score++;
                } else {
                    answer.parentElement.style.color = 'red'; // Incorrect answer
                }
            }
        });
    });

    resultsContainer.innerHTML = `You scored ${score} out of ${quizData.length}`;
}

createQuiz();

submitButton.addEventListener('click', showResults);

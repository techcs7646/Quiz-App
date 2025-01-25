// Quiz Data
const quizData = [
    {
      question: "What is the capital of France?",
      options: ["Berlin", "Madrid", "Paris", "Lisbon"],
      answer: "Paris",
    },
    {
      question: "Which programming language is known as the 'language of the web'?",
      options: ["Python", "JavaScript", "C++", "Java"],
      answer: "JavaScript",
    },
    {
      question: "Who painted the Mona Lisa?",
      options: ["Van Gogh", "Da Vinci", "Picasso", "Michelangelo"],
      answer: "Da Vinci",
    },
    {
      question: "What is the largest planet in our solar system?",
      options: ["Earth", "Mars", "Jupiter", "Saturn"],
      answer: "Jupiter",
    },
  ];
  
  // References to DOM Elements
  const questionEl = document.getElementById("question");
  const optionsEl = document.getElementById("options");
  const nextBtn = document.getElementById("next-btn");
  const quizContainer = document.getElementById("quiz-container");
  
  let currentQuestionIndex = 0;
  let score = 0;
  
  // Load Question
  function loadQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    questionEl.textContent = currentQuestion.question;
    optionsEl.innerHTML = "";
  
    currentQuestion.options.forEach((option, index) => {
      const button = document.createElement("button");
      button.textContent = option;
      button.classList.add("option");
      button.addEventListener("click", () => selectAnswer(button, option));
      optionsEl.appendChild(button);
    });
  }
  
  // Select Answer
  function selectAnswer(button, selectedOption) {
    const currentQuestion = quizData[currentQuestionIndex];
  
    if (selectedOption === currentQuestion.answer) {
      score++;
      button.style.backgroundColor = "green";
    } else {
      button.style.backgroundColor = "red";
    }
  
    Array.from(optionsEl.children).forEach((btn) => {
      btn.disabled = true;
      if (btn.textContent === currentQuestion.answer) {
        btn.style.backgroundColor = "green";
      }
    });
  }
  
  // Next Question
  nextBtn.addEventListener("click", () => {
    currentQuestionIndex++;
  
    if (currentQuestionIndex < quizData.length) {
      loadQuestion();
    } else {
      quizContainer.innerHTML = `<h1>Quiz Completed</h1><p class='score'>Your Score: ${score}/${quizData.length}</p>`;
    }
  });
  
  // Initialize Quiz
  loadQuestion();
  
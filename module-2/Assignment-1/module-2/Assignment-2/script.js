const questions = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    answer: "Paris"
  },
  {
    question: "What is the largest planet in our solar system?",
    options: ["Earth", "Jupiter", "Saturn", "Mars"],
    answer: "Jupiter"
  },
  {
    question: "What is the chemical symbol for gold?",
    options: ["Au", "Ag", "Fe", "Pb"],
    answer: "Au"
  },
  {
    question: "What is the powerhouse of the cell?",
    options: ["Nucleus", "Mitochondria", "Ribosome", "Endoplasmic Reticulum"],
    answer: "Mitochondria"
  },
  {
    question: "What is the largest ocean on Earth?",
    options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
    answer: "Pacific Ocean"
  },
  {
    question: "What is the currency of Japan?",
    options: ["Yen", "Dollar", "Euro", "Pound"],
    answer: "Yen"
  },
  {
    question: "What is the tallest mountain in the world?",
    options: ["Mount Everest", "K2", "Kangchenjunga", "Lhotse"],
    answer: "Mount Everest"
  },
  {
    question: "What is the largest desert in the world?",
    options: ["Sahara Desert", "Arabian Desert", "Gobi Desert", "Kalahari Desert"],
    answer: "Sahara Desert"
  }
];

let index = 0;
let score = 0;

const quizBox = document.querySelector("#quiz-box");
const scoreBox = document.querySelector("#score-box");
const questionText = document.querySelector("#question");
const optionsBox = document.querySelector("#options");
const nextBtn = document.querySelector("#next-btn");
const resultText = document.querySelector("#result-text");

function loadQuestion() {
  nextBtn.style.display = "none";
  optionsBox.innerHTML = "";
  
  let q = questions[index];
  questionText.innerText = (index + 1) + ". " + q.question;

  q.options.forEach(opt => {
    let btn = document.createElement("button");
    btn.innerText = opt;
    btn.className = "opt-btn";
    
    btn.onclick = function() {
      checkAnswer(btn, opt, q.answer);
    };
    
    optionsBox.appendChild(btn);
  });
}

function checkAnswer(selectedBtn, selectedText, correctText) {
  let allBtns = optionsBox.querySelectorAll("button");
  
  allBtns.forEach(btn => {
    btn.disabled = true;
    if (btn.innerText === correctText) {
      btn.classList.add("correct");
    }
  });

  if (selectedText === correctText) {
    score++;
  } else {
    selectedBtn.classList.add("wrong");
  }

  nextBtn.style.display = "block";
}

nextBtn.onclick = function() {
  index++;
  if (index < questions.length) {
    loadQuestion();
  } else {
    showScore();
  }
};

function showScore() {
  quizBox.style.display = "none";
  scoreBox.style.display = "block";
  
  let msg = "Good job!";
  if (score === 8) {
    msg = "Excellent!";
  } else if (score < 4) {
    msg = "Better luck next time!";
  }

  resultText.innerText = `You scored ${score} out of ${questions.length} - ${msg}`;
}

document.querySelector("#restart-btn").onclick = function() {
  index = 0;
  score = 0;
  scoreBox.style.display = "none";
  quizBox.style.display = "block";
  loadQuestion();
};

loadQuestion();
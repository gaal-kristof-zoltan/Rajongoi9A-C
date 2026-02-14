const quizData = [
  { question: "Melyik cég fejlesztette a CS2-t?", answers: ["Valve", "Riot", "EA", "Ubisoft"], correct: 0 },
  { question: "Melyik motorra épül a CS2?", answers: ["Source", "Source 2", "Unreal 5", "Unity"], correct: 1 },
  { question: "Hány játékos van egy csapatban?", answers: ["4", "5", "6", "8"], correct: 1 },
  { question: "Melyik sniper fegyver?", answers: ["AWP", "AK-47", "MP9", "M4A1"], correct: 0 },
  { question: "Melyik klasszikus pálya?", answers: ["Dust2", "City", "Arena", "Compound"], correct: 0 },
  { question: "Ki rakhatja le a bombát?", answers: ["CT", "Terrorist", "Mindkettő", "Senki"], correct: 1 },
  { question: "Mi történik ha lejár az idő bomba nélkül?", answers: ["T nyer", "CT nyer", "Döntetlen", "Új kör"], correct: 1 },
  { question: "Melyik pisztoly?", answers: ["Glock", "AWP", "AK-47", "P90"], correct: 0 },
  { question: "MR12 rendszerben hány kör kell a győzelemhez?", answers: ["13", "16", "12", "10"], correct: 0 },
  { question: "Melyik gránát vakít?", answers: ["Flashbang", "Smoke", "HE", "Molotov"], correct: 0 },
  { question: "CT fő fegyvere?", answers: ["AK-47", "M4A1", "MAC-10", "Glock"], correct: 1 },
  { question: "Mi rontja a pontosságot?", answers: ["Állás", "Mozgás közben lövés", "Scope", "Guggolás"], correct: 1 },
  { question: "Melyik pálya van erőműben?", answers: ["Nuke", "Dust2", "Mirage", "Inferno"], correct: 0 },
  { question: "Mi történik ha felrobban a bomba?", answers: ["CT nyer", "T nyer", "Döntetlen", "Restart"], correct: 1 },
  { question: "Melyik SMG?", answers: ["MP9", "AWP", "USP-S", "AK-47"], correct: 0 },
  { question: "Melyik fegyver csak T oldal?", answers: ["AK-47", "M4A1", "Famas", "MP9"], correct: 0 },
  { question: "Melyik pálya sivatagos?", answers: ["Dust2", "Nuke", "Vertigo", "Ancient"], correct: 0 },
  { question: "Melyik gránát takar el látást?", answers: ["Smoke", "Flashbang", "HE", "Decoy"], correct: 0 },
  { question: "Melyik fegyver félautomata sniper?", answers: ["SSG 08", "Nova", "MP5", "MAC-10"], correct: 0 },
  { question: "Mi kell defuse-hoz?", answers: ["Knife", "Defuse kit", "Smoke", "Semmi"], correct: 1 },
  { question: "Hány bombahely van legtöbb pályán?", answers: ["1", "2", "3", "4"], correct: 1 },
  { question: "Melyik fegyver shotgun?", answers: ["Nova", "P90", "Glock", "M4A1"], correct: 0 },
  { question: "Melyik mód a rangsorolt?", answers: ["Competitive", "Casual", "Deathmatch", "Wingman Bot"], correct: 0 },
  { question: "Melyik oldal indul támadóként?", answers: ["CT", "Terrorist", "Mindkettő", "Random"], correct: 1 },
  { question: "Mi történik félidőben?", answers: ["Oldalcsere", "Map csere", "Játék vége", "Restart"], correct: 0 }
];

let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById("question");
const answersElement = document.getElementById("answers");
const resultElement = document.getElementById("result");

function loadQuestion() {
  const currentQuiz = quizData[currentQuestion];
  questionElement.innerText = `${currentQuestion + 1}. ${currentQuiz.question}`;
  answersElement.innerHTML = "";

  currentQuiz.answers.forEach((answer, index) => {
    const button = document.createElement("button");
    button.innerText = answer;
    button.classList.add("answer-btn");
    button.addEventListener("click", () => selectAnswer(index));
    answersElement.appendChild(button);
  });
}

function selectAnswer(index) {
  if (index === quizData[currentQuestion].correct) {
    score++;
  }

  currentQuestion++;

  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  document.getElementById("quiz").classList.add("hidden");
  resultElement.classList.remove("hidden");

  let rank = "";
  if (score <= 8) rank = "Silver 😅";
  else if (score <= 17) rank = "Gold 🟡";
  else rank = "Global Elite 🔥";

  resultElement.innerHTML = `
    <h2>Vége a quiznek!</h2>
    <p>Pontszámod: ${score} / ${quizData.length}</p>
    <p>Rangod: <strong>${rank}</strong></p>
    <button onclick="location.reload()">Újra</button>
  `;
}

loadQuestion();
import "./Game2.css";
import { printTemplate as DashboardTemplate } from "../Dashboard/Dashboard";

const template = () => `
<section class="all-game2">
<nav class="head-game2">
<button id="goback-game2"><img src="https://res.cloudinary.com/dysog0ybg/image/upload/v1675671053/THC%20PROYECT/hogar_xtqkys.png" alt="home"/></button>
</nav>
<section class="game2">
<h2>PIEDRA PAPEL O TIJERA</h2>
<div>SELEC THE CORRECT OPTION</div>
<div class="player1-game2">
<button id="rock-player1">ROCK</button>
<button id="paper-player1">PAPER</button>
<button id="scissors-player1">SCISSORS</button>
</div>
<div class="result-game2">
<button id="result-player1"></button>
<button id="result-player2"></button>
</div>
</section>
<div class="winner-game2">
</div>
</section>
`;

const addEventListener = () => {
  const btn = document.querySelector("#goback-game2");
  btn.addEventListener("click", () => {
    DashboardTemplate();
  });
};

let player1 = [];
let player2 = [];

const comparation = () => {
  if (player1 === player2) {
    document.querySelector(".winner-game2").innerHTML = "EMPATADO";
    player1 = [];
    player2 = [];
  } else if (
    (player1 == 1 && player2 == 3) ||
    (player1 == 2 && player2 == 1) ||
    (player1 == 3 && player2 == 2)
  ) {
    document.querySelector(".winner-game2").innerHTML = "WINNER 1";
    player1 = [];
    player2 = [];
  } else
    (player1 == 1 && player2 == 2) ||
      (player1 == 2 && player2 == 3) ||
      (player1 == 3 && player2 == 1);
  {
    document.querySelector(".winner-game2").innerHTML = "WINNER 2";
    player1 = [];
    player2 = [];
  }
};
const rock = () => {
  let player1 = [];
  let player2 = [];
  document.querySelector("#rock-player1").addEventListener("click", () => {
    document.querySelector("#result-player1").innerHTML = "ROCK";
    getComputerchoice();
    player1.push(1);
    comparation();
  });
};
const paper = () => {
  let player1 = [];
  document.querySelector("#paper-player1").addEventListener("click", () => {
    document.querySelector("#result-player1").innerHTML = "PAPER";
    getComputerchoice();
    player1.push(2);
    comparation();
  });
};
const scissors = () => {
  let player1 = [];
  document.querySelector("#scissors-player1").addEventListener("click", () => {
    document.querySelector("#result-player1").innerHTML = "SCISSORS";
    getComputerchoice();
    player1.push(3);
    comparation();
  });
};

const getComputerchoice = () => {
  let computerChoice = Math.random();
  if (computerChoice < 0.34) {
    document.querySelector("#result-player2").innerHTML = "PAPER";
    player2.push(1);
  }
  if (computerChoice >= 0.34 && computerChoice < 0.67) {
    document.querySelector("#result-player2").innerHTML = "SCISSORS";
    player2.push(2);
  }
  if (computerChoice >= 0.67) {
    document.querySelector("#result-player2").innerHTML = "ROCK";
    player2.push(3);
  }
  return computerChoice;
};

export const printTemplate = () => {
  document.querySelector("main").innerHTML = template();
  addEventListener();
  rock();
  paper();
  scissors();
};

import "./Game2.css";
import { printTemplate as DashboardTemplate } from "../Dashboard/Dashboard";

const template = () => `
<section class="all-game2">
<nav class="head-game2">
<button id="goback-game2"><img src="https://res.cloudinary.com/dysog0ybg/image/upload/v1675671053/THC%20PROYECT/hogar_xtqkys.png" alt="home"/></button>
</nav>
<section class="game2">
<h2>ROCK PAPER OR SCISSORS</h2>
<button id="playagain">PLAY AGAIN</button>

<section class="ppt">
<div class="player1-game2">
<h2>PLAYER1</h2>
<button id="rock-player1"><img src="https://res.cloudinary.com/dysog0ybg/image/upload/v1675693852/THC%20PROYECT/piedra_pthkqv.png" alt="ROCK"/></button>
<button id="paper-player1"><img src="https://res.cloudinary.com/dysog0ybg/image/upload/v1675693953/THC%20PROYECT/panuelo-de-papel_rj44cv.png" alt="PAPER"/></button>
<button id="scissors-player1"><img src="https://res.cloudinary.com/dysog0ybg/image/upload/v1675694028/THC%20PROYECT/tijeras_1_v0fyds.png" alt="SCISSORS"/></button>
</div>
<div class="result-game2">
<button id="result-player1"></button>
<button id="result-player2"></button>
</div>
<div class="player2-game2">
<h2>PLAYER2</h2>
<button id="rock-player2"><img src="https://res.cloudinary.com/dysog0ybg/image/upload/v1675693852/THC%20PROYECT/piedra_pthkqv.png" alt="ROCK"/></button>
<button id="paper-player2"><img src="https://res.cloudinary.com/dysog0ybg/image/upload/v1675693953/THC%20PROYECT/panuelo-de-papel_rj44cv.png" alt="PAPER"/></button>
<button id="scissors-player2"><img src="https://res.cloudinary.com/dysog0ybg/image/upload/v1675694028/THC%20PROYECT/tijeras_1_v0fyds.png" alt="SCISSORS"/></button>
</div>
</section>
</section>
<div id="winner-game2">
</div>
</section>
`;

const addEventListener = () => {
  const btn = document.querySelector("#goback-game2");
  btn.addEventListener("click", () => {
    DashboardTemplate();
  });
  const playAgain = document.querySelector("#playagain");
  playAgain.addEventListener("click", () => {
    printTemplate();
  });
};

let player1 = [];
let player2 = [];

const comparation = () => {
  if (
    (player1 == 1 && player2 == 1) ||
    (player1 == 2 && player2 == 2) ||
    (player1 == 3 && player2 == 3)
  ) {
    document.querySelector("#winner-game2").innerHTML = "NO WINNERS";

    player1 = [];
    player2 = [];
  } else if (
    (player1 == 1 && player2 == 3) ||
    (player1 == 2 && player2 == 1) ||
    (player1 == 3 && player2 == 2)
  ) {
    document.querySelector("#winner-game2").innerHTML = "PLAYER 1 WINNER";
    player1 = [];
    player2 = [];
  } else if (
    (player1 == 1 && player2 == 2) ||
    (player1 == 2 && player2 == 3) ||
    (player1 == 3 && player2 == 1)
  ) {
    document.querySelector("#winner-game2").innerHTML = "PLAYER 2 WINNER";
    player1 = [];
    player2 = [];
  }
};

const rock1 = () => {
  player1 = [];
  document.querySelector("#rock-player1").addEventListener("click", () => {
    document.querySelector("#result-player1").innerHTML = "🤔";
    player1.push(1);
    comparation();
  });
};
const paper1 = () => {
  player1 = [];
  document.querySelector("#paper-player1").addEventListener("click", () => {
    document.querySelector("#result-player1").innerHTML = "😎";
    player1.push(2);
    comparation();
  });
};
const scissors1 = () => {
  player1 = [];
  document.querySelector("#scissors-player1").addEventListener("click", () => {
    document.querySelector("#result-player1").innerHTML = "🥳";
    player1.push(3);
    comparation();
  });
};
const rock2 = () => {
  player2 = [];
  document.querySelector("#rock-player2").addEventListener("click", () => {
    document.querySelector("#result-player2").innerHTML = "😁";
    player2.push(1);
    comparation();
  });
};
const paper2 = () => {
  player2 = [];
  document.querySelector("#paper-player2").addEventListener("click", () => {
    document.querySelector("#result-player2").innerHTML = "🤠";
    player2.push(2);
    comparation();
  });
};
const scissors2 = () => {
  player2 = [];
  document.querySelector("#scissors-player2").addEventListener("click", () => {
    document.querySelector("#result-player2").innerHTML = "🥸";
    player2.push(3);
    comparation();
  });
};

export const printTemplate = () => {
  document.querySelector("main").innerHTML = template();
  addEventListener();
  rock1();
  rock2();
  paper1();
  paper2();
  scissors1();
  scissors2();
};

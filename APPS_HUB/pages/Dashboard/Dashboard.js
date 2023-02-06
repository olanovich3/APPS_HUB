import "./Dashboard.css";
import { printTemplate as POKEAPITemplate } from "../../pages/PokeApi/Pokeapi";
import { printTemplate as Game2Template } from "../Game2/Game2";

const name = localStorage.getItem("user");

const template = () => `
<section class="dashboard">
<h1>PLAY</h1>
<h2>Bienvenido ${name}</h2>
<div class="games">
<button id="game1"></button>
<button id="game2"></button>
</div>
    </section>  

`;

const addEventListener = () => {
  const pokeapi = document.querySelector("#game1");
  pokeapi.addEventListener("click", () => {
    POKEAPITemplate();
  });
  const game2 = document.querySelector("#game2");
  game2.addEventListener("click", () => {
    Game2Template();
  });
};

const remove = () => {
  const removebtn = document.querySelector("#logout");
  removebtn.style.display = "block";
  const removeHome = document.querySelector("#goback-game2");
  removeHome.style.display = "none";
};

export const printTemplate = () => {
  document.querySelector("main").innerHTML = template();
  addEventListener();
  remove();
};

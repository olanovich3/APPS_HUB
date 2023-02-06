import "./Pokeapi.css";
import { printTemplate as DashboardTemplate } from "../Dashboard/Dashboard";

const template = () => `
<nav class=head>
<button id="goback"><img src="https://res.cloudinary.com/dysog0ybg/image/upload/v1675671053/THC%20PROYECT/hogar_xtqkys.png" alt="home"/></button>
<h2><img src="https://res.cloudinary.com/dysog0ybg/image/upload/v1675674066/THC%20PROYECT/pokemon_escudo_hphpkk.png" alt="pokemon"/></h2>
<input type="text" id="pokemonInput" placeholder="Where is my Pokemon?¿?¿"/>
<nav id=botones>
<button class="all"><img src="https://res.cloudinary.com/dysog0ybg/image/upload/v1675675977/THC%20PROYECT/pokebola_1_jgntyf.png" alt="home"/></button>
</nav>

<div id="loading">
<img src="https://res.cloudinary.com/dysog0ybg/image/upload/v1675584618/THC%20PROYECT/pokebola_hvznxm.png" alt="pokeball"/>
</div>
</nav>
<section id="pokeapi">
<div id="pokemones"></div>
</section>
`;

const types = [
  "grass",
  "fire",
  "water",
  "bug",
  "normal",
  "poison",
  "electric",
  "ground",
  "fairy",
  "fighting",
  "psychic",
  "rock",
  "ghost",
  "ice",
  "dragon",
];

let allPokemon = [];

const addEventListener = () => {
  const goback = document.querySelector("#goback");
  goback.addEventListener("click", () => DashboardTemplate());
  const searchBtn = document.querySelector("#pokemonInput");
  searchBtn.addEventListener("input", () => {
    document.querySelector("#pokemones").innerHTML = "";
    filterPokemon(allPokemon);
  });
  const all = document.querySelector(".all");
  all.addEventListener("click", () => {
    document.querySelector("#pokemones").innerHTML = "";
    printPokemon(allPokemon);
  });
};

const filterPokemon = (pokemon) => {
  const searchBtn = document.querySelector("#pokemonInput");
  const filteredPokemon = pokemon.filter((el) =>
    el.name.toLowerCase().includes(searchBtn.value.toLowerCase())
  );
  printPokemon(filteredPokemon);
};

let pokemonCharacter = [];
const getCharacters = async () => {
  const spinner = document.querySelector("#loading");
  spinner.style.display = "block";
  for (let i = 1; i <= 150; i++) {
    const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
    const json = await data.json();
    pokemonCharacter.push(json);
  }
  mapPokemon(pokemonCharacter);
  spinner.style.display = "none";
};

const mapPokemon = (pokemonCharacter) => {
  allPokemon = pokemonCharacter.map((pokemon) => ({
    name: pokemon.name,
    image: pokemon.sprites.other.dream_world.front_default,
    image2: pokemon.sprites.other.home.front_default,
    height: pokemon.height / 10,
    weight: pokemon.weight / 10,
    type: pokemon.types[0].type.name,
  }));
  printPokemon(allPokemon);
};

const printPokemon = (mappedPokemons) => {
  const container = document.querySelector("#pokemones");
  container.innerHTML = "";
  for (const pokemon of mappedPokemons) {
    const figure = document.createElement("figure");
    figure.classList.add(`${pokemon.type}`);
    figure.innerHTML = `
    <nav>
    <img src=${pokemon.image} alt=${pokemon.name}/>
    </nav>
    <section>
    <h2>${pokemon.name}</h2>
    <h3>${pokemon.type}</h3>
    <nav class="data">
    <h4>Height:${pokemon.height}m</h4>
    <h4>Weight:${pokemon.weight}kg</h4>
    </nav>
    
    </section>
    `;
    container.appendChild(figure);
  }
};

const createButton = () => {
  const button = document.querySelector("#botones");
  for (const iterator of types) {
    const btn = document.createElement("button");
    const img = document.createElement("img");
    btn.appendChild(img);
    btn.textContent = `${iterator}`;
    btn.classList.add(`${iterator}`);
    button.appendChild(btn);
    btn.addEventListener("click", () => {
      filterfunction(allPokemon, `${iterator}`);
    });
  }
};

const filterfunction = (array, type) => {
  const filter = array.filter((fil) => fil.type === type);
  printPokemon(filter);
};

export const printTemplate = () => {
  document.querySelector("main").innerHTML = template();
  addEventListener();
  getCharacters();
  createButton();
  filterPokemon();
};

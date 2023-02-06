import "./Header.css";
import { printTemplate as LoginTemplate } from "../Login/Login";

const template = () => `

<nav>
<button id="logout">LOG OUT</button>
<button id="changecolor"><img src="https://res.cloudinary.com/dysog0ybg/image/upload/v1675351782/THC%20PROYECT/arco-iris_dd6vtn.png" alt="rainbow"/></button>
</nav>
`;

const addListeners = () => {
  const themeBtn = document.querySelector("#changecolor");
  themeBtn.addEventListener("click", () => {
    document.body.style.background = getRandomColor();
  });
  const btn = document.querySelector("#logout");
  btn.addEventListener("click", () => {
    localStorage.removeItem("user");
    LoginTemplate();
  });
};

function getRandomColor() {
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

export const printTemplate = () => {
  document.querySelector("header").innerHTML = template();
  addListeners();
};

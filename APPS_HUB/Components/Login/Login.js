import "./Login.css";
import { printTemplate as DashboardTemplate } from "../../pages/Dashboard/Dashboard";

const template = () => `
<section class="login">
<div class="box">
<h2>HELLO, PLEASE ENTER YOUR NAME</h2>
<div class="logindiv">
<input type="text" id="loginInput"/>
<button id="loginBtn">Login</button>
</div>
</div>
</section>
`;

const addEventListener = () => {
  const loginInput = document.querySelector("#loginInput");
  const btn = document.querySelector("#loginBtn");
  btn.addEventListener("click", () => {
    localStorage.setItem("user", loginInput.value);
    if (loginInput.value) {
      DashboardTemplate();
    } else {
      alert("Please, login");
    }
  });
};

const remove = () => {
  const removebtn = document.querySelector("#logout");
  removebtn.style.display = "none";
};

export const printTemplate = () => {
  document.querySelector("main").innerHTML = template();
  addEventListener();
  remove();
};

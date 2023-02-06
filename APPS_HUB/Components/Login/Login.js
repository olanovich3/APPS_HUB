import "./Login.css";
import { printTemplate as DashboardTemplate } from "../../pages/Dashboard/Dashboard";

const template = () => `
<section class="login">
<div class="box">
<h2>LOGIN</h2>
<input type="text" id="loginInput"/>
<button id="loginBtn">Login</button>
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
    }
  });
};

export const printTemplate = () => {
  document.querySelector("main").innerHTML = template();
  addEventListener();
};

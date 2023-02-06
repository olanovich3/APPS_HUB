import "./style.css";
import { printTemplate as HeaderTemplate } from "./Components/Header/Header";

import {
  printTemplate as LoginTemplate,
  printTemplate,
} from "./Components/Login/Login";
import { printTemplate as DashboardTemplate } from "./pages/Dashboard/Dashboard";

export const initContent = (key) => {
  switch (key) {
    case undefined:
      localStorage.getItem("user") ? DashboardTemplate() : LoginTemplate();

      break;

    default:
      break;
  }
};

HeaderTemplate();
initContent();

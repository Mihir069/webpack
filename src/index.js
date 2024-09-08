import { test } from "./componeent";
import "./style.css";
import logo from "./img/lense-consultation.jpg";

document.body.classList.add("container");
const img = document.createElement("img");
img.src = logo;
img.alt = "logo";

document.body.appendChild(img);
test();
console.warn(test);

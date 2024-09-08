import "./style.css";
export const test = () => {
  const element = document.createElement("div");
  element.innerHTML = `hello`;
  element.classList.add("container");
  document.body.appendChild(element);
};

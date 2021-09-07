const pText = document.querySelector("#p-text");

const btnRed = document.querySelector("#btn-red");
const btnGreen = document.querySelector("#btn-green");
const btnBlue = document.querySelector("#btn-blue");

const btnTen = document.querySelector("#btn-ten");
const btnTwenty = document.querySelector("#btn-twenty");
const btnThirty = document.querySelector("#btn-thirty");

const btnAbel = document.querySelector("#btn-abel");
const btnComfortaa = document.querySelector("#btn-comfortaa");
const btnDancingScript = document.querySelector("#btn-dancing-script");

btnRed.addEventListener("click", () => {
  pText.style.color = "var(--red-500)";
});

btnGreen.addEventListener("click", () => {
  pText.style.color = "var(--green-500)";
});

btnBlue.addEventListener("click", () => {
  pText.style.color = "var(--blue-500)";
});

btnTen.addEventListener("click", () => {
  pText.style.fontSize = "10px";
});

btnTwenty.addEventListener("click", () => {
  pText.style.fontSize = "20px";
});

btnThirty.addEventListener("click", () => {
  pText.style.fontSize = "30px";
});

btnAbel.addEventListener("click", () => {
  pText.style.fontFamily = "Abel, sans-serif";
});

btnComfortaa.addEventListener("click", () => {
  pText.style.fontFamily = "Comfortaa, cursive";
});

btnDancingScript.addEventListener("click", () => {
  pText.style.fontFamily = "Dancing Script, cursive";
});

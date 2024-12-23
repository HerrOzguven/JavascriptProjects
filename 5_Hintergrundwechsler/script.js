let buttonRed = document.getElementById("btn-red");
let buttonBlue = document.getElementById("btn-blue");
let buttonBlack = document.getElementById("btn-black");

buttonRed.addEventListener("click", () => {
  document.body.style.background = "red";
});

buttonBlue.addEventListener("click", () => {
    document.body.style.background = "blue";
});

buttonBlack.addEventListener("click", () => {
    document.body.style.background = "black";
});
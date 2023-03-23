/** @format */

let buttons = document.querySelectorAll(".first-div div span");
let submitButton = document.querySelector(".first-div button");
let firstDiv = document.querySelector(".first-div");
let secondDiv = document.querySelector(".second-div");
let selected = document.querySelector(".selected");
let popUp = document.querySelector(".pop-up");
console.log(submitButton);

let numberChosen = null;

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    numberChosen = button.textContent;
    buttons.forEach((eachButton) => eachButton.classList.remove("active"));
    button.classList.add("active");
  });
});

submitButton.addEventListener("click", () => {
  if (numberChosen === null) {
    popUp.classList.add("active");
    setTimeout(() => {
      popUp.classList.remove("active");
    }, 2000);
  } else {
    // firstDiv.style.display = "none";
    firstDiv.classList.add("d-none");
    // secondDiv.style.display = "block";
    secondDiv.classList.remove("d-none");
    secondDiv.classList.add("d-block");
    selected.textContent = `You selected ${numberChosen} out of 5`;
  }
});

let equal_pressed = 0;
//refer all buttons excluding ac and del
let button_input = document.querySelectorAll(".input-button");
//refer input, equal, clear and erase
let input = document.getElementById("input");
let equal = document.getElementById("equal");
let clear = document.getElementById("clear");
let erase = document.getElementById("erase");

window.onload = () => {
  input.value = "";
};

// access each class using foreach
button_input.forEach((button_class) => {
  button_class.addEventListener("click", () => {
    if (equal_pressed == 1) {
      input.value = "";
      equal_pressed = 0;
    }
    //display value of each button
    input.value += button_class.value;
  });
});

//solve the users input when clicked on equal sign
equal.addEventListener("click", () => {
  equal_pressed = 1;
  let inp_val = input.value;
  try {
    // evalutate users input
    let solution = eval(inp_val);
    //true for natural numbers
    //false for decimals
    if (Number.isInteger(solution)) {
      input.value = solution;
    } else {
      input.value = solution.toFixed(2);
    }
  } catch (err) {
    //if user has entered invalid input
    alert("InvalidInput");
  }
});

// clear whole input
clear.addEventListener("click", () => {
    input.value = "";
});

//erase single digit
erase.addEventListener("click", () => {
    input.value = input.value.substr(0, input.value.length -1);
})
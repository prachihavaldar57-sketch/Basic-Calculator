let screen = document.getElementById("answer");

function append(value) {
  screen.value += value;
}

function clearScreen() {
  screen.value = "";
}

function backspace() {
  screen.value = screen.value.slice(0, -1);
}

function negate() {
  if (screen.value) {
    screen.value = String(-1 * parseFloat(screen.value));
  }
}

function calculate() {
  try {
    screen.value = eval(screen.value);
  } catch {
    screen.value = "Error";
  }
}

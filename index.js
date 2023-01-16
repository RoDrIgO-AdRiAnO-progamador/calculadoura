const main = document.querySelector("main");
const root = document.querySelector(":root");
const input = document.getElementById("input");
const resultInput = document.getElementById("result");

const allowedKeys = [
  "(",
  ")",
  "/",
  "*",
  "-",
  "+",
  "9",
  "8",
  "7",
  "6",
  "5",
  "4",
  "3",
  "2",
  "1",
  "0",
  ".",
  "%",
  " ",
];

input.addEventListener("keydown", function (e) {
  e.preventDefault();

  if (allowedKeys.includes(e.key)) {
    input.value += e.key;
    return;
  }
  if (e.key === "Backspace") {
    input.value = input.value.slice(0, -1);
  }
  if (e.key === "Enter") {
    calculate();
  }
});

document.querySelectorAll(".charkeys").forEach(function (charkeyBtn) {
  charkeyBtn.addEventListener("click", function () {
    const value = charkeyBtn.dataset.value;
    input.value += value;
  });
});

document.getElementById("clear").addEventListener("click", function () {
  input.value = "";
  input.focus();
});

document.getElementById("equal").addEventListener("click", calculate);

function calculate() {
  resultInput.value = "ERROR";
  resultInput.classList.add("error");
  const result = eval(input.value);
  resultInput.value = result;
  resultInput.classList.remove("error");
}

document.getElementById("themeSwitcher").addEventListener("click", function () {
  if (main.dataset.theme === "dark") {
    root.style.setProperty("--bg-color", "#f1f5f9");
    root.style.setProperty("--border-color", "#aaa");
    root.style.setProperty("--font-color", "#212529");
    root.style.setProperty("--primay-color", "#26834a");
    main.dataset.theme = "light";
  } else {
    root.style.setProperty("--bg-color", "#212529");
    root.style.setProperty("--border-color", "#666");
    root.style.setProperty("--font-color", "#f1f5f9");
    root.style.setProperty("--primay-color", "#4dff91");
    main.dataset.theme = "dark";
  }
});

document
  .getElementById("copyToClipboad")
  .addEventListener("click", function (e) {
    const button = e.currentTarget;

    if (button.innerText === "copy") {
      button.innerText = "copied";
      button.classList.add("success");
      navigator.clipboard.writeText(resultInput.value);
    } else {
      button.innerText = "copy";
      button.classList = "success";
    }
  });

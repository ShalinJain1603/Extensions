const default_Array = ["A", "B", "C", "D", "E"];
const tracker = {
  A: false,
  B: false,
  C: false,
  D: false,
  E: false,
};
const button_A = document.querySelector("#A");
const button_B = document.querySelector("#B");
const button_C = document.querySelector("#C");
const button_D = document.querySelector("#D");
const button_E = document.querySelector("#E");

button_A.addEventListener("click", () => {
  tracker["A"] = !tracker["A"];
  button_A.classList.toggle("selected");
});
button_B.addEventListener("click", () => {
  tracker["B"] = !tracker["B"];
  button_B.classList.toggle("selected");
});
button_C.addEventListener("click", () => {
  tracker["C"] = !tracker["C"];
  button_C.classList.toggle("selected");
});
button_D.addEventListener("click", () => {
  tracker["D"] = !tracker["D"];
  button_D.classList.toggle("selected");
});
button_E.addEventListener("click", () => {
  tracker["E"] = !tracker["E"];
  button_E.classList.toggle("selected");
});

const getLink = document.querySelector("#getLink");
const foundLink = document.querySelector("#link");
getLink.addEventListener("click", () => {
  const randomNum = parseInt(Math.random() * 1200) + 300;

  const selectionArray = [];
  for (key in tracker) {
    if (tracker[key]) {
      selectionArray.push(key);
    }
  }
  const question =
    selectionArray.length === 0
      ? default_Array[parseInt(Math.random() * 4)]
      : selectionArray[parseInt(Math.random() * selectionArray.length)];

  const link = `https://codeforces.com/problemset/problem/${randomNum}/${question}`;
  foundLink.innerText = link;
  foundLink.href = link;
});

foundLink.addEventListener("click", () => {
  window.open(foundLink.innerText);
});

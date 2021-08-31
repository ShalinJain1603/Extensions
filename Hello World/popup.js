const inputName = document.querySelector("#name");
const msg = document.querySelector("#greet");
console.dir(inputName);
inputName.addEventListener("keyup", () => {
  const val = inputName.value;
  if (val === "") {
    msg.innerText = "Welcome!!";
  } else {
    msg.innerText = `Hello, ${val}`;
  }
});

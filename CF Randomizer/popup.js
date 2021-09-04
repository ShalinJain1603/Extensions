const getLink = document.querySelector("#getLink");
const foundLink = document.querySelector("#link");
const minRating = document.querySelector("#minRating");
const maxRating = document.querySelector("#maxRating");
const radioButtons = document.querySelectorAll('input[name="index"]');

getLink.addEventListener("click", () => {
  let selectedIndex = "All";
  for (button of radioButtons) {
    if (button.checked) {
      selectedIndex = button.id;
      break;
    }
  }
  const lowerBar = parseInt(minRating.value) || 0;
  const upperBar = parseInt(maxRating.value) || 3600;
  let myQuestions = QUESTIONS.filter(
    (question) => question.rating >= lowerBar && question.rating <= upperBar
  );
  if (selectedIndex !== "All") {
    myQuestions = myQuestions.filter(
      (question) => question.index === selectedIndex
    );
  }
  const randomNum = parseInt(Math.random() * myQuestions.length);
  const contestId = myQuestions[randomNum].contestId;
  const index = myQuestions[randomNum].index;
  const link = `https://codeforces.com/problemset/problem/${contestId}/${index}`;
  foundLink.innerText = link;
  foundLink.href = link;
});

foundLink.addEventListener("click", () => {
  window.open(foundLink.innerText);
});

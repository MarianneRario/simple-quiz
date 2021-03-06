const correctAns = ["B", "B", "B", "B"];
const form = document.querySelector(".quiz-form");
const scoreSpan = document.querySelector("span");
const scoreDiv = document.querySelector(".result");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let score = 0;
  let x = 0;
  const userAns = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];
  correctAns.forEach((ans, i) => {
    if (userAns[i] === ans) {
      score += 25;
    }
  });
  scrollTo(0, 0);
  scoreDiv.classList.remove("d-none");
  const timer = setInterval(() => {
    scoreSpan.textContent = `${x}%`;
    if (x === score) {
      return clearInterval(timer);
    }
    x++;
  }, 20);
});

let id = document.querySelector(".id");
let p = document.querySelector(".p");

//consumo de api
window.addEventListener("DOMContentLoaded", (e) => {
  e.preventDefault();
  fetch("https://api.adviceslip.com/advice")
    .then((response) => response.json())
    .then(function (data) {
      id.innerHTML = `Advice # ${data.slip.id}`;
      p.innerHTML = `"${data.slip.advice}"`;
    });
});

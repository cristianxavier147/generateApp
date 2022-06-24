let id = document.getElementById("title");
let p = document.getElementById("text");

//consumo de api
// fetch("https://api.adviceslip.com/advice")
//   .then((response) => response.json())
//   .then(function (data) {
//     id.innerHTML = `Advice # ${data.slip.id}`;
//     p.innerHTML = `"${data.slip.advice}"`;
//   });

document.querySelector(".ver").addEventListener("click", function () {
  const consultar = async () => {
    const resultado = await fetch("https://api.adviceslip.com/advice");
    const data = await resultado.json();
    id.innerHTML = `Advice #${data.slip.id}`;
    p.innerText = `"${data.slip.advice}"`;
  };
  consultar();
});

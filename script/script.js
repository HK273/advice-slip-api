const resDiv = document.querySelector(".advice");
// console.log(resDiv);

async function getData() {
  const response = await fetch("https://api.adviceslip.com/advice", {
    cache: "no-cache",
  });
  const data = await response.json();
  // console.log(data.slip);
  adviceID = data.slip.id;
  adviceSlip = data.slip.advice;
  resDiv.innerHTML = `<h1 class="advice-id">ADVICE #${adviceID}</h1>
  <p class="advice-slip">"${adviceSlip}"</p>
  <div class="divider"><img class="divider" src="images/pattern-divider-desktop.svg" alt="" srcset="" /> </div>
  `;
}
const button = document.querySelector(".btn");
button.addEventListener("click", getData);
window.onload = () => {
  getData();
};

// Light dark / toggle
const chk = document.getElementById("chk");
const checkbox = document.querySelector(".label");

chk.addEventListener("change", () => {
  document.body.classList.toggle("light");
  checkbox.classList.toggle("light");
});

// ==============================================
// Testing
// ==============================================
// fetch("https://api.adviceslip.com/advice")
//   .then((response) => {
//     if (response.ok) {
//       return response.json();
//     }
//     throw new Error("something went wrong");
//   })
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));

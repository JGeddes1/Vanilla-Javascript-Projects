const btn = document.querySelector(".btn");
const content = document.querySelector(".content");
const img = document.querySelector(".container img");
const url = "https://api.chucknorris.io/jokes/random";

btn.addEventListener("click", async () => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    data.value
    displayData(data);
  } catch (error) {
    console.log(error);
  }
});

function displayData(data) {
  img.classList.add("shake-img");
  // change to data
  // const {
  //   value: { joke },
  // } = data;
  content.textContent = data.value;
  const random = Math.random() * 1000;
  setTimeout(() => {
    img.classList.remove("shake-img");
  }, random);
}


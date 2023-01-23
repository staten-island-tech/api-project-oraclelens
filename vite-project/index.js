import "./styles/style.css";

const DOMSelectors = {
  button: document.querySelector("getAmiiboButton"),
  amiibo: document.getElementById("amiibo"),
  input: document.getElementById("input"),
  display: document.getElementById("display"),
  container: document.getElementById("container"),
};

const URL = "https://www.amiiboapi.com/api/amiibo";

document.addEventListener("DOMContentLoaded", findAmiibo);
async function getAmiibo(URL) {
  try {
    const response = await fetch(URL);
    const data = await response.json();
    console.log(data);
    let input = DOMSelectors.input.value;
    data.amiibo
      .filter((el) => el.name == `${input}`)
      .forEach((el) => {
        console.log(el.name);
        DOMSelectors.container.insertAdjacentHTML(
          "beforeend",
          `
              <div class="inside">
              <h2>${el.name}</h2>
              <img class="abby" src="${el.image}" alt="add image">        
              </div>`
        );
      });
  } catch (error) {
    console.log(error);
  }
}

getAmiibo(URL);

DOMSelectors.button.addEventListener("click", function () {
  getAmiibo(URL);
});
/* document
  .getElementById("getAmiiboButton")
  .addEventListener("click", function () {
    let addURL = URL + "?name=" + DOMSelectors.input.value;
    console.log(input.value);
    console.log(addURL);
    DOMSelectors.input.value = "";
  });

document.addEventListener("DOMContentLoaded", function () {
  getAmiibo(URL);
});

DOMSelectors.amiibobutton.addEventListener("click", function () {
  getAmiibo(URL);
});
 */

import "./styles/style.css";

const DOMSelectors = {
  amiibobutton: document.getElementById("getAmiiboButton"),
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
    if (response.status < 200) {
      console.log(response.status);
      throw new Error(response);
    } else {
      const data = await response.json();
      console.log(data.amiibo);
      if (data.amiibo) {
        data.amiibo.forEach((el) => {
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
      }
    }
  } catch (error) {
    console.log(error);
  }
}

document
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

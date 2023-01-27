import "./styles/style.css";

const DOMSelectors = {
  display: document.getElementById("display"),
  getAmiiboButton: document.getElementById("btn"),
  AmiiboFun: document.getElementById("findAmiibo"),
};

const URL = "https://www.amiiboapi.com/api/amiibo";

async function getAmiibo() {
  DOMSelectors.display.innerHTML = "";

  if (DOMSelectors.AmiiboFun.value === "Mario") {
    try {
      const response = await fetch(URL);
      const data = await response.json();
      console.log(data);
      data.amiibo
        .filter((el) => el.name === "Mario")
        .filter((el) => el.tail === "00340102")
        .forEach((el) => {
          DOMSelectors.display.insertAdjacentHTML(
            "beforeend",
            `<div>
              <img class="height" src="${el.image}" alt="amiibo figure of videogame character mario">    
            </div>`
          );
        });
    } catch (error) {
      console.error(error);
    }
  } else {
    console.log("error");
  }

  if (DOMSelectors.AmiiboFun.value === "Luigi") {
    try {
      const response = await fetch(URL);
      const data = await response.json();
      console.log(data);
      data.amiibo
        .filter((el) => el.name === "Luigi")
        .filter((el) => el.tail === "00350102")
        .forEach((el) => {
          DOMSelectors.display.insertAdjacentHTML(
            "beforeend",
            `<div>
              <img class="height" src="${el.image}" alt="amiibo figure of videogame character luigi">    
            </div>`
          );
        });
    } catch (error) {
      console.error(error);
    }
  } else {
    console.log("error");
  }

  if (DOMSelectors.AmiiboFun.value === "Peach") {
    try {
      const response = await fetch(URL);
      const data = await response.json();
      console.log(data);
      data.amiibo
        .filter((el) => el.name === "Peach")
        .filter((el) => el.tail === "00360102")
        .forEach((el) => {
          DOMSelectors.display.insertAdjacentHTML(
            "beforeend",
            `<div>
              <img class="height" src="${el.image}" alt="amiibo figure of videogame character princess peach">    
            </div>`
          );
        });
    } catch (error) {
      console.error(error);
    }
  } else {
    console.log("error");
  }

  if (DOMSelectors.AmiiboFun.value === "Yoshi") {
    try {
      const response = await fetch(URL);
      const data = await response.json();
      console.log(data);
      data.amiibo
        .filter((el) => el.name === "Yoshi")
        .filter((el) => el.tail === "00370102")
        .forEach((el) => {
          DOMSelectors.display.insertAdjacentHTML(
            "beforeend",
            `<div>
              <img class="height" src="${el.image}" alt="amiibo figure of videogame character yoshi">    
            </div>`
          );
        });
    } catch (error) {
      console.error(error);
    }
  } else {
    console.log("error");
  }

  if (DOMSelectors.AmiiboFun.value === "Rosalina") {
    try {
      const response = await fetch(URL);
      const data = await response.json();
      console.log(data);
      data.amiibo
        .filter((el) => el.name === "Rosalina")
        .filter((el) => el.tail === "02620102")
        .forEach((el) => {
          DOMSelectors.display.insertAdjacentHTML(
            "beforeend",
            `<div>
              <img class="height" src="${el.image}" alt="amiibo figure of videogame character rosalina">    
            </div>`
          );
        });
    } catch (error) {
      console.error(error);
    }
  } else {
    console.log("error");
  }

  if (DOMSelectors.AmiiboFun.value === "Bowser") {
    try {
      const response = await fetch(URL);
      const data = await response.json();
      console.log(data);
      data.amiibo
        .filter((el) => el.name === "Bowser")
        .filter((el) => el.tail === "00390102")
        .forEach((el) => {
          DOMSelectors.display.insertAdjacentHTML(
            "beforeend",
            `<div>
              <img class="height" src="${el.image}" alt="amiibo figure of videogame character bowser">    
            </div>`
          );
        });
    } catch (error) {
      console.error(error);
    }
  } else {
    console.log("error");
  }

  if (DOMSelectors.AmiiboFun.value === "Bayonetta") {
    try {
      const response = await fetch(URL);
      const data = await response.json();
      console.log(data);
      data.amiibo
        .filter((el) => el.name === "Bayonetta - Player 2")
        .filter((el) => el.tail === "03640002")
        .forEach((el) => {
          DOMSelectors.display.insertAdjacentHTML(
            "beforeend",
            `<div>
              <img class="height" src="${el.image}" alt="amiibo figure of videogame character bayonetta">    
            </div>`
          );
        });
    } catch (error) {
      console.error(error);
    }
  } else {
    console.log("error");
  }
}

function getImage() {
  getAmiibo();
}

DOMSelectors.getAmiiboButton.addEventListener("click", getImage);

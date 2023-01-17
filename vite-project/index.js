import "./styles/style.css";

const DOMSelectors = {
  disneybutton: document.getElementById("getMouseButton"),
  film: document.getElementById("film"),
  searchInput: document.getElementById("searchInput"),
  display: document.getElementById("display"),
};

const URL = "https://www.amiiboapi.com/api/gameseries/";

document.addEventListener("DOMContentLoaded", findFilm);
async function getTheMouse(URL) {
  try {
    const response = await fetch(URL);
    const data = await response.json();
    data.data
      .filter((el) => el.name.includes("Animal Crossing"))
      .forEach((el) => {
        DOMSelectors.display.insertAdjacentHTML(
          "beforeend",
          `<div>
        <img class="characterimage" src="${el.imageUrl}"/>
        </div>`
        );
      });
    console.log(data.data);
    console.log(response);
    return data;
  } catch (error) {
    console.log(error);
  }
}
getTheMouse(URL);

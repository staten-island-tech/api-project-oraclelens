const DOMSelectors = {
  disneybutton: document.getElementById("getMouseButton"),
  film: document.getElementById("film"),
  searchInput: document.getElementById("searchInput"),
};

const URL = "https://api.disneyapi.dev/characters";

document.addEventListener("DOMContentLoaded", findFilm);
async function getTheMouse(URL) {
  try {
    const response = await fetch(URL);
    const data = await response.json();
    console.log(data.data);
    console.log(response);
    return data;
  } catch (error) {
    console.log(error);
  }
}
getTheMouse(URL);

const DOMselectors = {};

const URL = "https://api.disneyapi.dev/characters";

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

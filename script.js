let jsonData;

(async function getData() {
  const url = "https://api.freeapi.app/api/v1/public/books";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status${response.status}`);
    }
    jsonData = await response.json();
  } catch (error) {
    console.log(error.message);
  }
})();

const library = document.getElementById("library")

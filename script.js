async function getData() {
    const url = "https://api.freeapi.app/api/v1/public/books";
    try {
        const response = await fetch(url)
        if(!response.ok){
            throw new Error(`Response status${response.status}`)
        }
        const jsonData = await response.json()
        console.log(jsonData.data.data[0]);

    } catch (error) {
        console.log(error.message);
    }
  }
  

  getData();
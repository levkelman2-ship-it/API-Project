

async function getDef() {
    try {
        let word = document.getElementById("search").value
        const url = "https://api.dictionaryapi.dev/api/v2/entries/en/" + word
        const headers = new Headers();
        headers.append("Accept", "application/json")
        const response = await fetch(url,{headers:headers})

        const json = await response.json();
        console.log(json);

        const def = document.getElementById("defHolder")
        def.textContent = json[0].meanings[0].definitions[0].definition
       

    }

    catch (error) {
        console.log(error)
    }

}
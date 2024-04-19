const url = "https://jsonplaceholder.typicode.com/photos";

function renderPhotos(photos) {
    photos.forEach((img) => {
        const imgEl = document.createElement("img");
        imgEl.setAttribute("src", img.thumbnailUrl);
        document.getElementById("output").appendChild(imgEl);
    });
    }

    async function getPhotos() {
        try {
            const response = await fetch(url);
            const data = await response.json();
            console.log(`Display Photos`)
            renderPhotos(data)
        }catch(error){
            console.log(`ERROR: Could not display photos ${error}`)
        }
    }

    async function start() {
        await getPhotos()
    }

    start()
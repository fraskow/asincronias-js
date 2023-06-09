const path = "data.json";

async function getData() {
    const res = await fetch(path);
    const data = await res.json();
    console.log(data.results.forEach(element => {
        console.log(element.title)
    }));
}

getData();
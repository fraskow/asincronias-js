const path = "data.json";

async function getData() {
    const res = await fetch(path);
    const data = await res.json();
    console.log(res.results);
}

getData();
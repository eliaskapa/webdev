async function FindShow() {

    const haku = document.querySelector("#query").value

    const response = await fetch(`https://api.tvmaze.com/search/shows?q=${encodeURIComponent(haku)}`);

    const data = await response.json();

    console.log(data);
}

const form = document.querySelector("form");

form.addEventListener("submit", function(event) {
    event.preventDefault();
    FindShow();
});


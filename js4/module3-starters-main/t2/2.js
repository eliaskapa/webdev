const haku = document.getElementById("target")

const li1 = document.createElement("li");
li1.textContent = "First Item";
haku.appendChild(li1);

const li2 = document.createElement("li");
li2.textContent = "Second Item";
li2.classList.add("my-item");
haku.appendChild(li2);

const li3 = document.createElement("li");
li3.textContent = "Third Item";
haku.appendChild(li3);

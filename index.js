const DOMSelectors = {
  button: document.getElementById("button1"),
  container: document.getElementById("container"),
  input: document.getElementById("input"),
  image: document.getElementById("image"),
  form: document.querySelector("form"),
};

function clear() {
  DOMSelectors.input.value = "";
  DOMSelectors.image.value = "";
}

function makeAlbum() {
  DOMSelectors.button.addEventListener("submit", function (event) {
    event.preventDefault();
    const text = DOMSelectors.input.value;
    const image = DOMSelectors.image.value;
    addCard(text, image);
  });
}
const Album = makeAlbum();

function addCard(text, image) {
  DOMSelectors.container.insertAdjacentHTML(
    "beforeend",
    `
      <div id="card">
      <h2 class="centertext">${text}</h2>
      <img src="${image}" alt="" class="image" > 
      </div>
      `
  );
}

addCard(Album);

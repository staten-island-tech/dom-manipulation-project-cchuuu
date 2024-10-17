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
  DOMSelectors.form.addEventListener("submit", function (event) {
    event.preventDefault();
    const card = {
      text: DOMSelectors.input.value,
      image: DOMSelectors.image.value,
    };
    return card;
  });
}
const Album = makeAlbum();

function addCard(Album) {
  DOMSelectors.container.insertAdjacentHTML(
    "beforeend",
    `
      <div id="card">
      <h3 class="centertext">${Album.text}</h3>
      <img src="${Album.image}" alt="" class="image" > 
      </div>
      `
  );
}

makeAlbum();
addCard(Album);

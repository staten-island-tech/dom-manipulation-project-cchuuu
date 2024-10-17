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
    addCard(card.text, card.image);
    deleteInput();
  });
}

function addCard(text, image) {
  DOMSelectors.container.insertAdjacentHTML(
    "beforeend",
    `
      <div id="card">
      <h3 class="centertext">${text}</h3>
      <img src="${image}" alt="" class="image" > 
      </div>
      `
  );
}

function deleteInput() {
  DOMSelectors.input.value = "";
  DOMSelectors.image.value = "";
}

function deleteCard() {
  const removeButtons = document.querySelectorAll();
  removeButtons.forEach((el) =>
    el.addEventListener("click", function (event) {
      const buttonId = event.getAttribute("");
      const id = "card" + buttonId;
      const card = document.getElementById(id);
      card.remove();
    })
  );
}

makeAlbum();

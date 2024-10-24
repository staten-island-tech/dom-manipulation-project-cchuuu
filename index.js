const DOMSelectors = {
  button: document.getElementById("button1"),
  container: document.getElementById("container"),
  input: document.getElementById("input"),
  image: document.getElementById("image"),
  form: document.querySelector("form"),
  description: document.getElementById("description"),
};

function addCard(text, image, description) {
  DOMSelectors.container.insertAdjacentHTML(
    "beforeend",
    `
      <div id="card">
      <h3 class="headers centertext">${text}</h3>
      <img src="${image}" alt="" class="image" > 
      <p>${description}</p>
      <button class="btn">remove</button>
      </div>
      `
  );
}

function deleteInput() {
  DOMSelectors.input.value = "";
  DOMSelectors.image.value = "";
  DOMSelectors.description.value = "";
}

function deleteCard() {
  const removebtn = document.querySelectorAll(".btn");

  removebtn.forEach((button) => {
    button.addEventListener("click", function () {
      button.parentElement.remove();
    });
  });
}

function runCodes() {
  DOMSelectors.form.addEventListener("submit", function (event) {
    event.preventDefault();
    addCard(
      DOMSelectors.input.value,
      DOMSelectors.image.value,
      DOMSelectors.description.value
    );

    deleteInput();
    deleteCard();
  });
}

runCodes();

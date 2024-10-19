const DOMSelectors = {
  button: document.getElementById("button1"),
  container: document.getElementById("container"),
  input: document.getElementById("input"),
  image: document.getElementById("image"),
  form: document.querySelector("form"),
};

function addCard(text, image) {
  DOMSelectors.container.insertAdjacentHTML(
    "beforeend",
    `
      <div id="card">
      <h3 class="centertext">${text}</h3>
      <img src="${image}" alt="" class="image" > 
      <button class="btn">remove</button>
      </div>
      `
  );
}

function deleteInput() {
  DOMSelectors.input.value = "";
  DOMSelectors.image.value = "";
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
    addCard(DOMSelectors.input.value, DOMSelectors.image.value);

    deleteInput();
    deleteCard();
  });
}

runCodes();

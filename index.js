function formSubmittion() {
  let form = document.querySelector("form");
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    console.log(event.target);
  });
}
formSubmittion();

const DOMSelectors = {
  button: document.getElementById("button1"),
  container: document.getElementById("container"),
  inputs: document.getElementById("#input"),
};

function addingText() {
  DOMSelectors.button.addEventListener("click", function () {
    DOMSelectors.container.insertAdjacentText = DOMSelectors.texts;
  });
}
addingText();

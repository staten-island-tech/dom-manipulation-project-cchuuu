function formSubmittion() {
  let form = document.querySelector("form");
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    console.log(event.target);
  });
}
formSubmittion();

const DOMSelectors = {
  button: document.querySelector("#button1"),
};

console.log(DOMSelectors.button);

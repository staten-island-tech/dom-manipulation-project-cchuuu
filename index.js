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
  container: document.getElementById("#container"),
  input: document.querySelector("#input"),
  card: document.getElementById("card"),
};
function addingText() {
  DOMSelectors.button.addEventListener("click", function () {
    let input = DOMSelectors.input.value;
    DOMSelectors.card.insertAdjacentHTML("beforeend", `<P> ${input} </P>`);
  });
}

addingText();

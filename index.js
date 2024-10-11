const DOMSelectors = {
  button: document.getElementById("button1"),
  container: document.getElementById("container"),
  input: document.getElementById("input"),
  image: document.getElementById("image"),
};
function adding() {
  const form = document.getElementById("form");
  DOMSelectors.button.addEventListener("click", function (event) {
    let text = DOMSelectors.input.value;
    let image = DOMSelectors.image.value;

    event.preventDefault();

    DOMSelectors.container.insertAdjacentHTML(
      "beforeend",
      `
      <div id="card">
      <h2 class="centertext">${text}</h2>
      <img src="${image}" alt="" class="image" > 
      </div>`
    ,
    form.addEventListener("submit", (event) => {
      event.preventDefault()
      form.reset()
    }));
    );
  });
};

adding();

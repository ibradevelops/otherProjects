const btn = document.querySelector(".btn");
const ul = document.querySelector(".second-section");
const inputList = document.querySelector(".input-list");
const addItem = function () {
  const itemHolder = inputList.value;
  if (itemHolder) {
    inputList.value = "";
    const list = document.createElement("li");
    ul.appendChild(list);
    list.setAttribute("class", "list");
    list.textContent = itemHolder;
  }
  if (ul.childElementCount >= 8) {
    alert("Maksimalan broj Itema je 8!");
    ul.replaceChildren();
  }
};

window.addEventListener("load", function () {});

////////////////////////
btn.addEventListener("click", addItem);
document.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    // addItem();
    this.addEventListener.bind(addItem());
  }
});
inputList.addEventListener("input", function () {
  inputList.value = inputList.value.slice(0, 20);
});

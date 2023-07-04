"use strict";
let array = [];
const container = document.querySelector(".container");
const wholeSection = document.querySelector(".main__section");
const toDoStorage = document.querySelector(".main__section--items");
const noItemsParagraph = document.querySelector("#no-items-paragraph");
const isUrgentBtn = document.querySelector("#checkbox");
const btnAdd = document.querySelector("#btn-add");
const itemInput = document.querySelector(".item-input");
const btnDelAll = document.querySelector("#btn-delete-all");

btnAdd.addEventListener("click", mainFunction);
//

function mainFunction() {
  const itemInputValue = itemInput.value.trim();
  if (!itemInputValue) return;
  const toDoItem = document.createElement("div");
  const toDoItemTitle = document.createElement("h1");
  const isUrgent = document.createElement("h1");
  const toDoItemSentence = document.createElement("span");
  const toDoItemEdit = document.createElement("span");
  const toDoItemDelBtn = document.createElement("button");
  const toDoItemEditBtn = document.createElement("button");
  toDoItem.classList.add("to-do__item");
  toDoItemTitle.classList.add("to-do-item__title");
  isUrgent.classList.add("to-do-item__urgent");
  toDoItemSentence.classList.add("to-do-item__sentence");
  toDoItemEdit.classList.add("to-do-item__edit");
  toDoItemDelBtn.classList.add("to-do-item-del__btn");
  toDoItemEditBtn.classList.add("to-do-item-edit__btn");
  toDoStorage.append(toDoItem);
  toDoItem.append(toDoItemSentence);
  toDoItemSentence.append(toDoItemTitle);
  toDoItemEdit.append(toDoItemDelBtn);
  // toDoItemEdit.append(toDoItemEditBtn);
  toDoItem.append(toDoItemEdit);
  toDoItemDelBtn.textContent = "Delete";
  toDoItemEditBtn.textContent = "Edit";
  //
  toDoItemTitle.textContent = itemInputValue;
  if (isUrgentBtn.checked) {
    isUrgent.textContent = "(URGENT)";
    toDoItemSentence.append(isUrgent);
  }
  array.push({
    name: toDoItemTitle.textContent,
    urgent: isUrgentBtn.checked,
  });
  localStorage.setItem("item", JSON.stringify(array));
  noItemsParagraph.classList.add("hide");
  itemInput.value = "";
  isUrgentBtn.checked = false;
  itemInput.blur();
  showItemTitle(toDoItemTitle);
  // Delete button
  toDoItemDelBtn.addEventListener("click", (e) => {
    filtering(e);
    toDoItem.remove();
    if (
      toDoStorage.childElementCount === 1 ||
      toDoStorage.childElementCount === 2
    ) {
      noItemsParagraph.classList.remove("hide");
      btnDelAll.classList.add("hide");
    }
  });
  //Edit button
  toDoItemEditBtn.addEventListener("click", (e) => {
    if (toDoItemEditBtn.textContent === "Edit") {
      toDoItemTitle.classList.add("editable");
      toDoItemTitle.contentEditable = true;
      toDoItemEditBtn.textContent = "Save";
      toDoItemTitle.style.pointerEvents = "none";
    } else {
      toDoItemEditBtn.textContent = "Edit";
      toDoItemTitle.classList.remove("editable");
      toDoItemTitle.contentEditable = false;
      toDoItemTitle.style.pointerEvents = "auto";
    }
  });
  // Delete all button
  btnDelAll.classList.remove("hide");
  btnDelAll.addEventListener("click", () => {
    array = [];
    localStorage.clear();
    document.querySelectorAll(".to-do__item").forEach((val) => {
      val.remove();
    });
    btnDelAll.classList.add("hide");
    noItemsParagraph.classList.contains("hide") &&
      noItemsParagraph.classList.remove("hide");
  });
}

window.addEventListener("load", () => {
  //
  array = JSON.parse(localStorage.getItem("item")) || [];
  if (array.length === 0) return;
  delAllNoItemsParagraph("block", "none");
  btnDelAll.addEventListener("click", () => {
    array = [];
    localStorage.clear();
    noItemsParagraph.style.display = "block";
    btnDelAll.style.display = "none";
    const all = document.querySelectorAll(".to-do__item");
    all.forEach((val) => {
      val.remove();
    });
  });
  array.forEach((val) => {
    const { name, urgent } = val;
    const html = `
    <div class="to-do__item">
    <span class="to-do-item__sentence">
    <h1 class="to-do-item__title">${name}</h1>
    <h1 class="to-do-item__urgent">${urgent ? "(URGENT)" : ""}</h1>
    </span>
    <span class="to-do-item__edit">
    <button class="to-do-item-del__btn">Delete</button>
    </span>
    </div>
    `;
    // <button class="to-do-item-edit__btn">Edit</button>
    toDoStorage.insertAdjacentHTML("beforeend", html);
  });
  btnAdd.addEventListener("click", function () {
    delAllNoItemsParagraph("block", "none");
  });
  const delBtn = document.querySelectorAll(".to-do-item-del__btn");
  for (let i = 0; i < delBtn.length; i++) {
    delBtn[i].addEventListener("click", function (e) {
      const curE = e.target.closest(".to-do__item");
      filtering(e);
      curE.remove();
      if (toDoStorage.childElementCount === 2) {
        delAllNoItemsParagraph("none", "block");
      }
      console.log(toDoStorage.childElementCount);
    });
  }
  const all = document.querySelectorAll(".to-do-item__title");
  all.forEach((val) => {
    showItemTitle(val);
  });
});

function filtering(parametar) {
  const text =
    parametar.target.closest(".to-do__item").firstElementChild.firstElementChild
      .textContent;
  array = array.filter((val) => val.name !== text);
  localStorage.setItem("item", JSON.stringify(array));
}

function showItemTitle(parametar) {
  parametar.addEventListener("click", () => {
    const overlay = document.createElement("div");

    wholeSection.classList.add("hide");
    overlay.classList.add("overlay");
    overlay.innerHTML = `
              <h1 class="your-to-do">Your to do item:</h1>
              <h1 class="your-to-do-item">
              ${parametar.textContent}
              </h1>
              <img src="images/close.png" alt="Close overlay" class="close-overlay ">
              `;
    container.prepend(overlay);
    const closeOverlay = document.querySelector(".close-overlay");

    closeOverlay.addEventListener("click", () => {
      wholeSection.classList.remove("hide");
      closeOverlay.classList.add("hide");
      container.removeChild(overlay);
    });
  });
}

itemInput.addEventListener("input", function () {
  itemInput.value = itemInput.value.slice(0, 35);
});

function delAllNoItemsParagraph(parametar1, parametar2) {
  btnDelAll.style.display = parametar1;
  noItemsParagraph.style.display = parametar2;
}

//

const ulDom = document.querySelector("#list");
const thingsToDo = document.querySelector("#task");

const newElement = () => {
  const liDom = document.createElement("li");
  const cancelBtn = document.createElement("button");

  liDom.addEventListener("click", (e) =>
    liDom.className == ""
      ? e.currentTarget.classList.add("checked")
      : e.currentTarget.classList.remove("checked")
  );
  cancelBtn.addEventListener("click", () => {
    liDom.remove(cancelBtn);
  });

  if (thingsToDo.value == "") {
    $(".error").toast("show");
  } else {
    liDom.innerHTML = thingsToDo.value;
    cancelBtn.classList.add("close");
    cancelBtn.textContent = "X";
    ulDom.appendChild(liDom);
    liDom.appendChild(cancelBtn);
    $(".success").toast("show");
  }
  thingsToDo.value = "";
};

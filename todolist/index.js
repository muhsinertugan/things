const ulDom = document.querySelector("#list");
const thingsToDo = document.querySelector("#task");

const newElement = () => {
  const liDom = document.createElement("li");
  liDom.addEventListener("click", (e) =>
    liDom.className == ""
      ? e.currentTarget.classList.add("checked")
      : e.currentTarget.classList.remove("checked")
  );

  if (thingsToDo.value == "") {
    $(".error").toast("show");
  } else {
    liDom.innerHTML = thingsToDo.value;
    ulDom.appendChild(liDom);
    $(".success").toast("show");
  }
  thingsToDo.value = "";
};

const ulDom = document.querySelector("#list");
const thingsToDo = document.querySelector("#task");

const newElement = () => {
  const liDom = document.createElement("li");
<<<<<<< HEAD
=======
  const cancelBtn = document.createElement("button");

>>>>>>> 01441b46517ac3ef1f54c34b66e594a706001dc9
  liDom.addEventListener("click", (e) =>
    liDom.className == ""
      ? e.currentTarget.classList.add("checked")
      : e.currentTarget.classList.remove("checked")
  );
<<<<<<< HEAD
=======
  cancelBtn.addEventListener("click", () => {
    liDom.remove(cancelBtn);
  });
>>>>>>> 01441b46517ac3ef1f54c34b66e594a706001dc9

  if (thingsToDo.value == "") {
    $(".error").toast("show");
  } else {
    liDom.innerHTML = thingsToDo.value;
<<<<<<< HEAD
    ulDom.appendChild(liDom);
=======
    cancelBtn.classList.add("close");
    cancelBtn.textContent = "X";
    ulDom.appendChild(liDom);
    liDom.appendChild(cancelBtn);
>>>>>>> 01441b46517ac3ef1f54c34b66e594a706001dc9
    $(".success").toast("show");
  }
  thingsToDo.value = "";
};

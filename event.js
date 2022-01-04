const goHome = document.querySelector("div.think h1");


// function handleClick() {
//   const clickedClass = "active nice-font";
//   if (goHome.className === clickedClass) {
//     goHome.className = "";
//   } else {
//     goHome.className = clickedClass;
//   }
// }
   
// function handleClick() {
//   const clickedClass = "active";
//   if (goHome.classList.contains(clickedClass)) {
//     goHome.classList.remove(clickedClass);
//   } else {
//     goHome.classList.add(clickedClass);
//   }
// }

function handleClick() {
  goHome.classList.toggle("active");
}

    goHome.addEventListener("click", handleClick);
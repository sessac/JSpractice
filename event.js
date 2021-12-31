const title = document.querySelector("div.today h1");

function handleTitleClick() {
    title.style.color = "blue";
    title.innerText = "Today is the end of the year!";
}
function handleMouseEnter() {
    title.innerText = "Mouse is here";
}
function handleMouseLeave() {
    title.innerText = "Mouse is gone";
}


    title.addEventListener("mouseenter",handleMouseEnter)
    title.addEventListener("mouseleave", handleMouseLeave)
    title.addEventListener("click", handleTitleClick);

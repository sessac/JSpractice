const endOfYear = document.querySelector("div.today h1");
const newYear = document.querySelector("div.happy h1");


function handleEndClick() {
  const currentEndColor = endOfYear.style.color;
  let ChangeEndColor;
  if (currentEndColor === "blue") {
    ChangeEndColor = "yellow";
  } else {
    ChangeEndColor = "blue";
  }
    endOfYear.style.color = ChangeEndColor;
}


function handleNewClick() {
  const currentNewColor = newYear.style.color;
  let ChangeNewColor;
  if (currentNewColor === "red") {
    ChangeNewColor = "green";
  } else {
    ChangeNewColor = "red";
  }
    newYear.style.color = ChangeNewColor;
}

    endOfYear.addEventListener("click", handleEndClick);
    newYear.addEventListener("click", handleNewClick);

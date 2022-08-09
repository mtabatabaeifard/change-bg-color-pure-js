const bgInput = document.querySelector("input");
const submitBtn = document.querySelector("#submit-btn");
const mainDiv = document.querySelector(".main");
const error = (msg) => {
  const h3 = document.createElement("h3");
  h3.style.color = "red";
  h3.innerText = msg;
  mainDiv.appendChild(h3);
  let errorTimer = setInterval(() => {
      mainDiv.removeChild(h3);
      location.reload();
    }, 2000);
    if (!mainDiv.hasChildNodes()) {
        clearInterval(errorTimer);
    }
};
const handleChangeBgColor = (e) => {
  e.preventDefault();
  if (!bgInput.value) {
    return error("please enter value!");
  }
  let inputValue = bgInput.value;
  document.body.style.backgroundColor = inputValue;
};
submitBtn.addEventListener("click", handleChangeBgColor);

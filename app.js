var btnClk = document.querySelector("#btn-click");
var inputTxt = document.querySelector(".input-text");
var outputBox = document.querySelector(".output-box");
var resetBtn = document.querySelector(".reset");

var url = "https://api.funtranslations.com/translate/minion.json?text=";

function urlCall() {
  fetch(url + inputTxt.value)
    .then((res) => res.json())
    .then((res) => (outputBox.innerText = res.contents.translated))
    .catch((err) => console.log("err happened", err));
}

btnClk.addEventListener("click", urlCall);
resetBtn.addEventListener("click", () => {
  inputTxt.value = "";
  outputBox.innerText = "";
});

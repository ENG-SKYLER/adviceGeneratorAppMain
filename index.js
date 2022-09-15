const id = document.querySelector(".id span");
const advice = document.querySelector(".advice span");
const button = document.querySelector("button");

console.log(id);
console.log(advice);
let adviceData;
let myRequest = new XMLHttpRequest();
myRequest.open("GET", "https://api.adviceslip.com/advice");
myRequest.send();
console.log(myRequest);
let obj;
myRequest.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    adviceData = JSON.parse(this.responseText);
    id.textContent = adviceData["slip"].id;
    advice.textContent = adviceData["slip"].advice;
  }
};
function updateAjax() {
  myRequest.open("GET", "https://api.adviceslip.com/advice", true);
  myRequest.send();
  if (this.readyState === 4 && this.status === 200) {
    adviceData = JSON.parse(this.responseText);
    id.textContent = adviceData["slip"].id;
    quote.textContent = adviceData["slip"].advice;
  }
}

button.addEventListener("click", updateAjax);

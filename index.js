// Write your code here!

const main = document.getElementById("main");
main.remove()

const newHeader = document.createElement("h1");
newHeader.id = "victory";
newHeader.textContent = "Kendall is the champion";
document.body.appendChild(newHeader);
// dont forget to appenedChild to see it in the DOM

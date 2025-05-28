const count = document.querySelector(".countNum");

count.innerText = 0;

const button = document.getElementById("add");
button.addEventListener("click", function () {
  let currentCount = parseInt(count.innerText);
  count.innerText = currentCount + 1;
});

const clear = document.getElementById("save");
clear.addEventListener("click", function () {
  count.innerText = 0;
  alert("count saved");
});

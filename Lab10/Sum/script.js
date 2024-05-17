const firstInput = document.querySelector(".firstField");
const secondInput = document.querySelector(".secondField");
const resultBtn = document.querySelector(".resultBtn");
const p = document.querySelector("p");

resultBtn.addEventListener("click", function () {
    p.textContent = Sum(firstInput.value, secondInput.value);
    firstInput.value = "";
    secondInput.value = "";
});

function Sum(value1, value2) {
    return +value1 + +value2;
}

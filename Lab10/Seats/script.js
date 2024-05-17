const seats = document.querySelectorAll(".seat");
seats.forEach((seat) => {
    seat.addEventListener("click", function () {
        removeAllSelected();
        if (!checkReserve(seat)) {
            seat.classList.add("selected");
            if (seat.previousElementSibling) {
                seat.previousElementSibling.classList.add("not-selected");
            }
            if (seat.nextElementSibling) {
                seat.nextElementSibling.classList.add("not-selected");
            }
        }
    });

    seat.addEventListener("dblclick", function () {
        if (!checkReserve(seat)) {
            seat.classList.add("reserved");
            seat.textContent = "Reserved";
            if (seat.nextElementSibling) {
                seat.nextElementSibling.classList.add("reserved");
                seat.nextElementSibling.textContent = "You cant reserve";
            }
            if (seat.previousElementSibling) {
                seat.previousElementSibling.classList.add("reserved");
                seat.previousElementSibling.textContent = "You cant reserve";
            }
        }
    });
});

function removeAllSelected() {
    seats.forEach((seat) => seat.classList.remove("selected", "not-selected"));
}

function checkReserve(value) {
    return value.classList.contains("reserved");
}

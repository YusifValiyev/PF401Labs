const restaurants = [
    {
        id: 1,
        name: "The Gourmet Kitchen",
        address: "123 Foodie Lane, Culinary City, CA 90210",
        phone: "(123) 456-7890",
        cuisineType: "Italian",
        rating: 4.5,
        tables: [
            {
                tableNumber: 1,
                seatNumber: 4,
                isReserved: false,
            },
            {
                tableNumber: 2,
                seatNumber: 2,
                isReserved: true,
            },
            {
                tableNumber: 3,
                seatNumber: 6,
                isReserved: false,
            },
        ],
    },
    {
        id: 2,
        name: "Sushi Paradise",
        address: "456 Sushi Blvd, Fish Town, CA 90321",
        phone: "(987) 654-3210",
        cuisineType: "Japanese",
        rating: 4.8,
        tables: [
            {
                tableNumber: 4,
                seatNumber: 8,
                isReserved: true,
            },
            {
                tableNumber: 5,
                seatNumber: 4,
                isReserved: false,
            },
            {
                tableNumber: 6,
                seatNumber: 6,
                isReserved: false,
            },
        ],
    },
    {
        id: 3,
        name: "TexMex Grill",
        address: "789 Spice Street, Pepper Town, TX 78666",
        phone: "(555) 123-4567",
        cuisineType: "Mexican",
        rating: 4.3,
        tables: [
            {
                tableNumber: 7,
                seatNumber: 4,
                isReserved: false,
            },
            {
                tableNumber: 8,
                seatNumber: 6,
                isReserved: true,
            },
            {
                tableNumber: 9,
                seatNumber: 6,
                isReserved: false,
            },
        ],
    },
    {
        id: 4,
        name: "Burger Joint",
        address: "101 Burger Avenue, Grill City, NY 10001",
        phone: "(777) 888-9999",
        cuisineType: "American",
        rating: 4.0,
        tables: [
            {
                tableNumber: 10,
                seatNumber: 8,
                isReserved: false,
            },
            {
                tableNumber: 11,
                seatNumber: 4,
                isReserved: false,
            },
        ],
    },
    {
        id: 5,
        name: "Taste of India",
        address: "567 Curry Lane, Spiceville, CA 90555",
        phone: "(111) 222-3333",
        cuisineType: "Indian",
        rating: 4.7,
        tables: [
            {
                tableNumber: 12,
                seatNumber: 4,
                isReserved: true,
            },
        ],
    },
    {
        id: 6,
        name: "Mediterranean Delight",
        address: "876 Olive Street, Oliveville, TX 78900",
        phone: "(444) 555-6666",
        cuisineType: "Mediterranean",
        rating: 4.2,
        tables: [
            {
                tableNumber: 13,
                seatNumber: 4,
                isReserved: true,
            },
            {
                tableNumber: 14,
                seatNumber: 12,
                isReserved: false,
            },
        ],
    },
];

const dropdDown = document.querySelector(".restaurant-name-dropdown");
const searchRestauranInput = document.querySelector(".restaurant-name-input");
const chevron = document.querySelector("img");
const modalContainer = document.querySelector(".modal-container");
const closeModalBtn = document.querySelector(".close-modal-btn");
const modal = document.querySelector(".modal");
const tables = document.querySelector(".tables-container");
const reservationForm = document.querySelector("#reservation-form");
const nameInput = document.querySelector(".name");
const surNameInput = document.querySelector(".surname");
const numberInput = document.querySelector(".number");

generateDropdown();
window.addEventListener("click", handleWindowClick);
searchRestauranInput.addEventListener("click", handleInputClick);
searchRestauranInput.addEventListener("focus", openDropDown);
chevron.addEventListener("click", handleChevronClick);
closeModalBtn.addEventListener("click", closeModal);
reservationForm.addEventListener("submit", reserve);

let reservation = {
    name: null,
    surname: null,
    number: null,
    reservationInfo: null,
};

function generateDropdown() {
    restaurants.forEach((restaurant) => {
        const dropdDownElement = document.createElement("div");
        dropdDownElement.textContent = restaurant.name;
        dropdDownElement.className = `restaurant ${restaurant.id}`;
        dropdDown.append(dropdDownElement);
        dropdDownElement.addEventListener("click", () => {
            searchRestauranInput.value = restaurant.name;
            getRestaurantDatas();
        });
    });
}

function handleWindowClick() {
    dropdDown.classList.remove("active");
    chevron.classList.remove("rotate");
}

function handleInputClick(e) {
    e.stopPropagation();
}

function handleChevronClick(e) {
    e.stopPropagation();
    searchRestauranInput.focus();
}

function openDropDown() {
    dropdDown.classList.add("active");
    chevron.classList.add("rotate");
}

function getRestaurantDatas() {
    const restaurantData = findRestaurant();
    if (restaurantData !== undefined) {
        openModal();
        generateRestaurantData(restaurantData);
        generateTables(restaurantData);
    }
}

function openModal() {
    modalContainer.classList.add("open-modal");
}

function closeModal() {
    modalContainer.classList.remove("open-modal");
    clearTables();
}

function findRestaurant() {
    let selectedRestaurant = searchRestauranInput.value.trim();
    return restaurants.find(
        (restaurant) => restaurant.name === selectedRestaurant
    );
}

function generateRestaurantData(restaurant) {
    const restaurantNameHeader = document.querySelector(".modal h2");
    restaurantNameHeader.textContent = restaurant.name;
}

function generateTables(restaurant) {
    restaurant.tables.forEach((table) => {
        const tableElement = document.createElement("div");
        tableElement.className = table.isReserved ? "table reserved" : "table";
        const tableInfo = document.createElement("p");
        tableInfo.textContent = table.isReserved
            ? "Reserved"
            : `Table ${table.tableNumber}`;
        const seatInfo = document.createElement("p");
        seatInfo.textContent = `${table.seatNumber} people`;
        tableElement.append(tableInfo, seatInfo);
        tables.append(tableElement);
        tableElement.addEventListener("click", function () {
            clearReserve(tables.children);
            if (!this.classList.contains("reserved")) {
                this.classList.add("get-reserve");
            }
        });
        tableElement.addEventListener("dblclick", function () {
            if (!this.classList.contains("reserved")) {
                reservation = {
                    ...reservation,
                    reservationInfo: {
                        resturantName: restaurant.name,
                        tableNumber: table.tableNumber,
                        seatNumber: table.seatNumber,
                        date: new Date().toISOString(),
                    },
                };
                closeModal();
            }
        });
    });
}

function clearReserve(tables) {
    Array.from(tables).forEach((item) => item.classList.remove("get-reserve"));
}

function reserve(e) {
    e.preventDefault();
    if (validateInputs()) {
        reservation = {
            ...reservation,
            name: nameInput.value,
            surname: surNameInput.value,
            number: numberInput.value,
        };
        changeReserved(reservation);
        clearAllInputs();
    } else {
        alert("Fields are required");
    }
    console.log(reservation);
}

function clearAllInputs() {
    nameInput.value = "";
    surNameInput.value = "";
    numberInput.value = "";
    searchRestauranInput.value = "";
}

function changeReserved(reservation) {
    for (let restaurant of restaurants) {
        if (restaurant.name === reservation.reservationInfo.resturantName) {
            const table = restaurant.tables.find(
                (x) => x.tableNumber === reservation.reservationInfo.tableNumber
            );
            table.isReserved = true;
        }
    }
}

function validateInputs() {
    if (
        nameInput.value.trim() === "" ||
        surNameInput.value.trim() === "" ||
        numberInput.value.trim() === "" ||
        findRestaurant() === undefined
    ) {
        return false;
    }
    return true;
}

function clearTables() {
    tables.innerHTML = "";
}

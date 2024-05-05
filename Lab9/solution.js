// function sum(...numbers) {
//     return numbers.reduce((prev, cur) => prev + cur, 0);
// }
// let result = sum(1, 2, 3, 4, 5, 6, 7, 8);
// console.log(result);

// function FilterByPrice(arr, value, option) {
//     if (option === -1) {
//         return arr.filter((num) => num >= value);
//     } else if (option === 1) {
//         return arr.filter((num) => num < value);
//     } else {
//         throw new Error("Enter the valid option");
//     }
// }

// let myArray = [150, 20, 30, 100, 200, 10];
// try {
//     let result = FilterByPrice(myArray, 50, 0);
//     console.log(result);
// } catch (error) {
//     console.log(error.message);
// }

const person = {
    name: "Yusif",
    surName: "Valiyev",
};

const car = {
    id: 1,
    brand: "Toyota",
    model: "Camry",
    year: 2018,
    color: "black",
    isRented: false,
    rentalInfo: null,
    rentCar: function (name, callBack = checkUser) {
        if (callBack(name)) {
            if (!this.isRented) {
                this.isRented = true;
                this.rentalInfo = {
                    rentedTime: new Date().toISOString(),
                    rentedBy: { ...person },
                };
                console.log("Car is rented");
            } else {
                console.log("Car is already rented");
            }
        } else {
            console.log("Go to sign up");
        }
    },
    returnCar: function () {
        if (this.isRented) {
            this.isRented = false;
            this.rentalInfo = null;
            console.log("Car is returned");
        } else {
            console.log("Car is already surulmey");
        }
    },
};

function checkUser(name) {
    return name === person.name;
}

console.log(car);
car.rentCar("Yusif");
console.log(car);

const searchParams = new URLSearchParams(window.location.search);
const suppId = searchParams.get("id");
const compName = document.getElementById("company-name");
const contName = document.getElementById("contact-name");
const updateForm = document.querySelector("form");

const API_URL = `https://northwind.vercel.app/api/suppliers/${suppId}`;

fillInputs();
async function fillInputs() {
    const response = await fetch(API_URL);

    const data = await response.json();
    compName.value = data.companyName;
    contName.value = data.contactName;
}

updateForm.addEventListener("submit", updateData);
async function updateData(e) {
    e.preventDefault();
    let updatedData = {
        companyName: compName.value,
        contactName: contName.value,
    };

    fetch(API_URL, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedData),
    })
        .then((data) => {
            console.log(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

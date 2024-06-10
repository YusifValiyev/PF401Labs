const tableBody = document.querySelector("tbody");
const API_URL = "https://northwind.vercel.app/api/suppliers";
async function getSuppliers() {
    const response = await fetch(API_URL);
    const data = await response.json();
    return data;
}

async function fillTable() {
    const suppliers = await getSuppliers();
    suppliers.forEach((supplier) => {
        const tableRow = document.createElement("tr");
        const supplierId = document.createElement("td");
        supplierId.textContent = supplier.id;
        const companyNameData = document.createElement("td");
        companyNameData.textContent = supplier.companyName;
        const contactNameData = document.createElement("td");
        contactNameData.textContent = supplier.contactName;
        const editButtonData = document.createElement("button");
        editButtonData.addEventListener("click", () => {
            window.location.href = `../edit/index.html?id=${supplier.id}`;
        });
        editButtonData.textContent = "Edit";
        tableRow.append(
            supplierId,
            companyNameData,
            contactNameData,
            editButtonData
        );
        tableBody.append(tableRow);
    });
}

fillTable();

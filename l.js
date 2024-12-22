
let selectedRow = null;

// Save form data
function saveData() {
    let formData = readFormData();

    if (!formData.firstName || !formData.lastName || !formData.email || !formData.password || !formData.contactNumber) {
        alert("All fields are required!");
        return;
    }

    if (selectedRow === null) {
        insertNewRecord(formData);
    } else {
        updateRecord(formData);
        selectedRow = null;
    }

    clearForm();
}

// Read form data
function readFormData() {
    return {
        firstName: document.getElementById("firstName").value,
        lastName: document.getElementById("lastName").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
        contactNumber: document.getElementById("contactNumber").value,
    };
}

// Insert new row in table
function insertNewRecord(data) {
    let table = document.getElementById("userTable").getElementsByTagName("tbody")[0];
    let newRow = table.insertRow(table.length);

    newRow.insertCell(0).innerHTML = data.firstName + " " + data.lastName;
    newRow.insertCell(1).innerHTML = data.email;
    newRow.insertCell(2).innerHTML = data.password;
    newRow.insertCell(3).innerHTML = data.contactNumber;

    // Edit button
    newRow.insertCell(4).innerHTML = `<button class="edit-btn" onclick="onEdit(this)">
                                            <img src="https://img.icons8.com/emoji/48/000000/pencil-emoji.png" alt="Edit">
                                        </button>`;
    // Delete button
    newRow.insertCell(5).innerHTML = `<button class="delete-btn" onclick="onDelete(this)">
                                            <img src="https://img.icons8.com/emoji/48/000000/cross-mark-emoji.png" alt="Delete">
                                        </button>`;
}

// Clear form data
function clearForm() {
    document.getElementById("firstName").value = "";
    document.getElementById("lastName").value = "";
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
    document.getElementById("contactNumber").value = "";
    selectedRow = null;
}

// Edit selected row
function onEdit(td) {
    selectedRow = td.parentElement.parentElement;

    document.getElementById("firstName").value = selectedRow.cells[0].innerHTML.split(" ")[0];
    document.getElementById("lastName").value = selectedRow.cells[0].innerHTML.split(" ")[1];
    document.getElementById("email").value = selectedRow.cells[1].innerHTML;
    document.getElementById("password").value = selectedRow.cells[2].innerHTML;
    document.getElementById("contactNumber").value = selectedRow.cells[3].innerHTML;
}

// Update record
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.firstName + " " + formData.lastName;
    selectedRow.cells[1].innerHTML = formData.email;
    selectedRow.cells[2].innerHTML = formData.password;
    selectedRow.cells[3].innerHTML = formData.contactNumber;
}

// Delete selected row
function onDelete(td) {
    if (confirm("Are you sure you want to delete this record?")) {
        let row = td.parentElement.parentElement;
        document.getElementById("userTable").deleteRow(row.rowIndex);
    }
}
    
function addRow() {
    const text = document.getElementById('text').value;
    const email = document.getElementById('email').value;
    const checkboxes = document.querySelectorAll('input[name="checkbox"]:checked');
    const radio = document.querySelector('input[name="radio"]:checked');
    const datetime = document.getElementById('datetime').value;
    const color = document.getElementById('color').value;
    const range = document.getElementById('range').value;

    let checkboxValues = [];
    checkboxes.forEach((checkbox) => {
        checkboxValues.push(checkbox.value);
    });

    if (text == "") {
        alert("El campo de texto está vacío");
        return;
    }
    if (email == "") {
        alert("El campo de correo está vacío");
        return;
    }
    if (checkboxValues.length == 0) {
        alert("Debe seleccionar al menos una opción de checkbox");
        return;
    }
    if (!radio) {
        alert("Debe seleccionar una opción de radio");
        return;
    }
    if (datetime == "") {
        alert("Debe seleccionar una fecha y hora");
        return;
    }
    if (color == "") {
        alert("Debe seleccionar un color");
        return;
    }
    if (range == "") {
        alert("Debe seleccionar un valor en el rango");
        return;
    }

    const table = document.getElementById('infoTable').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();

    newRow.innerHTML = `
        <td>${text}</td>
        <td>${email}</td>
        <td>${checkboxValues.join(', ')}</td>
        <td>${radio.value}</td>
        <td>${datetime}</td>
        <td style="background-color: ${color};">${color}</td>
        <td>${range}</td>
    `;

    document.getElementById('infoForm').reset();
}

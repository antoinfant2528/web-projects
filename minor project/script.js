document.addEventListener("DOMContentLoaded", function() {
    const employeeForm = document.getElementById("employeeForm");
    const empIdInput = document.getElementById("empId");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const phoneInput = document.getElementById("phone");
    const employeeTableBody = document.getElementById("employeeTableBody");

    let employees = JSON.parse(localStorage.getItem("employees")) || [];

    function renderEmployees() {
        employeeTableBody.innerHTML = "";
        employees.forEach((employee, index) => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${employee.name}</td>
                <td>${employee.email}</td>
                <td>${employee.phone}</td>
                <td>
                    <button class="edit" onclick="editEmployee(${index})">Edit</button>
                    <button class="delete" onclick="deleteEmployee(${index})">Delete</button>
                </td>
            `;
            employeeTableBody.appendChild(row);
        });
    }

    window.editEmployee = function(index) {
        const employee = employees[index];
        empIdInput.value = index;
        nameInput.value = employee.name;
        emailInput.value = employee.email;
        phoneInput.value = employee.phone;
    }

    window.deleteEmployee = function(index) {
        employees.splice(index, 1);
        localStorage.setItem("employees", JSON.stringify(employees));
        renderEmployees();
    }

    employeeForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const id = empIdInput.value;
        const name = nameInput.value;
        const email = emailInput.value;
        const phone = phoneInput.value;

        if (id === "") {
            employees.push({ name, email, phone });
        } else {
            employees[id] = { name, email, phone };
        }

        localStorage.setItem("employees", JSON.stringify(employees));
        renderEmployees();
        empIdInput.value = "";
        employeeForm.reset();
    });

    renderEmployees();
});

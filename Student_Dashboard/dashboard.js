lucide.createIcons();

const form = document.querySelector('.input-form');
const searchInput = document.querySelector('.search-input');
const tableBody = document.querySelector('#studentBody');
const validation_msg = document.querySelector('.validation-msg');

loadStudents();
updateCounter();

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.querySelector('#name').value.trim();
    const id = document.querySelector('#sId').value.trim();

    const nameRegex = /^[A-Za-z]+(?: [A-Za-z]+)*$/;
    const idRegex = /^STU-\d{4}-\d{3}$/;

    if (!nameRegex.test(name) || name.length < 3) {
        validation_msg.textContent = "Name must include alphabets only and must be greater than 3 characters.";
        return;
    }

    if (!idRegex.test(id)) {
        validation_msg.textContent = "ID must follow the format STU-2024-001.";
        return;
    }

    validation_msg.textContent = "";

    const student = {
        name: document.querySelector('#name').value.trim(),
        id: document.querySelector('#sId').value.trim(),
        dept: document.querySelector('#dept').value,
        percent: document.querySelector('#percent').value,
        joinedDate: getDate()
    };

    addStudentData(student);
    saveStudent(student);
    updateCounter();
    form.reset();
});

searchInput.addEventListener('input', (e) => {
    const searchValue = e.target.value.toLowerCase();
    const rows = tableBody.querySelectorAll('tr');

    rows.forEach(row => {
        const isMatch = row.textContent.toLowerCase().includes(searchValue);
        row.style.display = isMatch ? "" : "none";
    });
    updateCounter();
});

function addStudentData(student) {
    const { name, id, dept, percent, joinedDate } = student;
    const status = percent >= 35 ? 'pass' : 'fail';
    const row = document.createElement('tr');

    row.innerHTML = `
        <td>
            <div class="student-info">
                <div class="student-icon">${getInitials(name)}</div>
                <div>
                    <div class="student-name">${name}</div>
                    <div class="student-joined">Joined: ${joinedDate}</div>
                </div>
            </div>
        </td>
        <td>
            <div class="student-id">${id}</div>
            <div class="student-course">${dept}</div>
        </td>
        <td>
            <div class="percent-info">
                <div>${percent}%</div>
                <div class="progress-bar">
                    <div class="progress-fill ${status}" style="width:${percent}%"></div>
                </div>
            </div>
        </td>
        <td class="right-text">
            <div class="status-info">
                <span class="result ${status}">${status}</span>
                <button class="btn-delete">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trash2-icon lucide-trash-2">
                    <path d="M10 11v6"/><path d="M14 11v6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/><path d="M3 6h18"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
                </button>
            </div>
        </td>
    `;

    row.querySelector('.btn-delete').addEventListener("click", (e) => {
        row.remove();
        deleteStudent(id);
    });

    tableBody.appendChild(row);
    
}

function saveStudent(student) {
    const students = JSON.parse(localStorage.getItem('students') || '[]');
    students.push(student);
    localStorage.setItem('students', JSON.stringify(students));
}
function loadStudents() {
    const students = JSON.parse(localStorage.getItem('students') || '[]');
    students.forEach(addStudentData);
}

function deleteStudent(id) {
    let students = JSON.parse(localStorage.getItem('students') || '[]');
    students = students.filter(s => s.id !== id);
    localStorage.setItem('students', JSON.stringify(students));
    updateCounter();
}

function getInitials(name) {
    return name
      .split(' ')
      .map(word => word[0].toUpperCase())
      .join('')
      .slice(0, 2);
}

function getDate() {
    return new Date().toLocaleDateString('en-US', {
        month: 'short', 
        day: 'numeric', 
        year: 'numeric'
    });
}

function updateCounter() {
    const allRows = Array.from(tableBody.querySelectorAll('tr'));
    const total = allRows.length;
    const rows = Array.from(tableBody.querySelectorAll('tr'));
    const visible = rows.filter(row => row.style.display !== 'none').length;
    
    const counter = document.querySelector('.studentCount');
    counter.textContent = `Showing ${visible} of ${total} students`;
}
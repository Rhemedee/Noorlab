const grade = [
    {
        name: "Akinfumi Taiwo",
        subject: "Mathematics",
        score: 82,
        Grade: "A"
    },

    {
        name: "Awe James",
        subject: "English",
        score: 80,
        Grade: "A"
    },

    {
        name: "Anifowose Tobi",
        subject: "Mathematics",
        score: 82,
        Grade: "A"
    },

    {
        name: "AJibola Dayo",
        subject: "English",
        score: 78,
        Grade: "A"
    },

    {
        name: "Adebayo Busayo",
        subject: "Mathematics",
        score: 67,
        Grade: "B"
    },
    {
        name: "AbdulSalam AbdulRahman",
        subject: "Mathematics",
        score: 69,
        Grade: "B"
    },

    {
        name: "AbduMajeed AbdulHameed",
        subject: "English",
        score: 78,
        Grade: "A"
    },

    {
        name: "Adebayo Taiwo",
        subject: "Mathematics",
        score: 82,
        Grade: "A"
    },

    {
        name: "Alade Jide",
        subject: "English",
        score: 67,
        Grade: "B"
    },

    {
        name: "Odelade Aliameen",
        subject: "English",
        score: 80,
        Grade: "A"
    },

    {
        name: "Bode Bolade",
        subject: "Mathematics",
        score: 50,
        Grade: "C"
    },

    {
        name: "Ajoke Baraka",
        subject: "English",
        score: 87,
        Grade: "A"
    },
];


if (localStorage.getItem("studentGrade") === null) {
const format = JSON.stringify(grade);
localStorage.setItem("studentGrade", format);
}

const submitBtn = document.getElementById("addbtn");
submitBtn.addEventListener("click", function(event) {
event.preventDefault();

const studentName = document.getElementById("nameInp").value;
const studentSubject = document.getElementById("subjectInp").value;
const studentScore = document.getElementById("scoreInp").value;
const studentGrade = document.getElementById("grade").value;

if (studentName === "" || studentScore === "") return;

const newStudent = {
name: studentName,
subject: studentSubject,
score: Number(studentScore),
Grade: studentGrade
};

const existingGrade = localStorage.getItem("studentGrade");
let current = JSON.parse(existingGrade);
current.push(newStudent);

localStorage.setItem("studentGrade", JSON.stringify(current));
displayGrades();
});



function displayGrades() {
const savedData = localStorage.getItem("studentGrade");
const gradeArray = JSON.parse(savedData);
const table = document.getElementById("studentTable");

if (!gradeArray || gradeArray.length === 0) {
table.innerHTML = "<tr><th>Student Name</th><th>Subject</th><th>Score</th><th>Grade</th><th>Action</th></tr>";
document.querySelector(".average").innerHTML = "<h3>0</h3>";
document.querySelector(".highest-score").innerHTML = "<h3>0</h3>";
document.querySelector(".lowest-score").innerHTML = "<h3>0</h3>";
return;
}

table.innerHTML = "<tr><th>Student Name</th><th>Subject</th><th>Score</th><th>Grade</th><th>Action</th></tr>";

let totalScore = 0;
let highest = Number(gradeArray[0].score);
let lowest = Number(gradeArray[0].score);

gradeArray.forEach(function(student, index) {
const row = table.insertRow(-1);
row.insertCell(0).innerHTML = student.name;
row.insertCell(1).innerHTML = student.subject;
row.insertCell(2).innerHTML = student.score;
row.insertCell(3).innerHTML = student.Grade;
row.insertCell(4).innerHTML = "<button onclick='deleteStudent(" + index + ")'>Delete</button>";

let currentScore = Number(student.score);
totalScore += currentScore;

if (currentScore > highest) {
highest = currentScore;
}
if (currentScore < lowest) {
lowest = currentScore;
}
});

const average = (totalScore / gradeArray.length).toFixed(2);

document.querySelector(".average").innerHTML = "<h3>" + average + "</h3>";
document.querySelector(".highest-score").innerHTML = "<h3>" + highest + "</h3>";
document.querySelector(".lowest-score").innerHTML = "<h3>" + lowest + "</h3>";
}


function deleteStudent(indexPosition) {
const savedData = localStorage.getItem("studentGrade");
let gradeArray = JSON.parse(savedData);

const studentName = gradeArray[indexPosition].name;

const confirmDelete = confirm("Are you sure you want to delete " + studentName + "?");

if (confirmDelete) {
gradeArray.splice(indexPosition, 1);
const updatedData = JSON.stringify(gradeArray);
localStorage.setItem("studentGrade", updatedData);
displayGrades();
alert(studentName + " has been successfully deleted.");
}
}

displayGrades();

const searchInput = document.getElementById("searchInp");

searchInput.addEventListener("input", function() {
const searchTerm = searchInput.value.toLowerCase();
const savedData = localStorage.getItem("studentGrade");
const gradeArray = JSON.parse(savedData);

const filteredArray = gradeArray.filter(function(student) {
const nameMatch = student.name.toLowerCase().includes(searchTerm);
const subjectMatch = student.subject.toLowerCase().includes(searchTerm);
return nameMatch || subjectMatch;
});

renderSearch(filteredArray);
});

function renderSearch(filteredData) {
const table = document.getElementById("studentTable");
table.innerHTML = "<tr><th>Student Name</th><th>Subject</th><th>Score</th><th>Grade</th><th>Action</th></tr>";

if (filteredData.length === 0) {
const row = table.insertRow(-1);
const cell = row.insertCell(0);
cell.colSpan = 5;
cell.innerHTML = "No matching records found";
cell.style.textAlign = "center";
return;
}

filteredData.forEach(function(student, index) {
const row = table.insertRow(-1);
row.insertCell(0).innerHTML = student.name;
row.insertCell(1).innerHTML = student.subject;
row.insertCell(2).innerHTML = student.score;
row.insertCell(3).innerHTML = student.Grade;
row.insertCell(4).innerHTML = "<button onclick='deleteStudent(" + index + ")'>Delete</button>";
});
}
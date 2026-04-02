const modal = document.getElementById("formModal");
const btn = document.getElementById("newBtn");
const span = document.getElementsByClassName("close")[0];

btn.onclick = () => (modal.style.display = "block");
span.onclick = () => (modal.style.display = "none");
window.onclick = (event) => {
  if (event.target == modal) modal.style.display = "none";
};

const display = document.getElementById("display");

function renderTasks(filter) {
  display.innerHTML = "";

  if (filter === "all") {
    const tasks = [...assignments, ...assessements];

    tasks.forEach((task) => {
      const li = document.createElement("li");
      li.className = "p-3 border border-gray-300 rounded mb-2 bg-white";
      li.innerHTML = `
                <div class="font-semibold">${task.name}</div>
                <div class="text-sm text-gray-600">${task.type} • ${task.class}</div>
                <div class="text-sm">${task.date} ${task.time || ""}</div>
                <div class="text-sm text-gray-700">${task.description || "No description"}</div>
            `;
      display.appendChild(li);
    });
  } else if (filter === "assessement") {
    const tasks = [...assessements];

    tasks.forEach((task) => {
      const li = document.createElement("li");
      li.className = "p-3 border border-gray-300 rounded mb-2 bg-white";
      li.innerHTML = `
                <div class="font-semibold">${task.name}</div>
                <div class="text-sm text-gray-600">${task.type} • ${task.class}</div>
                <div class="text-sm">${task.date} ${task.time || ""}</div>
                <div class="text-sm text-gray-700">${task.description || "No description"}</div>
            `;
      display.appendChild(li);
    });
  } else if (filter === "assignment") {
    const tasks = [...assignments];
    tasks.forEach((task) => {
      const li = document.createElement("li");
      li.className = "p-3 border border-gray-300 rounded mb-2 bg-white";
      li.innerHTML = `
                <div class="font-semibold">${task.name}</div>
                <div class="text-sm text-gray-600">${task.type} • ${task.class}</div>
                <div class="text-sm">${task.date} ${task.time || ""}</div>
                <div class="text-sm text-gray-700">${task.description || "No description"}</div>
            `;
      display.appendChild(li);
    });
  }
}
const filterTabs = document.getElementById("filterTabs");
let currentFilter = "all";

filterTabs.addEventListener("click", (event) => {
  currentFilter = event.target.dataset.filter;
  renderTasks(currentFilter);
});

const assignments = [];
const assessements = [];

const nameInput = document.getElementById("name");
const typeSelect = document.getElementById("type");
const classSelect = document.getElementById("class");
const dateInput = document.getElementById("date");
const timeInput = document.getElementById("time");
const descInput = document.getElementById("desc");
const submitBtn = document.getElementById("submitBtn");

submitBtn.addEventListener("click", () => {
  const name = nameInput.value;
  const type = typeSelect.value;
  const className = classSelect.value;
  const date = dateInput.value;
  const time = timeInput.value;
  const description = descInput.value;

  if (name === "") {
    alert("Please enter name.");
    nameInput.focus();
    return false;
  }

  if (type === "") {
    alert("Please enter a type");
    typeSelect.focus();
    return false;
  }

  if (className === "") {
    alert("Please enter a class");
    classSelect.focus();
    return false;
  }
  if (date === "") {
    alert("Please enter a date");
    dateInput.focus();
    return false;
  }

  const object = {
    name: name,
    type: type,
    class: className,
    date: date,
    time: time,
    description: description,
  };

  if (type === "assessement") {
    assessements.push(object);
  } else {
    assignments.push(object);
  }

  renderTasks(currentFilter);
  modal.style.display = "none";
});

//V1-Add task Display tasks Delete task Edit task, Dynamic Classes
//V2-Filter, sort logic by due date or class
//v3- Notifications based on due dates
//v4-Add ai for course outline upload, gen assignments based on txt

const form = document.getElementById("task-form");
const taskInput = document.getElementById("task-input");
const datetimeInput = document.getElementById("datetime-input");
const taskList = document.getElementById("task-list");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  addTask(taskInput.value, datetimeInput.value);
  taskInput.value = "";
  datetimeInput.value = "";
});

function addTask(text, dateTime) {
  const card = document.createElement("div");
  card.className = "task-card";

  const info = document.createElement("div");
  info.className = "task-info";

  const taskText = document.createElement("p");
  taskText.textContent = text;

  const time = document.createElement("small");
  time.textContent = new Date(dateTime).toLocaleString();

  info.appendChild(taskText);
  info.appendChild(time);

  const actions = document.createElement("div");
  actions.className = "actions";

  const completeBtn = document.createElement("button");
  completeBtn.innerHTML = "✅";
  completeBtn.onclick = () => card.classList.toggle("completed");

  const editBtn = document.createElement("button");
  editBtn.innerHTML = "✏️";
  editBtn.onclick = () => {
    const newText = prompt("Edit task:", taskText.textContent);
    if (newText) taskText.textContent = newText;
  };

  const deleteBtn = document.createElement("button");
  deleteBtn.innerHTML = "🗑️";
  deleteBtn.onclick = () => card.remove();

  actions.append(completeBtn, editBtn, deleteBtn);

  card.append(info, actions);
  taskList.appendChild(card);
}

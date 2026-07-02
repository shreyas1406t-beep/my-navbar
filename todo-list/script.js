class todolist {
  constructor() {
    this.tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  }
  save() {
    localStorage.setItem("tasks", JSON.stringify(this.tasks));
  }
  addTask(task) {
    if (task.trim() === "") {
      alert("Please enter a task");
      return;
    }
    this.tasks.push({ task: task, completed: false })
    this.save();
    this.render();
  }
  removeTask(index) {
    this.tasks.splice(index, 1);
    this.save();
    this.render();
  }
  toggleComplete(index) {
    this.tasks[index].completed = !this.tasks[index].completed;
    this.save();
    this.render();
  }
  render() {
    const tasklist = document.getElementById("tasklist");
    tasklist.innerHTML = '';
    this.tasks.forEach((task, index) => {
      const li = document.createElement("li");
      li.textContent = task.task;
      if (task.completed) {
        li.classList.add("completed");
      }
      li.addEventListener("click", () => {
        this.toggleComplete(index);
      })
      const removeButton = document.createElement("button");
      removeButton.textContent = "remove";
      removeButton.addEventListener("click", (e) => {
        e.stopPropagation();
        this.removeTask(index);
      })
      li.appendChild(removeButton);
      tasklist.appendChild(li);
    })
  }
}

const task = new todolist();
task.render();

function addTask() {
  const input = document.getElementById("taskinput");
  task.addTask(input.value);
  input.value = "";
}

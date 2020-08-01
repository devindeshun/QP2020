// THIS IS WHAT YOU EDIT
// THIS IS WHAT YOU EDIT
// THIS IS WHAT YOU EDIT
let localNum = "tasks1";
// THIS IS WHAT YOU EDIT
// THIS IS WHAT YOU EDIT
// THIS IS WHAT YOU EDIT

const form = document.querySelector("#sou-sou-form");
const saveBtn = document.querySelector(".save-form");
const clearBtn = document.querySelector(".clear-form");
const formInput = document.querySelectorAll(".name");

let loadEventListeners = () => {
  document.addEventListener("DOMContentLoaded", getTasks);
  form.addEventListener("submit", addTask);
  clearBtn.addEventListener("click", clearTasks);
};

let getTasks = () => {
  // instantiate the variable tasks to be used to get tasks from local storage
  let tasks;
  localStorage.getItem(localNum) === null
    ? // If there is no such thing as tasks in local storage set tasks to an empty array
      (tasks = [])
    : // else get the key item pair of "tasks" and parse it into an array, assign it to tasks
      (tasks = JSON.parse(localStorage.getItem(localNum)));

    for(let i = 0; i < formInput.length; i++){
        if (tasks[i].value !== "") {
            formInput[i].value = tasks[i];
        }
    }
};

let storeTaskInLocalStorage = (task) => {
  // task is the value of the input that is submited
  // instantiate the variable tasks to be used to store new tasks into local storage
  let tasks;
  localStorage.getItem(localNum) === null
    ? // If there is no such thing as tasks in local storage set tasks to an empty array
      (tasks = [])
    : // else get the key item pair of "tasks" and parse it into an array, assign it to tasks
      (tasks = JSON.parse(localStorage.getItem(localNum)));
  // push the new task to the tasks array
  tasks.push(task);
  // change the tasks array back into a string and set that string equal to the "tasks" key.
  localStorage.setItem(localNum, JSON.stringify(tasks));
};

let removeTaskFromLocalStorage = (taskItem) => {
  localStorage.getItem(localNum) === null
    ? // If there is no such thing as tasks in local storage set tasks to an empty array
      (tasks = [])
    : // else get the key item pair of "tasks" and parse it into an array, assign it to tasks
      (tasks = JSON.parse(localStorage.getItem(localNum)));

  tasks.forEach((task, index) => {
    // Loops through the array and removes the selected task
    if (taskItem.textContent === task) {
      tasks.slice(index, 1);
    }
  });
  // Returns the tasks to a string and sets it back to local storage
  localStorage.setItem(localNum, JSON.stringify(tasks));
};

let clearTasksFromLocalStorage = () => {
  localStorage.clear(); // Clears the local storage, simply.
};

let addTask = (e) => {
    localStorage.clear();
    for(let i = 0; i < formInput.length; i++){
        storeTaskInLocalStorage(formInput[i].value);
    }
    e.preventDefault();
};

let clearTasks = () => {
    for(let i = 0; i < formInput.length; i++){
        formInput[i].value = "";
    }
  clearTasksFromLocalStorage();
};

loadEventListeners();

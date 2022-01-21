// Arrays to keep track of each task's state

// const taskTitles = [];
// const taskComplete = [];
// const taskDescription = [];

// Create a new task by adding to the arrays
// A new task will be created as incomplete
const newTask = (title, description) => {
  const task = {
    title,
    description,
    complete: false,

    logTaskState: function() {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    },

    markComplete: function() {
      this.complete = true;
    }

  };

  return task;
};

// // Mark a task as complete by setting the task's status in the `taskComplete` array to `true`


// Print the state of a task to the console in a nice readable way


// DRIVER CODE BELOW

const task1 = newTask('Clean Cat Litter', 'Take all the 💩 out of the litter box ');
const task2 = newTask('Do laundry', 'Do it its getting 🐟 in here');
const tasks = [task1, task2];

task1.title;
task1.logTaskState(); // Clean Cat Litter has not been completed
task1.markComplete();
task1.logTaskState(); // Clean Cat Litter has been completed

console.log(tasks);

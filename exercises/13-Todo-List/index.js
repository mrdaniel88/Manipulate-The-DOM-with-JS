// Your code here
let newTask = document.getElementById("addToDo");
let taskList = document.querySelector("ul");

newTask.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        let childTask = document.createElement("li");
        childTask.textContent = newTask.value;
        taskList.appendChild(childTask);
        newTask.value = '';
    }

})

let deleteTask = document.querySelectorAll("li");
for (let i = 0; i < deleteTask.length; i++) {
    deleteTask[i].addEventListener('click', function() {
        this.classList.toggle("active");
    });
    deleteTask[i].querySelector("i").addEventListener('click', function() {
        this.closest("li").remove()
    });
}
// deleteTask.addEventListener('click', function(event) {
//     if (event.target.deleteTask) {
//         taskList.removeChild(deleteTask);
//     }
//     event.stopPropagation();
// })
const inputBox = document.querySelector("#input-box");
const addBtn = document.querySelector(".add-btn");
const listContainer = document.querySelector(".list-container");

addBtn.addEventListener("click",addTask);

function addTask() {
    if(inputBox.value === "") {
        alert("You must write something")
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li)
        let span = document.createElement("span");
        span.innerHTML = "<img src='images/cross.png'>"
        li.appendChild(span)
    } 
    deleteBtn.className = "visible";
    inputBox.value = ""
}
function addTodo(event){
    if(event.keyCode === 13){
        addTask()
    }
}
inputBox.addEventListener("keypress",addTodo);
listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked")
    } else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
})
let deleteBtn = document.querySelector(".delete-all");

deleteBtn.addEventListener("click", deleteList)

function deleteList() {
    listContainer.remove();
    deleteBtn.className = "delete-all";
}

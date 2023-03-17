let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
    //your code here
    let list = document.getElementById("myList");
    let child = document.createElement("li");
    child.appendChild(document.createTextNode("Forth element"));
    list.appendChild(child);

});
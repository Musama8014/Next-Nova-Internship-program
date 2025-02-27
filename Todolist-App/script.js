document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("form");
    const input = document.getElementById("input");
    const todosList = document.getElementById("todos");
    const clearAllBtn = document.querySelector(".button");

    // Add new todo item
    form.addEventListener("submit", (e) => {
        e.preventDefault(); 

        const todoText = input.value.trim();
        if (todoText === "") return; 

        const li = document.createElement("li");
        li.textContent = todoText;
        todosList.appendChild(li); 
        input.value = ""; 
    });

    clearAllBtn.addEventListener("click", () => {
        todosList.innerHTML = ""; 
    });
});




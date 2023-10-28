const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");
let fetchData = ()=>{
   notesContainer.innerHTML = localStorage.getItem("data");
}
fetchData();
let saveData = ()=>{
    localStorage.setItem("data" , notesContainer.innerHTML)
}
createBtn.addEventListener("click" , ()=>{
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable" , "true");
    img.src = "./images/delete.png";
    notesContainer.appendChild(inputBox).appendChild(img);
})
saveData();
notesContainer.addEventListener("click" , (e)=>{
    if(e.target.tagName == "IMG"){
        e.target.parentElement.remove();
        saveData();
    }else if(e.target.tagName === "P"){
        notes = document.querySelectorAll(".input-box");
        notes.forEach(nte => {
            nte.onkeyup = ()=>{
                saveData();
            }
            
        })
    }
    
})

document.addEventListener("keydown" , event =>{
    if (event.key === "Enter"){
        event.preventDefault();
        document.execCommand('insertHTML', false, '<br>');
    }
})
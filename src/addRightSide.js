export const addRightSide= (()=>{
    let right = document.querySelector('.right-side');
    right.innerHTML="";
    let newChild = document.createElement('div');
    newChild.classList.add("todo");
    newChild.innerText = "Todo";
    right.appendChild(newChild);
})
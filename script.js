let item = document.getElementById('item');
let todobox= document.getElementById('todobox');
let addToDoBtn = document.getElementById('addToDoBtn');


addToDoBtn.addEventListener('click',function(){
    if(item.value == ""){
        return;
    }
    var task = document.createElement('li') ;
    task.innerText = item.value;
    todobox.appendChild(task);
    item.value = "";


    task.addEventListener('click',function(){
        task.style.textDecoration = "line-through";
    })

    task.addEventListener('dblclick',function(){
        todobox.removeChild(task);
    })
})
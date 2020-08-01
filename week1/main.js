//設定todo資料 陣列 
let todoListArray = [];
const submitForm = document.querySelector('.add');
const addButton = document.querySelector('.add-todo');
const todoList = document.querySelector('.todos');

//渲染畫面
function render(){
    var str = '';
    todoListArray.forEach ( function (item){
        console.log(item);
        return str +=`<li>
        <input type="checkbox" id="${item.id}">
        <label for="${item.id}">
          <span class="check"></span>
          ${item.name}
        </label>
        <i class="fas fa-trash delete"></i>
      </li>`;
    })
    todoList.innerHTML += str;
}

//新增 todolist 事項 到 陣列中
function createtodo(todo){
    var timeStamp = Math.floor(Date.now());
    var todotemplate = {
        name:'',
        id:'', 
        complate:'',
    }
    todotemplate.name = todo;
    todotemplate.id = timeStamp;
    todotemplate.complate = false;
    todoListArray.push(todotemplate);
    render();
}

//新增代辦事項
function addTodos(e) {
  e.preventDefault();
  //判斷新增的字串是否>0
  const todo = submitForm.add.value.trim();
  if (todo.length) {
    createtodo(todo);
    submitForm.reset();
  }
  else{
      alert("代辦事項請勿為空值！");
  }
}


function deleteTodos(e) {
  if (e.target.classList.contains('delete')) {
    e.target.parentElement.remove();
  }
}

//按下新增 或 ENTER 時 呼叫 addTodos 去新增待辦事項
submitForm.addEventListener('submit', addTodos);
addButton.addEventListener('click', addTodos);
//按下刪除 按鈕 時 刪除該父項目li
todoList.addEventListener('click', deleteTodos);
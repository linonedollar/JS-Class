//設定todo資料 陣列 
let todoListArray = [];
var submitForm    = document.querySelector('.add');
var addButton     = document.querySelector('.add-todo');
var todoList      = document.querySelector('.todos');
var btnClear      = document.querySelector('.clear');
var total         = document.querySelector('.num');

//渲染畫面
function render(){
    var str = '';
    todoListArray.forEach ( function (item){
        return str +=`<li>
        <input type="checkbox" id="${item.id}">
        <label for="${item.id}">
          <span class="check"></span>
          ${item.name}
        </label>
        <i class="fas fa-trash delete"></i>
      </li>`;
    })
    todoList.innerHTML = str;
    total.innerHTML = todoListArray.length;
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
    todoListArray.unshift(todotemplate);
    render();
}

//新增代辦事項
function addTodos(e) {
  e.preventDefault();
  //判斷新增的字串是否為空 或 空值
  const todo = submitForm.add.value.trim();
  if (todo.length) {
    createtodo(todo);
    //重置輸入框
    submitForm.reset();
  }
  else{
      alert("代辦事項請勿為空值！");
  }
}

//刪除待辦事項
function deleteTodos(e) {
  if (e.target.classList.contains('delete')) {
    e.target.parentElement.remove();
  }
}

//刪除全部
function clearAll(e){
  e.preventDefault();
  todoListArray = [];
  render();
}

//按下新增 或 ENTER 時 呼叫 addTodos 去新增待辦事項
submitForm.addEventListener('submit', addTodos);
addButton.addEventListener('click', addTodos);
//按下刪除 按鈕 時 刪除該父項目li
todoList.addEventListener('click', deleteTodos);
//按下刪除 按鈕 時 刪除該父項目li
btnClear.addEventListener('click', clearAll);

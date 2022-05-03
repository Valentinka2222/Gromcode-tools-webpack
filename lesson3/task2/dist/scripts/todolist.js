import { onCreateTask } from './createTask.js';
import { deleteTask } from './tasksGateway.js';
import { onToggleTask } from './updateTask.js';
export var initTodoListHandlers = function initTodoListHandlers() {
  var createBtnElem = document.querySelector('.create-task-btn');
  createBtnElem.addEventListener('click', onCreateTask);
  var clickList = document.querySelector('.list');
  clickList.addEventListener('click', onListClick);
};

var onListClick = function onListClick(e) {
  var todoListElem = document.querySelector('.list');
  todoListElem.addEventListener('click', onToggleTask);
  var taskId = e.target.dataset.id;
  var deleteBtnElem = document.querySelector('.list__item__delete-btn');
  var listItemElem = document.querySelector('.list__item');
  deleteTask(taskId);

  if (taskId === undefined) {
    return listItemElem.remove();
  }

  deleteBtnElem.addEventListener('click', deleteTask);
};

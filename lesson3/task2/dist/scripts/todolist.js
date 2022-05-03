import { onCreateTask } from './createTask.js';
import { deleteTask } from './tasksGateway.js';
import { onToggleTask } from './updateTask.js';
export const initTodoListHandlers = () => {
  const createBtnElem = document.querySelector('.create-task-btn');
  createBtnElem.addEventListener('click', onCreateTask);
  const clickList = document.querySelector('.list');
  clickList.addEventListener('click', onListClick);
};

const onListClick = e => {
  const todoListElem = document.querySelector('.list');
  todoListElem.addEventListener('click', onToggleTask);
  const taskId = e.target.dataset.id;
  const deleteBtnElem = document.querySelector('.list__item__delete-btn');
  const listItemElem = document.querySelector('.list__item');
  deleteTask(taskId);

  if (taskId === undefined) {
    return listItemElem.remove();
  }

  deleteBtnElem.addEventListener('click', deleteTask);
};
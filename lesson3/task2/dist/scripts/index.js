import { initTodoListHandlers } from './todolist.js';
import { renderTasks } from './renderer.js';
document.addEventListener('DOMContentLoaded', function () {
  renderTasks();
  initTodoListHandlers();
});

var onStorageChange = function onStorageChange(e) {
  if (e.key === 'tasksList') {
    renderTasks();
  }
};

window.addEventListener('storage', onStorageChange);

import { initTodoListHandlers } from './list/todolist.js';

import { renderTasks } from './list/renderer.js';

import './index.scss';

document.addEventListener('DOMContentLoaded', () => {
  renderTasks();
  initTodoListHandlers();
});
const onStorageChange = e => {
  if (e.key === 'tasksList') {
    renderTasks();
  }
};
window.addEventListener('storage', onStorageChange);

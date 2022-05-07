"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initTodoListHandlers = void 0;

var _createTask = require("./createTask.js");

var _tasksGateway = require("./tasksGateway.js");

var _updateTask = require("./updateTask.js");

var initTodoListHandlers = function initTodoListHandlers() {
  var createBtnElem = document.querySelector('.create-task-btn');
  createBtnElem.addEventListener('click', _createTask.onCreateTask);
  var clickList = document.querySelector('.list');
  clickList.addEventListener('click', onListClick);
};

exports.initTodoListHandlers = initTodoListHandlers;

var onListClick = function onListClick(e) {
  var todoListElem = document.querySelector('.list');
  todoListElem.addEventListener('click', _updateTask.onToggleTask);
  var taskId = e.target.dataset.id;
  var deleteBtnElem = document.querySelector('.list__item__delete-btn');
  var listItemElem = document.querySelector('.list__item');
  (0, _tasksGateway.deleteTask)(taskId);

  if (taskId === undefined) {
    return listItemElem.remove();
  }

  deleteBtnElem.addEventListener('click', _tasksGateway.deleteTask);
};
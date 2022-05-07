"use strict";

var _todolist = require("./todolist.js");

var _renderer = require("./renderer.js");

document.addEventListener('DOMContentLoaded', function () {
  (0, _renderer.renderTasks)();
  (0, _todolist.initTodoListHandlers)();
});

var onStorageChange = function onStorageChange(e) {
  if (e.key === 'tasksList') {
    (0, _renderer.renderTasks)();
  }
};

window.addEventListener('storage', onStorageChange);
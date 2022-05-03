export var setItem = function setItem(key, value) {
  return localStorage.setItem(key, JSON.stringify(value));
};
export var getItem = function getItem(key) {
  return JSON.parse(localStorage.getItem(key));
};
localStorage.clear();

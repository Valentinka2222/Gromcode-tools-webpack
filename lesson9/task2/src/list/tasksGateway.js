const baseUrl = 'https://62641c97a6adc673188dbf69.mockapi.io/tasklist/api/v1/task';

export const getTasksList = () => fetch(baseUrl).then((response) => response
  .json()
  .then((tasks) => tasks.map((task) => ({ ...task, id: task.id }))));

export const createTask = (taskData) => fetch(baseUrl, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
  },
  body: JSON.stringify(taskData),
});

export const updateTask = (taskId, updatedTaskData) => fetch(`${baseUrl}/${taskId}`, {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
  },
  body: JSON.stringify(updatedTaskData),
});

export const deleteTask = (taskId) => fetch(`${baseUrl}/${taskId}`, {
  method: 'DELETE',
});

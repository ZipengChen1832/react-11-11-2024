const TODOS_API = "http://localhost:3001/todos";

async function fetchTodos() {
  return fetch(TODOS_API).then((res) => res.json());
}

async function addTodo(newTodo) {
  return fetch(TODOS_API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newTodo),
  }).then((res) => res.json());
}

async function deleteTodo(id) {
  return fetch(`${TODOS_API}/${id}`, {
    method: "DELETE",
  }).then((res) => res.json());
}

async function toggleTodo(id, completed) {
  return fetch(`${TODOS_API}/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ completed }),
  });
}

const todoAPI = {
  fetchTodos,
  addTodo,
  deleteTodo,
  toggleTodo,
};

export default todoAPI;

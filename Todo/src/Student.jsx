import { useState } from "react";

function TodoApp() {
    const [task, setTask] = useState("");
    const [todos, setTodos] = useState([]);

    const addTask = (event) => {
        event.preventDefault();
        const trimmed = task.trim();
        if (!trimmed) return;

        setTodos((currentTodos) => [
            ...currentTodos,
            { id: Date.now(), text: trimmed, done: false },
        ]);
        setTask("");
    };

    const toggleTodo = (id) => {
        setTodos((currentTodos) =>
            currentTodos.map((todo) =>
                todo.id === id ? { ...todo, done: !todo.done } : todo,
            ),
        );
    };

    const deleteTodo = (id) => {
        setTodos((currentTodos) => currentTodos.filter((todo) => todo.id !== id));
    };

    return (
        <div className="todo-app">
            <h1>Todo App</h1>
            <form onSubmit={addTask}>
                <input
                    type="text"
                    value={task}
                    onChange={(event) => setTask(event.target.value)}
                    placeholder="Add a new task"
                />
                <button type="submit">Add</button>
            </form>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        <label>
                            <input
                                type="checkbox"
                                checked={todo.done}
                                onChange={() => toggleTodo(todo.id)}
                            />
                            <span style={{ textDecoration: todo.done ? "line-through" : "none" }}>
                                {todo.text}
                            </span>
                        </label>
                        <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoApp;

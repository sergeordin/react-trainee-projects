import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import TodoForm from './components/Todos/TodoForm';
import TodoList from './components/Todos/TodoList';
import TodosActions from './components/Todos/TodosActions';

function App() {
    const [todos, setTodos] = useState([]);

    const addTodoHandler = (text) => {
        const newTodo = {
            id: uuidv4(),
            text,
            isCompleted: false,
        };
        setTodos([...todos, newTodo]);

        // localStorage.setItem(
        //     JSON.stringify(newTodo.id),
        //     JSON.stringify(newTodo)
        // );
    };

    const deleteTodoHandler = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));

        //       localStorage.removeItem(JSON.stringify(id));
    };

    const toggleTodoHandler = (id) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id
                    ? { ...todo, isCompleted: !todo.isCompleted }
                    : { ...todo }
            )
        );
    };

    const resetTodosHandler = () => {
        setTodos([]);
    };

    const deleteCompletedTodosHandler = () => {
        setTodos(todos.filter((todo) => !todo.isCompleted));
    };

    const completedTodosCount = todos.filter((todo) => todo.isCompleted).length;

    return (
        <div className="App">
            <h1>Todo App</h1>
            <TodoForm addTodo={addTodoHandler} />
            {!!todos.length && (
                <TodosActions
                    completedTodosExist={!!completedTodosCount}
                    resetTodos={resetTodosHandler}
                    deleteCompletedTodos={deleteCompletedTodosHandler}
                />
            )}
            <TodoList
                todos={todos}
                deleteTodo={deleteTodoHandler}
                toggleTodo={toggleTodoHandler}
            />
            {completedTodosCount > 0 && (
                <h2>{`You have completed ${completedTodosCount} ${
                    completedTodosCount > 1 ? 'todos' : 'todo'
                }`}</h2>
            )}
        </div>
    );
}

export default App;

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTodoAction, deleteTodoAction } from '../redux';

export const TodoList: React.FC = () => {
    const todos = useSelector((state: any) => state.todos);
    const dispatch = useDispatch();
    const toggleTodo = (todoId: any) => dispatch(toggleTodoAction(todoId))
    const deleteTodo = (todoId: any) => dispatch(deleteTodoAction(todoId))
	return (
        <ul className="todo-list">
            {todos.map((todo: any) => (
                <li key={todo.id}>
                    <input type="checkbox" checked={todo.complete} onChange={toggleTodo.bind(null, todo.id)} />
                    <span className={todo.complete ? 'complete': 'null'}>{todo.name}</span>
                    <span className="delete-button" onClick={deleteTodo.bind(null, todo.id)}>X</span>
                </li>
            ))}
        </ul>
	);
}
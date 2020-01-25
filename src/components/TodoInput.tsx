import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodoAction } from '../redux';
import uuid from 'uuid/v4';

export const TodoInput: React.FC = () => {
    const [todo, setTodo] = useState('');

    const dispatch = useDispatch();
    const addTodo = (todo: any) => dispatch(addTodoAction(todo))

    const onChange = (event: any) => {
        setTodo(event.target.value);
    }
    const onSubmit = (event: any) => {
        event.preventDefault();
        if(todo.trim() === '' ) return;

        addTodo({
            id: uuid(),
            name: todo,
            complete: false
        });

        setTodo('');
    }
	return (
        <form onSubmit={onSubmit}>
            <div className="form-div">
                <input type="text" name="todo" placeholder="Add a todo" value={todo} onChange={onChange}/>
                <button type="submit">Add Todo</button>
            </div>
        </form>
	);
}
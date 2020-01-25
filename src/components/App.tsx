import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../redux';

import { TodoInput } from './TodoInput';
import { TodoList } from './TodoList';

export const App: React.FC = () => {
	return (
		<Provider store={store}>
			<div className="main">
				<TodoInput/>
				<TodoList />
			</div>
		</Provider>
	);
}
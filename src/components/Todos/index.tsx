import React from 'react';
import { TodoForm, TodoList } from './components';

const Todos = () => {
    return (
        <div>
            <h1>ToDo Applicatiopn</h1>
            <TodoForm />
            <TodoList />
        </div>
    );
};

export default Todos;
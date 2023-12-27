import React, { useContext, useEffect } from 'react';
import Todos from '../../components/Todos';
import { todosContext } from '../../context';

const TodoListPage = () => {
    const { getTodos } = useContext(todosContext)

    useEffect(() => {
        getTodos?.()
    }, [])
    return (
        <div>
            <Todos />
        </div>
    );
};

export default TodoListPage;
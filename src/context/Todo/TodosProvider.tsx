import React, { useCallback, useReducer } from 'react';
import { createContext } from 'react';
import initialState from '../../components/Todos/initialState';
import reducer, { GET_TODOS_REQUEST, GET_TODOS_SUCCESS } from '../../components/Todos/reducer';
import axios from 'axios';

const APL_URL = "http://localhost:4000"

//dispatch(action) => action => reducer => store

export type TTodosContext = {
    todos: any[];
    loading: boolean;
    isEdit: boolean;
    error: unknown;
}

export type TTodosActions = {
    getTodos?: () => void
}

export const todosContext = createContext<TTodosContext & TTodosActions>(initialState)

const TodosProvider = ({ children }: React.PropsWithChildren) => {

    const [todosStore, dispatch] = useReducer(reducer, initialState)

    const getTodos = useCallback(async () => {
        dispatch({
            type: GET_TODOS_REQUEST
        })

        const { data } = await axios(`${APL_URL}/todos`)
        dispatch({
            type: GET_TODOS_SUCCESS,
            payload: data
        })

    }, [])

    const value: TTodosContext & TTodosActions = {
        getTodos,
        ...todosStore
    }

    return (
        <todosContext.Provider
            value={value}
        >
            {children}
        </todosContext.Provider>
    );
};

export default TodosProvider;
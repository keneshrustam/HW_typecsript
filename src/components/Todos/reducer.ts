import { TTodosContext } from "../../context/Todo/TodosProvider";

type TAction = {
    type: string;
    payload?: any;
}

export const  GET_TODOS_REQUEST = "GET_TODOS_REQUEST"
export const  GET_TODOS_SUCCESS = "GET_TODOS_SUCCESS"
export const  GET_TODOS_FAILURE = "GET_TODOS_FAILURE"

export default (state: TTodosContext, action: TAction): TTodosContext => {
    switch(action.type) {
        case "GET_TODOS_REQUEST": {
            return {
                ...state,
                loading: true
            }
        }
        case "GET_TODOS_SUCCESS": {
            return {
                ...state,
                loading: false,
                todos: action.payload
            }
        }
        case "GET_TODOS_FAILURE": {
            return {
                ...state,
                error: action.payload,
                loading: false
            }
        }
        default: return state;
    }
}
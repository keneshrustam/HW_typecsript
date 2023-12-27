import { useContext } from "react";
import { todosContext } from "../../../../context";

const TodoList = () => {
    const { todos, loading } = useContext(todosContext)

    if (loading) return <div>Loading...</div>

    return todos.length ? (
        <ul style={{position:'absolute', left:"50%", transform:"translate(-50%)", listStyle:"none", width:"40%", padding:"1%",textAlign:"center", boxShadow:"0px 0px 3px 0.5px black", borderRadius:"22px", backgroundColor:" rgba(255, 255, 255, 0.2)", fontSize:"100%", textAlignLast:"center"}}>
            {todos.map(({ title }) => (
                <li>{ title }</li>
            ))}
        </ul>
    ) : (
        <h2> u vas netu zadach</h2>
    )
};

export default TodoList
;
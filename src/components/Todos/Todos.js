import {Todo} from "./Todo";

const Todos = ({todos}) => {

    return (
        <div>
            {todos.map(todo=><Todo key={todo.id} todo={todo}/>)}
        </div>
    );
};

export {Todos};
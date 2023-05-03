import {Todo} from "./Todo";

const Todos = ({todos}) => {

    return (
        <div className='block'>
            {todos.map(todo=><Todo key={todo.id} todo={todo}/>)}
        </div>
    );
};

export {Todos};
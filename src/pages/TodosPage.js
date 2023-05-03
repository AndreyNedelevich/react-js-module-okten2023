import React, {useEffect} from 'react';
import {useFetching} from "../hooks/useFetching";
import {todoService} from "../service/todo.service";
import {placeholderActions} from "../reducers/placeholder.reducer";
import {useDispatch, useSelector} from "react-redux";
import Error from "./Error";
import Loader from "../components/Loader/Loader";
import {Todos} from "../components/Todos/Todos";


const TodosPage = () => {

    const dispatch = useDispatch()
    const arrTodos = useSelector(state => state.placeholderReducer.todos)

    const [fetch, isLoading, ErrorMessage] = useFetching(
        async () => {
            const response = await todoService.getAll()
            dispatch(placeholderActions.set_AllTodos(response.data));
        }
    );

    console.log(arrTodos);

    useEffect(() => {
        fetch()
    }, []);


    return (
        <div style={{margin: 15}} >
            <h1>Todos</h1>
            {isLoading ?
                <Loader/>
                :
                <React.Fragment>
                    {ErrorMessage ?
                        <Error error={ErrorMessage}/> :
                        <Todos todos={arrTodos}/>
                    }
                </React.Fragment>
            }
        </div>
    );
};


export default TodosPage;
import { useDispatch, useSelector } from "react-redux";
import { handleFetch } from "../../utils";
import { displayTodo } from "../../store/actions/index";
import { useState, useEffect } from 'react';

function TodoList () {
    const dispatch = useDispatch();
    // const todo = useSelector(state => state.todo.todo);
    const url = 'https://jsonplaceholder.typicode.com/todos';
    const [todo, setTodo] = useState([]);

    useEffect(() => {
        dispatch(displayTodo(todo));
    }, [todo]);

    useEffect(() => {
        const getTodo = async () => {
            setTodo(await handleFetch(url));
        }

        getTodo();
    }, []);

    return (
        <div className="content">
            {todo.length ? (
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Completed</th>
                        </tr>
                    </thead>
                   {todo.map((todo) => {
                        return (
                            <tbody key={todo.id}>
                                <tr>
                                    <td>{todo.id}</td>
                                    <td>{todo.title}</td>
                                    {todo.completed ?
                                        <td className="completed"></td>
                                    :
                                        <td className="not-completed"></td>
                                    }
                                </tr>
                            </tbody>
                        )
                    })}
                </table>
            ) : (
                <div className='loading'></div>
            )}
        </div>
    )
}

export default TodoList;
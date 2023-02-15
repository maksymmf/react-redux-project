import { handleFetch } from "../../utils";
import { useState, useEffect } from 'react';

function TodoList () {
    const [todo, setTodo] = useState([]);

    useEffect(() => {
        const getTodo = async () => {
            setTodo(await handleFetch(`${process.env.REACT_APP_URL}todos`));
        }

        getTodo();
    }, []);

    const handleTodoToggle = (id) => {
        const updatedTodo = todo.map(todo => {
            if (todo.id === id) {
                return {
                    ...todo,
                    completed: !todo.completed
                }
            }
            return todo;
        });

        setTodo(updatedTodo)
    }

    return (
        <div className="content">
            {todo.length > 0 ? (
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
                                        <td className="completed" role="button" 
                                        onClick={() => handleTodoToggle(todo.id)}></td>
                                    :
                                        <td className="not-completed" role="button" 
                                        onClick={() => handleTodoToggle(todo.id)}></td>
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
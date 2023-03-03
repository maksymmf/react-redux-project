import { handleFetch } from "../../utils";
import { useState, useEffect } from 'react';

function TodoList () {
    const [todo, setTodo] = useState([]);

    useEffect(() => {
        const getTodo = async () => {
            const allTodos = await handleFetch(`${process.env.REACT_APP_URL}todos`);

            setTodo(allTodos.slice(0, 10));
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

        setTodo(updatedTodo);
    }

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
                                    {todo.completed ? (
                                        <td 
                                            className="todo-completed" 
                                            role="button" 
                                            onClick={() => handleTodoToggle(todo.id)}
                                        ></td>
                                    ) : (
                                        <td 
                                            className="todo-not-completed" 
                                            role="button" 
                                            onClick={() => handleTodoToggle(todo.id)}
                                        ></td>
                                    )}
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
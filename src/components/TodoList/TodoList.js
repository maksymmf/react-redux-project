import { useDispatch, useSelector } from "react-redux";
import { handleFetchTodo } from "../../asyncActions/todo";

function TodoList () {
    const dispatch = useDispatch();
    const todo = useSelector(state => state.todo.todo);

    function displayTodoList () {
        dispatch(handleFetchTodo());
    }

    return (
        <div className="content">
            {displayTodoList()}
            {todo.length > 0 ?
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Completed</th>
                        </tr>
                    </thead>
                   {todo.map(todo =>
                   <tbody>
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
                   )} 
                </table>
            :
                <div className='error'>
                    <h3>No posts</h3>
                </div>
            }
        </div>
    )
}

export default TodoList;
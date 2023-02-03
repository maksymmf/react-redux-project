import { useEffect } from "react";
import { displayTodo } from "../store/actions/index";

export function handleFetchTodo () {
    return function (dispatch) {
        useEffect(() => {
            fetch ('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => dispatch(displayTodo(json)))
        }, [])
    }
}
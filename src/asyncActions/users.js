import { useEffect } from "react";
import { displayUsers } from "../store/actions/index";

export function handleFetchUsers () {
    return function (dispatch) {
        useEffect(() => {
            fetch ('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => dispatch(displayUsers(json)))
        }, [])
    }
}
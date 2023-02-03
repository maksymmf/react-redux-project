import { useEffect } from "react";
import { displayPosts } from "../store/actions/index";

export function handleFetchPosts () {
    return function (dispatch) {
        useEffect(() => {
            fetch ('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => dispatch(displayPosts(json)))
        }, [])
    }
}
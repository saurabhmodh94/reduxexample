import { FETCH_POSTS, NEW_POSTS } from "./types";

export function fetchPosts() {

    return function (dispatch) {
        // Fetch API
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(posts => dispatch({
                type: FETCH_POSTS,
                data: posts
            }));
    }
}
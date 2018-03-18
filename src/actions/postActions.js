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

export function createPost(postData) {

    return function (dispatch) {
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(postData)
        })
            .then(res => res.json())
            .then(post => dispatch({
                type: NEW_POSTS,
                data: post
            }))
    }
}
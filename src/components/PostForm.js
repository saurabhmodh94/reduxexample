import React, { Component } from 'react'

class PostForm extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>
                <h1>Add Post</h1>
                <form>
                    <div>
                        <label>Title:</label>
                        <br />
                        <input type="text" name="title" />
                    </div>
                    <br />

                    <div>
                        <label>Body:</label>
                        <br />
                        <input type="textarea" name="body" />
                    </div>
                    <br />
                    <div>
                        <input type="submit" name="Submit" />
                    </div>
                </form>
            </div>
        )
    }
}

export default PostForm;
import React, { Component } from 'react'

class PostForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            'title': '',
            'body': ''
        };
    }
    render() {
        return (
            <div>
                <h1>Add Post</h1>
                <form>
                    <div>
                        <label>Title:</label>
                        <br />
                        <input type="text" name="title" value={this.state.title} />
                    </div>
                    <br />

                    <div>
                        <label>Body:</label>
                        <br />
                        <input type="text" name="body" value={this.state.body} />
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
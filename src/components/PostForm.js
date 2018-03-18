import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import { createPost } from "./../actions/postActions";
class PostForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            'title': '',
            'body': ''
        };
        // this.onChange = this.onChange.bind(this);
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        const post = {
            'title': this.state.title,
            'body': this.state.body
        }
        // Call POST API
        this.props.createPost(post);
    }
    render() {
        return (
            <div>
                <h1>Add Post</h1>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <label>Title:</label>
                        <br />
                        <input type="text" name="title" value={this.state.title} onChange={this.onChange} />
                    </div>
                    <br />

                    <div>
                        <label>Body:</label>
                        <br />
                        <input type="text" name="body" value={this.state.body} onChange={this.onChange} />
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

PostForm.propTypes = {
    createPost: PropTypes.func.isRequired
}
export default connect(null, { createPost })(PostForm);
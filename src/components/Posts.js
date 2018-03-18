import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchPosts } from './../actions/postActions';
class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      "posts": []
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.newItem) {
      this.props.posts.unshift(nextProps.newItem)
    }
  }
  componentWillMount() {
    this.props.fetchPosts();
  }
  render() {
    const postItems = this.props.posts.map(post => (
      <div key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>

    ));
    return (
      <div>
        <h1>Posts</h1>
        {postItems}
      </div>
    )
  }
}
Posts.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
  newItem: PropTypes.object
}
const mapStateToProps = state => ({
  posts: state.posts.items,
  newItem: state.posts.item
})
export default connect(mapStateToProps, { fetchPosts })(Posts);
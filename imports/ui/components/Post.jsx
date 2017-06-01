import React, { Component, PropTypes } from 'react';
import BaseComponent from './BaseComponent.jsx';

// Task component - represents a single todo item
class Post extends BaseComponent {
  render() {
    return (
      <li>{this.props.post.resumenPost}</li>
    );
  }
}
 
Post.propTypes = {
  // This component gets the task to display through a React prop.
  // We can use propTypes to indicate it is required
  post: PropTypes.object.isRequired,
};


export default Post;
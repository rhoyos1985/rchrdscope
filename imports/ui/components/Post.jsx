import React, { Component, PropTypes } from 'react';
import BaseComponent from './BaseComponent.jsx';

// Task component - represents a single todo item
class Post extends BaseComponent {
	render() {
		return (
			<div className="col-sm-6 col-md-6">
				<div className="thumbnail thumbnail_post">
					<img className="thumbnail_img" src={this.props.post.img} alt="Imagen" />
					<div className="caption">
						<h1>{this.props.post.title}</h1>
						<ul className="caption_info">
							<li className="caption_info_item">
								<a href="#">
									<span className="glyphicon glyphicon-user caption_info_item_icon"></span>
									<span>{this.props.post.user}</span>
								</a>
							</li>
							<li className="caption_info_item">
								<span className="glyphicon glyphicon-calendar caption_info_item_icon"></span>
								<span>{this.props.post.pubDate}</span>
							</li>
							<li className="caption_info_item">
								<a href="#">
									<span className="glyphicon glyphicon-comment caption_info_item_icon"></span>
									<span>{this.props.post.comments} comentarios</span>
								</a>
							</li>
						</ul>
						<p>{this.props.post.resumenPost}...</p>
						<p><a href="#" className="caption_read_more_link">Leer mas</a></p>
					</div>
				</div>
			</div>
		);
	}
}
 
Post.propTypes = {
	// This component gets the task to display through a React prop.
	// We can use propTypes to indicate it is required
	post: PropTypes.object.isRequired,
};

//{this.props.post.resumenPost}
export default Post;
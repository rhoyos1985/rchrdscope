import PropTypes from 'prop-types';
import React from 'react';
import BaseComponent from './BaseComponent.jsx';

// Task component - represents a single todo item
class Post extends BaseComponent {
	render() {
		const {post} = this.props 

		return (
			<div className="col-sm-6 col-md-6">
				<div className="thumbnail thumbnail_post">
					<img className="thumbnail_img" src="/img/cod.png" alt="Imagen" />
					<div className="caption">
						<h1>{post.title}</h1>
						<ul className="caption_info">
							<li className="caption_info_item">
								<a href="#">
									<span className="glyphicon glyphicon-user caption_info_item_icon"></span>
									<span>{post.user}</span>
								</a>
							</li>
							<li className="caption_info_item">
								<span className="glyphicon glyphicon-calendar caption_info_item_icon"></span>
								<span>{post.pubDate}</span>
							</li>
							<li className="caption_info_item">
								<a href="#">
									<span className="glyphicon glyphicon-comment caption_info_item_icon"></span>
									<span>{post.comments} comentarios</span>
								</a>
							</li>
						</ul>
						<p>{post.resumenPost}...</p>
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
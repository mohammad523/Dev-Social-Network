/** @format */

import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addComment } from "../../actions/post";

const CommentForm = ({ postId, addComment }) => {
	const [text, setText] = useState("");

	return (
		<div className='post-form'>
			<div className='bg-primary p'>
				<h3>Leave a Comment</h3>
			</div>
			<form
				className='form'
				onSubmit={(e) => {
					e.preventDefault();
					addComment(postId, { text });
					setText("");
				}}
			>
				<textarea
					className='text-field'
					name='text'
					cols='30'
					rows='5'
					placeholder='Comment on the post'
					value={text}
					onChange={(e) => setText(e.target.value)}
					required
				/>
				<input type='submit' className='btn btn-dark' value='Submit' />
			</form>
		</div>
	);
};

CommentForm.propTypes = {
	addComment: PropTypes.func.isRequired,
};

export default connect(null, { addComment })(CommentForm);

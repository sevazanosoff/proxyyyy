import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import apiService from '../services/apiService'

const PostDetails = () => {
	const { postId } = useParams()
	const [post, setPost] = useState(null)

	useEffect(() => {
		apiService
			.fetchPost(postId)
			.then(response => {
				setPost(response.data)
			})
			.catch(error => {
				console.error('Error fetching post details', error)
			})
	}, [postId])

	if (!post) return <div>Loading...</div>

	return (
		<div>
			<h1>{post.title}</h1>
			<p>{post.body}</p>
		</div>
	)
}

export default PostDetails

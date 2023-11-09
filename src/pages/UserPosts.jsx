import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import apiService from '../services/apiService'
import '../styles/UserPosts.scss'

const UserPosts = () => {
	const { userId } = useParams()
	const [posts, setPosts] = useState([])

	useEffect(() => {
		apiService
			.fetchUserPosts(userId)
			.then(response => setPosts(response.data))
			.catch(error => console.error('Error fetching posts', error))
	}, [userId])

	return (
		<div className='user-posts'>
			<h1>User Posts</h1>
			{posts.map(post => (
				<div key={post.id} className='post'>
					<h3>{post.title}</h3>
					<p>{post.body}</p>
					<Link to={`/posts/${post.id}`}>Read More</Link>
				</div>
			))}
		</div>
	)
}

export default UserPosts

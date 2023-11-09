import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/UserList.scss'

const UserList = ({ users }) => (
	<ul className='user-list'>
		{users.map(user => (
			<li key={user.id} className='user-item'>
				<div className='user-info'>
					<span className='user-name'>{user.name}</span>
					<span className='user-username'>(@{user.username})</span>
				</div>
				<div className='user-links'>
					<Link to={`/users/${user.id}/posts`} className='user-posts-link'>
						Posts
					</Link>
					<Link to={`/users/${user.id}/albums`} className='user-albums-link'>
						Albums
					</Link>
				</div>
			</li>
		))}
	</ul>
)

export default UserList

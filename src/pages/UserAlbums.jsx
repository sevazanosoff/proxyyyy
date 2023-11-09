import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import apiService from '../services/apiService'
import '../styles/UserAlbums.scss'

const UserAlbums = () => {
	const { userId } = useParams()
	const [albums, setAlbums] = useState([])

	useEffect(() => {
		apiService
			.fetchUserAlbums(userId)
			.then(response => setAlbums(response.data))
			.catch(error => console.error('Error fetching albums', error))
	}, [userId])

	return (
		<div className='user-albums'>
			<h1>User Albums</h1>
			{albums.map(album => (
				<div key={album.id} className='album'>
					<h3>{album.title}</h3>
					<Link to={`/albums/${album.id}/photos`}>View Photos</Link>
				</div>
			))}
		</div>
	)
}

export default UserAlbums

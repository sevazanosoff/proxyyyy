import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import apiService from '../services/apiService'

const AlbumPhotos = () => {
	const { albumId } = useParams()
	const [photos, setPhotos] = useState([])

	useEffect(() => {
		apiService
			.fetchAlbumPhotos(albumId)
			.then(response => setPhotos(response.data))
			.catch(error => console.error('Error fetching album photos', error))
	}, [albumId])

	return (
		<div>
			<h1>Album Photos</h1>
			<div>
				{photos.map(photo => (
					<div key={photo.id}>
						<img src={photo.thumbnailUrl} alt={photo.title} />
						<p>{photo.title}</p>
					</div>
				))}
			</div>
		</div>
	)
}

export default AlbumPhotos

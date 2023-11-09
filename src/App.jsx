import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import HomePage from './pages/HomePage'
import UserPosts from './pages/UserPosts'
import UserAlbums from './pages/UserAlbums'
import PostDetails from './pages/PostDetails'
import AlbumPhotos from './pages/AlbumPhotos'

function App() {
	return (
		<Router>
			<Header />
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/users/:userId/posts' element={<UserPosts />} />
				<Route path='/users/:userId/albums' element={<UserAlbums />} />
				<Route path='/posts/:postId' element={<PostDetails />} />
				<Route path='/albums/:albumId/photos' element={<AlbumPhotos />} />
			</Routes>
		</Router>
	)
}

export default App

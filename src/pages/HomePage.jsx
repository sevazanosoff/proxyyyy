import React, { useEffect, useState } from 'react'
import apiService from '../services/apiService'
import UserList from './UserList'
import '../styles/HomePage.scss'

const HomePage = () => {
	const [users, setUsers] = useState([])
	const [filteredUsers, setFilteredUsers] = useState([])
	const [search, setSearch] = useState('')
	const [sortOrder, setSortOrder] = useState('asc')
	console.log(users)

	useEffect(() => {
		apiService
			.fetchUsers()
			.then(response => {
				setUsers(response.data)
			})
			.catch(error => console.error('Error fetching users', error))
	}, [])

	useEffect(() => {
		let updatedUsers = users

		if (search) {
			updatedUsers = updatedUsers.filter(user => user.username.toLowerCase().includes(search.toLowerCase()))
		}

		updatedUsers.sort((a, b) => {
			const nameA = a.username.toUpperCase()
			const nameB = b.username.toUpperCase()
			return sortOrder === 'asc' ? (nameA < nameB ? -1 : 1) : nameA > nameB ? -1 : 1
		})

		setFilteredUsers(updatedUsers)
	}, [search, sortOrder, users])

	const handleSearchChange = e => {
		setSearch(e.target.value)
	}

	const handleSortChange = () => {
		setSortOrder(prevSortOrder => (prevSortOrder === 'asc' ? 'desc' : 'asc'))
	}

	return (
		<div className='home-page'>
			<h1>Users</h1>
			<div className='search-sort-container'>
				<input type='text' value={search} onChange={handleSearchChange} placeholder='Search by username...' className='search-input' />
				<button onClick={handleSortChange} className='sort-button'>
					Sort by username {sortOrder === 'asc' ? '🔼' : '🔽'}
				</button>
			</div>
			<UserList users={filteredUsers} />
		</div>
	)
}

export default HomePage

import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => (
	<header>
		{/* Ссылки для навигации */}
		<nav>
			<Link to='/'>Home</Link>
		</nav>
	</header>
)

export default Header

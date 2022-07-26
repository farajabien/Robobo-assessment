import React from 'react'
import { Link } from 'react-router-dom'
import HeaderCSS from '../style/Navbar.module.css'

function Navbar() {
	return (
		<div className={HeaderCSS.navbar}>
			<header>
				<div className={HeaderCSS.brand}>
					<Link to='/'>Robobo Test</Link>
				</div>
				<nav>
					<ul>
						<li>
							<Link to='/books'>Books</Link>
						</li>
						<li>
							<Link to='/add'>Add Book</Link>
						</li>
					</ul>
				</nav>
			</header>
		</div>
	)
}

export default Navbar

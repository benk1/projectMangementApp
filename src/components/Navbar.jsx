import React from 'react';
import { Link } from 'react-router-dom';
import Temple from '../assets/temple.svg';
import { useLogout } from '../hooks/useLogout';
import './Navbar.css';

function Navbar(props) {
	const { logout, isPending } = useLogout();
	return (
		<div className="navbar">
			<ul>
				<li className="logo">
					<img src={Temple} alt="logo" />
					<span>The Projects</span>
				</li>

				<li>
					<Link to="/login">Login</Link>
				</li>
				<li>
					<Link to="/signup">Signup</Link>
				</li>
				<li>
					{!isPending && (
						<button className="btn" onClick={logout}>
							Logout
						</button>
					)}

					{isPending && (
						<button className="btn" disabled>
							Logout...
						</button>
					)}
				</li>
			</ul>
		</div>
	);
}

export default Navbar;

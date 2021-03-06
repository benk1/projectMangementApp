import React from 'react';
import { NavLink } from 'react-router-dom';
import DashboardIcon from '../assets/dashboard_icon.svg';
import AddIcon from '../assets/add_icon.svg';

import './Sidebar.css';

function Sidebar(props) {
	return (
		<div className="sidebar">
			<div className="sidebar-content">
				<div className="user">
					{/* avatar and username here later */}
					<p>Hello user</p>
				</div>
				<nav className="links">
					<ul>
						<li>
							<NavLink exact to="/">
								<img src={DashboardIcon} alt="dashboard icon" />
								<span>Dashboard</span>
							</NavLink>
						</li>

						<li>
							<NavLink to="/create">
								<img src={AddIcon} alt="add project icon" />
								<span>New Project</span>
							</NavLink>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	);
}

export default Sidebar;

import { Route, Switch } from 'react-router-dom';
import Dashboard from './pages/dashboard/Dashboard';
import Create from './pages/create/Create';
import Project from './pages/project/Project';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import './App.css';

function App() {
	return (
		<div className="App">
			<Sidebar />
			<div className="container">
				<Navbar />
				<Switch>
					<Route exact path="/">
						<Dashboard />
					</Route>

					<Route path="/create">
						<Create />
					</Route>

					<Route path="/projects/:id">
						<Project />
					</Route>

					<Route path="/login">
						<Login />
					</Route>

					<Route path="/signup">
						<Signup />
					</Route>
				</Switch>
			</div>
		</div>
	);
}

export default App;

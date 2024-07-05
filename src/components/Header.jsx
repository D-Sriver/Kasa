import { Link, useLocation } from 'react-router-dom'
import logo from '../images/logo_kasa.svg'

function Header() {
	const location = useLocation()
	return (
		<header>
			<div className="wrapper">
				<Link to="/">
					<img className="logo" src={logo} alt="logo kasa" />
				</Link>
				<nav>
					<ul>
						<li className={location.pathname === '/' ? 'active' : ''}>
							<Link to="/">
								<span className="nav-link-hitbox">Accueil</span>
							</Link>
						</li>
						<li className={location.pathname === '/a-propos' ? 'active' : ''}>
							<Link to="/a-propos">
								<span className="nav-link-hitbox">A propos</span>
							</Link>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	)
}

export default Header

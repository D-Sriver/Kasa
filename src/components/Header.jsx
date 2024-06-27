import { Link } from 'react-router-dom'
import logo from '../images/logo_kasa.svg'

function Header() {
	return (
		<header>
			<div className="wrapper">
				<Link to="/">
					<img className="logo" src={logo} alt="logo kasa" />
				</Link>
				<nav>
					<ul>
						<li>
							<Link to="/">Accueil</Link>
						</li>
						<li>
							<Link to="/a-propos">A propos</Link>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	)
}

export default Header

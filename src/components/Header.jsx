import logo from "../images/logo_kasa.svg";

function Header() {
    return (
  
        <header>
            <div className="wrapper">
                <a href="/"><img className="logo" src={logo} alt="logo kasa" /></a>
                <nav>
                    <ul>
                        <li><a href="/">Accueil</a></li>
                        <li><a href="/a-propos">A propos</a></li>
                    </ul>
                </nav>
            </div>
        </header>
  
    );
  }
  
  export default Header; 
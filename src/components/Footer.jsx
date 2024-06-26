import logo from '../images/logo-blanc.svg'

export default function Footer() {
  return (
    <footer>
      <div className="wrapper">
        <img src={logo} alt="logo kasa blanc" />
        <p>© 2020 Kasa. All rights reserved</p>
      </div>
    </footer>
  )
}

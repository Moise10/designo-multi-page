import React from 'react'
import Logo from '../../assets/shared/desktop/logo-light.png'

function Header() {
  return (
    <div className="header__container">
      <img src={Logo} alt="" />
      <nav className="navigation">
        <ul className="nav__lists">
          <li className="nav__list"><a href="#">Our company</a></li>
          <li className="nav__list"><a href="#">locations</a></li>
          <li className="nav__list"><a href="#">contacts</a></li>
        </ul>
      </nav>
    </div>
  )
}

export default Header
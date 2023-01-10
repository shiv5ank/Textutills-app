import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = (props) => {
  return (
    <div>
      <nav className={`navbar_container${props.currMode}`}>
        <div className="container-header">
          <div className={`navbar_text${props.currTheme}`} to="/">{props.title}</div>
          <div className="navbar_homeContainer">
                <Link className="navbar-homeLink" aria-current="page" to="/">{props.homepage}</Link>
            <form className="main_form">
              <div className={`form_themeChanger-${props.currMode === 'light' ? 'dark' : 'light'}`}>
                <input type="checkbox" onClick={props.toggleMode} className="switch-theme"/>
                <label className="switch">{props.currMode === 'light' ? 'Enable' : 'Disable'} DarkMode</label>
              </div>
            </form>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar;
import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Switch from '@mui/material/Switch';

export default function Navbar (props) {
  return (
    <div>
      <nav className={`navbar_container${props.currMode}`}>
        <div className="container-header">
          <div style={{color: props.currMode==='dark'?'white':'black'}} className={`navbar_text${props.currMode}`} to="/">{props.title} </div>
                <Link style={{color: props.currMode==='dark'?'white':'black'}} className="homeLink">{props.homepage}</Link>
                <div className="switch_container">
                  <div className={`themeChanger-${props.currMode === 'light' ? 'dark' : 'light'}`}>
                    <Switch onClick={props.toggleMode} className="switchContainer"/>
                    <label style={{color: props.currMode==='dark'?'white':'black'}} className="changeTheme">{props.currMode === 'light' ? 'Enable' : 'Disable'} DarkMode</label>
                  </div>
              </div>
        </div>
      </nav>
    </div>
  )
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired,
};


Navbar.defaultProps = {
  title: "TextUtils",
  about: "About Us",
};


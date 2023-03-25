import React, { useState } from "react";
import './Header.css';

function Header({ user }) {
  const [showMenu, setShowMenu] = useState(false);

  function toggleMenu() {
    setShowMenu((prev) => !prev);
  }

  function handleSignOut() {
    // handle signout
  }

  return (
    <div className="header">
      <div className="header-left">
        <button className="navbar-button">Navbar</button>
      </div>
      <div className="header-right">
        <div className="profile-dropdown" onClick={toggleMenu}>
          <img
            src={user.profilepicture}
            alt="User Profile"
            className="profile-picture"
          />
          <span className="username">{user.name}</span>
          <i className={`arrow ${showMenu ? "up" : "down"}`}></i>
        </div>
        {showMenu && (
          <div className="menu">
            <div className="user-info">
              <img
                src={user.profilepicture}
                alt="User Profile"
                className="profile-picture"
              />
              <div className="user-details">
                <div className="name">{user.name}</div>
                <div className="username">{user.username}</div>
              </div>
            </div>
            <button className="sign-out" onClick={handleSignOut}>
              Sign Out
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;

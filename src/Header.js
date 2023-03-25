import React, { useEffect, useState } from "react";
import "./Header.css";

function Header({ userProp, title }) {
  const [showMenu, setShowMenu] = useState(false);
  const [showCard, setShowCard] = useState(false); // New state variable
  const [user, setUser] = useState(null);

  function toggleMenu() {
    setShowMenu((prev) => !prev);
  }

  function handleSignOut() {
    // handle signout
  }

  function toggleCard() {
    setShowCard((prev) => !prev);
  }

  useEffect(() => {
    setUser(userProp);
  }, [userProp]);

  return (
    <React.Fragment>
      {user && (
        <div className="header">
          <div className="header-left">
            <div className="navbar-button">{title}</div>
          </div>
          <div className="header-right">
            {showCard ? ( // Display the card if the state is true
              <div className="user-card" onClick={toggleCard}>
                <img
                  src={user.profilepicture}
                  alt="User Profile"
                  className="profile-picture-1"
                />
                <div className="user-details">
                  <div className="name">{user.name}</div>
                  <div className="username">{user.username}</div>
                </div>
              </div>
            ) : (
              // Otherwise, display the dropdown button
              <div className="profile-dropdown" onClick={toggleMenu}>
                <img
                  src={user.profilepicture}
                  alt="User Profile"
                  className="profile-picture-1"
                />
                <span className="username">{user.name}</span>
                <i className={`arrow ${showMenu ? "up" : "down"}`}></i>
              </div>
            )}
            {showMenu &&
              !showCard && ( // Don't display the menu if the card is displayed
                <div className="menu">
                  <div className="user-info">
                    <img
                      src={user.profilepicture}
                      alt="User Profile"
                      className="profile-picture-1"
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
      )}
    </React.Fragment>
  );
}

export default Header;

import React, { useState, useEffect } from "react";
import "./UserProfile.css";

function UserProfile(props) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function fetchUser() {
      const response = await fetch(`https://panorbit.in/api/users.json`);
      const data = await response.json();
      setUser(data.users.find((u) => u.id === props.userId));
    }
    fetchUser();
  }, [props.userId]);
  console.log(user);
  return user ? (
    <div className="container">
      <div className="container_1">
        <img
          src={user.profilepicture}
          alt="User Profile"
          className="profile-picture"
        />
        <strong className="container_details_username">{user.name}</strong>
        <div className="container_info">
          <div className="container_left">
            <div className="text_left_header">Username</div>
            <div className="text_left_header">Email</div>
            <div className="text_left_header">Phone</div>
            <div className="text_left_header">Website</div>
          </div>
          <div className="container_center">
            <div className="text_left_header">:</div>
            <div className="text_left_header">:</div>
            <div className="text_left_header">:</div>
            <div className="text_left_header">:</div>
          </div>
          <div className="container_right">
            <div className="text_right_header">{user.username}</div>
            <div className="text_right_header">{user.email}</div>
            <div className="text_right_header">{user.phone}</div>
            <div className="text_right_header">{user.website}</div>
          </div>
        </div>


        <hr className="container_hr_tag" />

        <div className="container_details_company">Company</div>
        <div className="container_info">
          <div className="container_left">
            <div className="text_left_header">Name</div>
            <div className="text_left_header">Catch Phrase</div>
            <div className="text_left_header">BS</div>
          </div>
          <div className="container_center">
            <div className="text_left_header">:</div>
            <div className="text_left_header">:</div>
            <div className="text_left_header">:</div>
          </div>
          <div className="container_right">
            <div className="text_right_header">{user.company.name}</div>
            <div className="text_right_header">{user.company.catchPhrase}</div>
            <div className="text_right_header">{user.company.bs}</div>
          </div>
        </div>

      </div>
      <div className="container_2">
        <div className="container_address">
          <div className="text_left_header">Address :</div>
          <div className="container_info">
            <div className="container_left">
              <div className="text_left_header">Street</div>
              <div className="text_left_header">Suite</div>
              <div className="text_left_header">City</div>
              <div className="text_left_header">Zipcode</div>
            </div>
            <div className="container_center">
              <div className="text_left_header">:</div>
              <div className="text_left_header">:</div>
              <div className="text_left_header">:</div>
              <div className="text_left_header">:</div>
            </div>
            <div className="container_right">
              <div className="text_right_header">{user.address.street}</div>
              <div className="text_right_header">{user.address.suite}</div>
              <div className="text_right_header">{user.address.city}</div>
              <div className="text_right_header">{user.address.zipcode}</div>
            </div>
          </div>

        </div>
        <div className="container_map">
          <iframe
            src={`https://maps.google.com/maps?q=${user.address.geo.lat},${user.address.geo.lng}&hl=es;&output=embed`}
            alt="Map"
          />
        </div>
      </div>

    </div>
  ) : null;
}

export default UserProfile;

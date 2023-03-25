import React, { useState, useEffect } from "react";
import "./UserProfile.css"

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
      </div>
      <div className="container_details">

        <strong className='container_details_username'>{user.name}</strong>
        <div className='container_details_name'>
          <span className='container_details_name_label'>Username:</span> <strong>{user.username}</strong>
        </div>
        <div className='container_details_name'>
          <span className='container_details_name_label'>E-mail:</span> <strong>{user.email}</strong>
        </div>
        <div className='container_details_name'>
          <span className='container_details_name_label'>Phone:</span> <strong>{user.phone}</strong>
        </div>
        <div className='container_details_name'>
          <span className='container_details_name_label'>Website:</span> <strong>{user.website}</strong>
        </div>

        <hr className="container_hr_tag" />

        <strong className='container_details_username'>Company</strong>
        <div className='container_details_name'>
          <span className='container_details_name_label'>Name:</span> <strong>{user.company.name}</strong>
        </div>
        <div className='container_details_name'>
          <span className='container_details_name_label'>Catch Phrase:</span> <strong>{user.company.catchPhrase}</strong>
        </div>
        <div className='container_details_name'>
          <span className='container_details_name_label'>BS:</span> <strong>{user.company.bs}</strong>
        </div>
        <div className='container_details_name'>
          <span className='container_details_name_label'>Website:</span> <strong>{user.website}</strong>
        </div>



      </div>

      <div className="container_2">
        <div className="container_address">
          <strong className='container_details_username'>Address</strong>
          <div className='container_details_name'>
            <span className='container_details_name_label'>Street:</span> <strong>{user.address.street}</strong>
          </div>
          <div className='container_details_name'>
            <span className='container_details_name_label'>Suite:</span> <strong>{user.address.suite}</strong>
          </div>
          <div className='container_details_name'>
            <span className='container_details_name_label'>City:</span> <strong>{user.address.city}</strong>
          </div>
          <div className='container_details_name'>
            <span className='container_details_name_label'>Zipcode:</span> <strong>{user.address.zipcode}</strong>
          </div>




        </div>
        <div className="container_map">

          <iframe
            src={`https://maps.google.com/maps?q=${user.address.geo.lat},${user.address.geo.lng}&hl=es;&output=embed`}
            alt="Map"
          />
{/* //{`https://maps.googleapis.com/maps/api/staticmap?center=${user.address.geo.lat},${user.address.geo.lng}&zoom=13&size=600x400&key=AIzaSyBEJxktPmh2Q5maCSNpW71DhHXrMXLLBU0`} */}
        </div>
      </div>
    </div>
  ) : null;
}

export default UserProfile;

// import React from 'react';

// function UserProfile(props) {
//   return (
//     <div className="user-profile">
//       <img src={props.image} alt="User Profile" className="profile-picture" />
//       <h2>{props.name}</h2>
//       <p>{props.bio}</p>
//       <div className="social-links">
//         <a href={props.github} target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
//         <a href={props.linkedin} target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
//         <a href={props.twitter} target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
//       </div>
//     </div>
//   );
// }

// export default UserProfile;

import React, { useState, useEffect } from 'react';

function UserProfile(props) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function fetchUser() {
      const response = await fetch(`https://panorbit.in/api/users.json`);
      const data = await response.json();
      setUser(data.users.find(u => u.id === props.userId));
    }
    fetchUser();
  }, [props.userId]);

  return user ? (
    <div className="user-profile">
      <div className="row">        
        <div className="col-md-4">
          <img src={user.profilepicture} alt="User Profile" className="profile-picture" />
        </div>
        <div className="col-md-8">
          <h2>{user.username}</h2>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Phone:</strong> {user.phone}</p>
          <p><strong>Website:</strong> {user.website}</p>
          <hr />
          <p><strong>Company:</strong></p>
          <ul>
            <li><strong>Name:</strong> {user.company.name}</li>
            <li><strong>Catch Phrase:</strong> {user.company.catchPhrase}</li>
            <li><strong>BS:</strong> {user.company.bs}</li>
          </ul>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <h3>Address</h3>
          <p><strong>Street:</strong> {user.address.street}</p>
          <p><strong>Suite:</strong> {user.address.suite}</p>
          <p><strong>City:</strong> {user.address.city}</p>
          <p><strong>ZIP Code:</strong> {user.address.zipcode}</p>
          <p><strong>Geo:</strong> ({user.address.geo.lat}, {user.address.geo.lng})</p>        
        </div>
        <div className="col-md-6">
          <div className="map-container">
            <img src={`https://maps.googleapis.com/maps/api/staticmap?center=${user.address.geo.lat},${user.address.geo.lng}&zoom=13&size=600x400&key=YOUR_API_KEY`} alt="Map" />
          </div>
        </div>
      </div>
  </div>
  ) : null;
}

export default UserProfile;

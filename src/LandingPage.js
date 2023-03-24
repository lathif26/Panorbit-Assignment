// import React from 'react';
// import Navbar from './Navbar';
// import UserProfile from './UserProfile';
// import './LandingPage.css';

// function LandingPage({ selectedUser }) {
//   return (
//     <div className="container-fluid">
//       <div className="row">
//         <div className="col-md-3">
//           <Navbar />
//         </div>
//         <div className="col-md-9">
//           <div className="row">
//             <div className="col-md-4">
//               <UserProfile user={selectedUser} />
//             </div>
//             <div className="col-md-8">
//               <div className="map-container">
//                 <img src={`https://maps.googleapis.com/maps/api/staticmap?center=${selectedUser.address.geo.lat},${selectedUser.address.geo.lng}&zoom=13&size=600x400&key=YOUR_API_KEY`} alt="Map" />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default LandingPage;

// import React from 'react';
// import Navbar from './Navbar';
// import UserProfile from './UserProfile';
// import './LandingPage.css';

// function LandingPage({ selectedUser }) {
//   return (
//     <div className="container-fluid">
//       <div className="row">
//         <div className="col-md-3">
//           <Navbar />
//         </div>
//         <div className="col-md-9">
//           <div className="row">
//             <div className="col-md-4">
//               <UserProfile userId={1} />
//             </div>
//             <div className="col-md-8">
//               <div className="map-container">
//                 <img src={`https://maps.googleapis.com/maps/api/staticmap?center=${selectedUser.address.geo.lat},${selectedUser.address.geo.lng}&zoom=13&size=600x400&key=YOUR_API_KEY`} alt="Map" />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default LandingPage;

import React from 'react';
import Navbar from './Navbar';
import UserProfile from './UserProfile';
import './LandingPage.css';

function LandingPage({ selectedUser }) {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-3">
          <Navbar />
        </div>
        <div className="col-md-9">
          <div className="row">
            <div className="col-md-4">
              <UserProfile userId={selectedUser.id} />
            </div>
            <div className="col-md-8">
              <div className="map-container">
                <img src={`https://maps.googleapis.com/maps/api/staticmap?center=${selectedUser.address.geo.lat},${selectedUser.address.geo.lng}&zoom=13&size=600x400&key=YOUR_API_KEY`} alt="Map" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;

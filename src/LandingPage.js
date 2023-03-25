// import React, { useEffect } from "react";
// import Navbar from "./Navbar";
// import UserProfile from "./UserProfile";
// import "./LandingPage.css";

// import { useParams } from "react-router-dom";

// function LandingPage({ selectedUser }) {
//   const { slug } = useParams();
//   useEffect(() => {
//     // Get the user specific dashboard
//   }, []);
//   return (
//     <div className="container">
//       <div className="container_outline">
//         <div className="container_1">
//           <Navbar />
//         </div>
       
//             <div className="container_2">
//               <UserProfile userId={Number(slug)} />
//             </div>

//               <div className="container_3">
//                 <img
//                   src={`https://maps.googleapis.com/maps/api/staticmap?center=${selectedUser.address.geo.lat},${selectedUser.address.geo.lng}&zoom=13&size=600x400&key=AIzaSyAiiPHfMggwVWEEEgphDhItKyQAGgGDdlo`}
//                   alt="Map"
//                 />
//             </div>
//       </div>
//     </div>
//   );
// }

// export default LandingPage;

import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import UserProfile from "./UserProfile";
import "./LandingPage.css";
import { useParams } from "react-router-dom";
import Header from "./Header";

function LandingPage({ selectedUser }) {
  const { slug } = useParams();
  const [user, setUser] = useState(null);
  useEffect(() => {
    async function fetchUser() {
      const response = await fetch(`https://panorbit.in/api/users.json`);
      const data = await response.json();
      setUser(data.users.find((u) => u.id === selectedUser.userId));
    }
    fetchUser();
  }, [selectedUser.userId]);

  return  (
    <div>

{/* <Header user={user} /> */}
    <div className="container">
      <div className="container_outline">
        <div className="container_1">
          <Navbar />
        </div>
        <div className="container_2">
          <UserProfile userId={Number(slug)} />
        </div>
      </div>
     
    </div>
    </div>
  );
}

export default LandingPage;

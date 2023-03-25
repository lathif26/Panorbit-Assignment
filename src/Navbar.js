// import React, { useState } from 'react';
// import './Navbar.css';

// const Arrow = () => {
//   return (
//     <div>
//       <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//         <path
//           fill="#a0a0a0"
//           d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"
//         />
//       </svg>
//     </div>
//   );
// };

// const NavButton = ({ title }) => {
//   const [inFocus, setInFocus] = useState(false);
//   return (
//     <button
//       className="test_nav_link"
//       onMouseOver={() => {
//         setInFocus(true);
//       }}
//       onMouseOut={() => {
//         setInFocus(false);
//       }}
//     >
//       {title}
//       {inFocus && (
//         <div className="test_nav_link_blob">
//           <Arrow />
//         </div>
//       )}
//     </button>
//   );
// };

// const Navbar = () => {
//   return (
//     <div className="test_ctn">
//       <div className="test_nav">

//         <NavButton title="Profile" />

//         <div className="test_nav_hr_ctn">
//           <hr className="test_nav_hr" />
//         </div>

//         <NavButton title="Posts" />

//         <div className="test_nav_hr_ctn">
//           <hr className="test_nav_hr" />
//         </div>

//         <NavButton title="Gallery" />

//         <div className="test_nav_hr_ctn">
//           <hr className="test_nav_hr" />
//         </div>

//         <NavButton title="Profile" />

//       </div>
//       <div className="test_body"></div>
//     </div>
//   );
// };

// export default Navbar;

// import React, { useState } from 'react';
// import './Navbar.css';

// const Arrow = () => {
//   return (
//     <div>
//       <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//         <path
//           fill="#a0a0a0"
//           d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"
//         />
//       </svg>
//     </div>
//   );
// };

// const NavButton = ({ title, onClick }) => {
//   const [inFocus, setInFocus] = useState(false);
//   return (
//     <button
//       className="test_nav_link"
//       onMouseOver={() => {
//         setInFocus(true);
//       }}
//       onMouseOut={() => {
//         setInFocus(false);
//       }}
//       onClick={onClick}
//     >
//       {title}
//       {inFocus && (
//         <div className="test_nav_link_blob">
//           <Arrow />
//         </div>
//       )}
//     </button>
//   );
// };

// const Navbar = ({ setSelectedUser }) => {
//   return (
//     <div className="test_ctn">
//       <div className="test_nav">
//         <NavButton title="Profile" onClick={() => setSelectedUser({ id: 1 })} />

//         <div className="test_nav_hr_ctn">
//           <hr className="test_nav_hr" />
//         </div>

//         <NavButton title="Posts" />

//         <div className="test_nav_hr_ctn">
//           <hr className="test_nav_hr" />
//         </div>

//         <NavButton title="Gallery" />

//         <div className="test_nav_hr_ctn">
//           <hr className="test_nav_hr" />
//         </div>

//         <NavButton title="ToDo" />

//       </div>
//       <div className="test_body"></div>
//     </div>
//   );
// };

// export default Navbar;

import React, { useState } from "react";
import "./Navbar.css";
// import Gallery from './Gallery';
// import Posts from './Posts';
// import Todo from './Todo';

const Arrow = () => {
  return (
    <div>
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path
          fill="#a0a0a0"
          d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"
        />
      </svg>
    </div>
  );
};

const NavButton = ({ title, onClick }) => {
  const [inFocus, setInFocus] = useState(false);
  return (
    <button
      className="test_nav_link"
      onMouseOver={() => {
        setInFocus(true);
      }}
      onMouseOut={() => {
        setInFocus(false);
      }}
      onClick={onClick}
    >
      {title}
      {inFocus && (
        <div className="test_nav_link_blob">
          <Arrow />
        </div>
      )}
    </button>
  );
};

const Navbar = ({ setSelectedUser, setPageId }) => {
  const handleGalleryClick = () => {
    setPageId("Gallery");
  };

  const handlePostsClick = () => {
    setPageId("Posts");
  };

  const handleTodoClick = () => {
    setPageId("Todo");
  };

  return (
    <div className="test_ctn">
      <div className="test_nav">
        <NavButton
          title="Profile"
          onClick={() => {
            setSelectedUser({ id: 1 });
            setPageId("Profile");
          }}
        />

        <div className="test_nav_hr_ctn">
          <hr className="test_nav_hr" />
        </div>

        <NavButton title="Posts" onClick={handlePostsClick} />

        <div className="test_nav_hr_ctn">
          <hr className="test_nav_hr" />
        </div>

        <NavButton title="Gallery" onClick={handleGalleryClick} />

        <div className="test_nav_hr_ctn">
          <hr className="test_nav_hr" />
        </div>

        <NavButton title="Todo" onClick={handleTodoClick} />
      </div>
      {/* <div className="test_body">
        {page}
      </div> */}
    </div>
  );
};

export default Navbar;

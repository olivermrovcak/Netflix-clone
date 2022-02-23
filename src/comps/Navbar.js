import React, { useEffect, useState } from 'react';

import "../styles/nav.css";
function Navbar() {

    const [show,handleShow] = useState(false);

    useEffect(() =>{
        window.addEventListener("scroll", () => {
            if(window.scrollY > 1){
                handleShow(true);
            } else handleShow(false);
        });

            return ()=> {
                window.removeEventListener("scroll",window);
            };

    },[]);

  return (
  <div className={`nav ${show && "nav-black-bg"}`}>
      <img 
      className='nav-logo'
      src="https://upload.wikimedia.org/wikipedia/commons/6/67/NewNetflixLogo.png"
      /> 

      <img
      className='nav-avatar'
      src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"

      />
  </div>
  )
}

export default Navbar;

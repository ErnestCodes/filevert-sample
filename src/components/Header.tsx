import React, { useState } from "react";
import "./Header.css";

const Header = () => {
  const [clicked, setClicked] = useState<boolean>(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <>
      <nav>
        <a href="index.html">
          <img src="images/logo.png" alt="" height={60} />
          <span>Le transfert de fichiers vertueux et responsable</span>
        </a>

        <div>
          <ul id="navbar" className={clicked ? "#navbar active" : "#navbar"}>
            <li>
              <a className="active" href="index.html">
                Collab
              </a>
            </li>
            <li>
              <a href="index.html">Tarifs</a>
            </li>
            <li>
              <img src="images/login.png" height={30} width={30} alt="" />
            </li>
            <li>
              <img
                src="images/menu.png"
                id="menu_img"
                height={20}
                width={30}
                alt=""
              />
            </li>
          </ul>
        </div>

        <div id="mobile" onClick={handleClick}>
          <i id="bars" className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
      </nav>
    </>
  );
};

export default Header;

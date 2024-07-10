import React, { useState } from 'react';
import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className={styles.container}>
      
      <h3 className={styles.title}>intract.</h3>

      <div className={styles.toggleButton} onClick={toggleMenu}>
        <img
          src={menuOpen ? getImageUrl("navbar/closeIcon.png") : getImageUrl("navbar/menuIcon.png")}
          alt={menuOpen ? "Close icon" : "Open icon"}
        />
      </div>

      <ul className={`${styles.menus} ${menuOpen ? styles.open : ''}`}>
        <li className={styles.menu}><a href="#compass" onClick={closeMenu}>Compass</a></li>
        <li className={styles.menu}><a href="#explore" onClick={closeMenu}>Explore</a></li>
        <li className={styles.menu}><a href="#academy" onClick={closeMenu}>Academy</a></li>
        <li className={styles.menu}><a href="#nfts" onClick={closeMenu}>NFTs</a></li>
        <li className={styles.menu}><a href="#projects" onClick={closeMenu}>For Projects</a></li>
      </ul>

 
      <div className={styles.search}>
        <i><img src={getImageUrl("navbar/search.png")} alt="icon" /></i>
        <input type="text" placeholder="Search for ecosystems, trending quests etc,." />
      </div>

      <div className={styles.button}>
        <img
          src={getImageUrl("navbar/broadcasting.png")}
          className={styles.broadcastIcon}
          alt="broadcast"
        />
        <span className={styles.signin}>Sign In</span>
      </div>
    </nav>
  );
};

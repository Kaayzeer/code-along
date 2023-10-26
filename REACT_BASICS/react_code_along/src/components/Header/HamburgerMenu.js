import React from "react";
import Nav from "./Nav";
import SigningIn from "./SigningIn";
import styles from "./HamburgerMenu.module.css";

const HamburgerMenu = () => {
  return (
    <section className={styles.hamburgerMenuBg}>
      <Nav />
      <SigningIn />
    </section>
  );
};

export default HamburgerMenu;

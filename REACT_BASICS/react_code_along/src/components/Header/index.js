import Logo from "./Logo";
import Nav from "./Nav";
import SigningIn from "./SigningIn";

import styles from "./index.module.css";

const Header = () => {
  return (
    <section className={styles.headerWrapper}>
      <article className={styles.logoNavWrapper}>
        <Logo />
        <Nav />
      </article>
      <SigningIn />
    </section>
  );
};

export default Header;

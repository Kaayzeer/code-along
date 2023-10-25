import styles from "./Nav.module.css"
const Nav = () => {
  return (
  <section className={styles.navWrapper}>
   <a className={styles.navItem} href="https://example.com">features</a>
   <a className={styles.navItem} href="https://example.com">pricing</a>
   <a className={styles.navItem} href="https://example.com">resources</a>
  </section>
  );
};

export default Nav;

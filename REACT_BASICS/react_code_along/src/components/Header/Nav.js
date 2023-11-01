import styles from "./Nav.module.css";
import { navItems } from "../../utils/constants";

const Nav = () => {
  return (
    <section className={styles.navWrapper}>
      {navItems.map((item) => (
        <a className={styles.navItem} href={item.href}>
          {item.name}
        </a>
      ))}
    </section>
  );
};

export default Nav;

import styles from "./Container.module.css";

const Container = ({ children }) => {
  return <div className={styles.containerStyles}>{children}</div>;
};

export default Container;

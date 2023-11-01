import styles from "./Container.module.css";

const Container = ({ children, inlineStyle }) => {
  return (
    <div style={inlineStyle} className={styles.containerStyles}>
      <div className={styles.wrapperStyles}>{children}</div>
    </div>
  );
};

export default Container;

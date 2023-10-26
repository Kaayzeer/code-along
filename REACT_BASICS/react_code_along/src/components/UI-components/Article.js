import React from "react";
import styles from "./Article.module.css";

const Article = ({ children }) => {
  return <article className={styles.articleStyles}>{children}</article>;
};

export default Article;

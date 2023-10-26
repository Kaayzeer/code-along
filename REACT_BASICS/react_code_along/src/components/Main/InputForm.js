import React from "react";
import styles from "./InputForm.module.css";

const InputForm = ({ inputRef }) => {
  return (
    <form className={styles.inputForm}>
      <input ref={inputRef} type="text" placeholder="Shorten a link here" />
      <button>Shorten it</button>
    </form>
  );
};

export default InputForm;

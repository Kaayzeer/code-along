import styles from "./SigningIn.module.css"

const SigningIn = () => {
  return <div className={styles.buttonWrapper}>
    <button className={styles.loginButton}>login</button>
    <button className={styles.signupButton}>sign up</button>
  </div>;
};

export default SigningIn;

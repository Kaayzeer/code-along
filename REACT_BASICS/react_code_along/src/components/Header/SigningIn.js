import Button from "../UI-components/Button";
import styles from "./SigningIn.module.css";

const SigningIn = () => {
  return (
    <div className={styles.buttonWrapper}>
      <Button styles={styles.loginButton}>Login</Button>
      <Button styles={styles.signupButton}>Signup</Button>
    </div>
  );
};

export default SigningIn;

import React from "react";
import Article from "../UI-components/Article";
import Button from "../UI-components/Button";
import styles from "./Hero.module.css";
import { projectTexts } from "../../utils/texts";
import Container from "../UI-components/Container";

const Hero = ({ handleClickProp }) => {
  return (
    <Container>
      <section className={styles.heroStyles}>
        <Article>
          <h1 className={styles.heroHeading}>{projectTexts.HERO_HEADING}</h1>
          <p className={styles.heroBody}>{projectTexts.HERO_BODY}</p>
          <Button onClick={handleClickProp} styles={styles.heroButtonStyles}>
            Get Started
          </Button>
        </Article>
      </section>
    </Container>
  );
};

export default Hero;

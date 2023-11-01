import { useState, useEffect } from "react";
import Card from "../UI-components/Card";
import Container from "../UI-components/Container";
import Button from "../UI-components/Button";

import styles from "./PokemonSection.module.css";

const PokemonSection = ({ inputRef }) => {
  const [data, setData] = useState([]);
  const [inputData, setInputData] = useState("");

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon")
      .then((res) => res.json())
      .then((data) => setData(data.results));
  }, []);

  const handleChange = (event) => {
    setInputData(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputData);
  };
  return (
    <>
      <Container
        inlineStyle={{
          background:
            "linear-gradient(to bottom, var(--white) 0%, var(--white) 50%, var(--grayish-fine) 50%, var(--grayish-fine) 100%)",
        }}
      >
        <form className={styles.formStyles} onSubmit={handleSubmit}>
          <input
            className={styles.inputStyles}
            ref={inputRef}
            type="text"
            onChange={handleChange}
            placeholder="Send email"
          />
          <Button styles={styles.inputButtonStyles}>Send</Button>
        </form>
      </Container>
      <Container
        inlineStyle={{
          background: "var(--grayish-fine)",
        }}
      >
        <Card data={data} />
      </Container>
    </>
  );
};

export default PokemonSection;

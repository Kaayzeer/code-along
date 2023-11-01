import { useRef } from "react";
import Header from "./components/Header";
import Hero from "./components/Main/Hero";
import PokemonSection from "./components/Main/PokemonSection";

const App = () => {
  const ref = useRef(null);

  const handleClickFunction = () => {
    console.log("clicked!");
    ref.current.focus();
  };
  return (
    <>
      <Header />
      <Hero handleClickProp={handleClickFunction} />
      <PokemonSection inputRef={ref} />
    </>
  );
};

export default App;

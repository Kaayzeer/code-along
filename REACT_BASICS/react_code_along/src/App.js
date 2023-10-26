import { useRef } from "react";
import Header from "./components/Header";
import Hero from "./components/Main/Hero";
import InputForm from "./components/Main/InputForm";

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
      <InputForm inputRef={ref} />
    </>
  );
};

export default App;

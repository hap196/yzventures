import { useState } from "react";
import "./App.css";
import Navbar from "./Navbar";
import Header from "./Header";
import About from "./About";
import Contact from "./Contact";
import InteractiveLogo from "./InteractiveLogo";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <InteractiveLogo />
      <Header />
      <About />
      <Contact />
    </>
  );
}

export default App;
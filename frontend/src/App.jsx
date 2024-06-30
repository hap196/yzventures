import "./App.css";
import Navbar from "./Navbar";
import Header from "./Header";
import About from "./About";
import Contact from "./Contact";
import InteractiveLogo from "./InteractiveLogo";

function App() {
  return (
    <div className="relative bg-gray-900">
      <Navbar />
      <InteractiveLogo />
      <Header />
      <About />
      <Contact />
    </div>
  );
}

export default App;

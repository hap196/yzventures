import { useState } from "react";
import "./App.css";
import Navbar from "./Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <div className="mt-20 mb-20 mx-10 md:mt-40 md:mb-20 md:mx-20">
        <h1 className="font-lora text-custom-blue-1 text-center text-4xl md:text-5xl">
          Where capital investment
        </h1>
        <h1 className="font-lora text-custom-blue-1 text-center text-4xl md:text-5xl">
          has community impact.
        </h1>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center space-y-10 md:space-y-0 md:space-x-10 mb-24 mx-10 md:mx-20">
        <div className="w-full max-w-48 text-center">
          <h2 className="font-lora text-custom-blue-1 text-5xl md:text-7xl mb-4">
            37
          </h2>
          <h2 className="font-lora text-accent-blue text-md">
            countries our investors are based in
          </h2>
        </div>
        <div className="w-full max-w-48 text-center">
          <h2 className="font-lora text-custom-blue-1 text-5xl md:text-7xl mb-4">
            240
          </h2>
          <h2 className="font-lora text-accent-blue text-md">
            industry-leading investors in our funds
          </h2>
        </div>
        <div className="w-full max-w-48 text-center">
          <h2 className="font-lora text-custom-blue-1 text-5xl md:text-7xl mb-4">
            1.2M
          </h2>
          <h2 className="font-lora text-accent-blue text-md">
            people employed by our investors' brands
          </h2>
        </div>
      </div>
      <div className="flex justify-center items-center max-w-4xl h-full mx-auto mt-20 md:mt-24 mb-20 md:mb-40">
        <p className="font-lora text-accent-blue text-md text-center max-w-96">
          Y&Z Ventures is a Los Angeles based multi-family office, operating as
          a direct investment vehicle + fund of funds. We are dedicated to
          supporting investments to the final stages, or the end game. Through
          our established network of M&A professionals across finance, tax, and
          legal, we support our portfolio investments through buy-side and
          sell-side exploration.
        </p>
      </div>
      <div className="mx-10 md:mx-20 mt-20 mb-20">
        <h2 className="text-center font-lora text-custom-blue-1 text-2xl md:text-4xl mb-10">
          Partner Industries
        </h2>
        <div className="max-w-3xl font-lora text-lg mx-auto grid grid-cols-1 gap-10 text-custom-blue-1 border-custom-blue-1 border-t border-b pt-10 pb-10 md:grid-cols-2">
          <div className="text-center md:border-r border-custom-blue-1">
            <ul>
              <li>Agriculture</li>
              <li>Education</li>
              <li>Healthcare</li>
              <li>Logistics</li>
            </ul>
          </div>
          <div className="text-center">
            <ul>
              <li>Real Estate</li>
              <li>Supply Chain</li>
              <li>Transportation</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center my-40">
        <a href="https://airtable.com/appIqybHNdQCLdf41/shrSpqTrmw8KANvBr" target="_blank">
          <button className="border-2 border-custom-blue-1 py-2 px-4 font-lora text-custom-blue-1 text-center text-2xl md:text-4xl">
            Pitch us
          </button>
        </a>
      </div>
    </>
  );
}

export default App;

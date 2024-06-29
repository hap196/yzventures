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
        <div className="w-full md:max-w-48 text-center">
          <h2 className="font-lora text-custom-blue-1 text-5xl md:text-7xl mb-4">
            37
          </h2>
          <h2 className="font-lora text-custom-blue-1 text-md">
            countries our investors are based in
          </h2>
        </div>
        <div className="w-full md:max-w-48 text-center">
          <h2 className="font-lora text-custom-blue-1 text-5xl md:text-7xl mb-4">
            240
          </h2>
          <h2 className="font-lora text-custom-blue-1 text-md">
            industry-leading investors in our funds
          </h2>
        </div>
        <div className="w-full md:max-w-48 text-center">
          <h2 className="font-lora text-custom-blue-1 text-5xl md:text-7xl mb-4">
            1.2M
          </h2>
          <h2 className="font-lora text-custom-blue-1 text-md">
            people employed by our investors' brands
          </h2>
        </div>
      </div>
      <div className="flex justify-center items-center max-w-4xl h-full mx-auto mt-20 md:mt-40 mb-20 md:mb-40 px-4">
        <p className="font-lora text-custom-blue-1 text-md text-center">
          Y&Z Ventures is a Los Angeles based multi-family office, operating as
          a direct investment vehicle + fund of funds. We are dedicated to
          supporting investments to the final stages, or the end game. Through
          our established network of M&A professionals across finance, tax, and
          legal, we support our portfolio investments through buy-side and
          sell-side exploration.
        </p>
      </div>
      <div className="mx-10 md:mx-20 mt-20 mb-20">
        <h2 className="text-center font-lora text-custom-blue-1 text-3xl md:text-4xl mb-10">Partner Industries</h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-custom-blue-1 border-custom-blue-1 border-t-2 border-b-2 pt-10 pb-10">
          <div className="text-center">
            <ul>
              <li>Engineering</li>
              <li>Construction</li>
              <li>Real Estate</li>
              <li>Security</li>
              <li>Agriculture</li>
              <li>Media & Entertainment</li>
              <li>Transportation</li>
              <li>Textiles</li>
              <li>Blockchain</li>
            </ul>
          </div>
          <div className="text-center">
            <ul>
              <li>Oil & Gas</li>
              <li>Finance</li>
              <li>Aviation</li>
              <li>Education</li>
              <li>Food & Beverage</li>
              <li>IT</li>
              <li>Retail</li>
              <li>Chemical</li>
              <li>Logistics</li>
              <li>Storage</li>
            </ul>
          </div>
          <div className="text-center">
            <ul>
              <li>Materials</li>
              <li>Hospitality</li>
              <li>Telecom</li>
              <li>Energy</li>
              <li>Automotive</li>
              <li>Healthcare</li>
              <li>Pharma</li>
              <li>Fashion</li>
              <li>Aerospace</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

import { useState } from "react";
import "./App.css";
import FlashSalePd from "./components/FlashSalePd/FlashSalePd";
import TrendingPd from "./components/TrendingPd/TrendingPd";

function App() {
  return (
    <div className="App">
      <FlashSalePd />
      <TrendingPd />
    </div>
  );
}

export default App;

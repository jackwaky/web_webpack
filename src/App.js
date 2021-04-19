import React from "react";
import Intro from "./components/Intro";
import GlobalStyle from "./global/globalstyles";
import GlobalFonts from "../src/font/fonts";
import Graph from "./components/Graph";

function App() {
  return (
    <div>
      <GlobalStyle />
      <GlobalFonts />
      <Graph />
    </div>
  );
}

export default App;

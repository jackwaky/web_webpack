import React from "react";
import Intro from "./components/Intro";
import GlobalStyle from "./global/globalstyles";
import GlobalFonts from "../src/font/fonts";

function App() {
  return (
    <div>
      <GlobalStyle />
      <GlobalFonts />
      <Intro />
    </div>
  );
}

export default App;

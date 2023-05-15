import React, { useState } from "react";
import "./App.css";
import Main from "./components/Studio/Hero/Main";
import Studio from "./components/Studio/Studio";
import Header from "./components/Header";
import Player from "./components/PlayerSection/Player";

function App() {
  const [isAuth, setIsAuth] = useState<boolean>(false);

  return (
    <div>
      {/* Header */}
      <Header />
      {/* {!isAuth ? <Main /> : <Studio />} */}
      <Player />
    </div>
  );
}

export default App;

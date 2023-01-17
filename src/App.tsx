import React from "react";
import Cards from "./components/Cards";

const App = () => {
  return (
    <div className="wrapper overlay">
      <h1 className="title">Ты сегодня покормил кота?</h1>
      <Cards />
    </div>
  );
};

export default App;

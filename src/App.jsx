// eslint-disable-next-line no-unused-vars
import { useState } from "react";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import City from "./pages/City";
import TrainStation from "./components/TrainStation";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path=":city" element={<City />}>
        <Route path = ":codeStation" element = {<TrainStation/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;

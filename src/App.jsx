import { useState, createContext } from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Game from "./pages/Game"
import Score from "./pages/Score"

import "./App.css";

export const Source = createContext(null);

function App() {
  const [player1Name, setPlayer1Name] = useState("მოთამაშე 1");
  const [player2Name, setPlayer2Name] = useState("მოთამაშე 2");
  const [player3Name, setPlayer3Name] = useState("მოთამაშე 3");

  const [mode1, setMode1] = useState(false);

  const [player1Score, setPlayer1Score] = useState(0)
  const [player2Score, setPlayer2Score] = useState(0)
  const [player3Score, setPlayer3Score] = useState(0)

  const [playerStatus, setPlayerStatus] = useState(1)


  return (
    <>
      <Source.Provider
        value={{
          player1Name,
          player2Name,
          player3Name,
          setPlayer1Name,
          setPlayer2Name,
          setPlayer3Name,
          mode1,
          setMode1,
          player1Score,
          player2Score,
          player3Score,
          setPlayer1Score,
          setPlayer2Score,
          setPlayer3Score,
          playerStatus,
          setPlayerStatus,
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Game" element={<Game />} />
          <Route path="/Score" element={<Score />} />
        </Routes>
      </Source.Provider>
    </>
  );
}

export default App;

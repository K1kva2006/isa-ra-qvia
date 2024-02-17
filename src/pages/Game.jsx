import { useContext, useEffect, useRef, useState } from "react";

import { Source } from "../App";
import moqmedebebi from "../tasksArrays/moqmedebebi";
import { useNavigate } from "react-router-dom";
import timeoutAudio from "../audio/timeout.mp3"

const Game = () => {
  const source = useContext(Source);

  const fiveSecRef = useRef(null);
  const wordsRef = useRef(null);
  const timeRef = useRef(null)

  const scorePage = useNavigate();

  const [fiveSec, setFiveSec] = useState(5);
  const [time, setTime] = useState(120);
  const [word, setWord] = useState(
    moqmedebebi[Math.floor(Math.random() * moqmedebebi.length)]
  );
  const [currentPlayer, setCurrentPlayer] = useState("");
  const [score, setScore] = useState(0);

  const timeout = new Audio(timeoutAudio)

  function changeWord(e) {
    setWord(moqmedebebi[Math.floor(Math.random() * moqmedebebi.length)]);
    if (time < 120) {
      if (e.target.className === "green" || e.target.className === "time") {
        setScore((prev) => prev + 1);
        if (source.playerStatus === 1) {
          source.setPlayer1Score((prev) => prev + 1);
        } else if (source.playerStatus === 2) {
          source.setPlayer2Score((prev) => prev + 1);
        } else if (source.playerStatus === 3) {
          source.setPlayer3Score((prev) => prev + 1);
        }
      }
    }
  }
  useEffect(() => {
    wordsRef.current.style.display = "none"
  }, [])
  useEffect(() => {
    if (source.playerStatus === 1) {
      setCurrentPlayer(source.player1Name);
    } else if (source.playerStatus === 2) {
      setCurrentPlayer(source.player2Name);
    } else if (source.playerStatus === 3) {
      setCurrentPlayer(source.player3Name);
    }
  }, []);

  useEffect(() => {
    const fiveTime = setInterval(() => {
      setFiveSec(prev => prev - 1)
    }, 1000);
    if(fiveSec === 0) {
      clearInterval(fiveTime)
      fiveSecRef.current.style.display = "none"
      wordsRef.current.style.display = "inline-block"
    }
    return () => clearInterval(fiveTime);
  }, [fiveSec]);

  useEffect(() => {
    const timer = setInterval(() => {
      if (fiveSec === 0) setTime((prev) => prev - 1);
    }, 1000);
    if (time === 0) {
      clearInterval(timer);
      scorePage("/Score");
    }
    return () => clearInterval(timer);
  }, [time, fiveSec]);

  useEffect(() => {
    if(time <= 10) {
      timeRef.current.style.color = "red"
      timeout.play()
    }
  }, [time])

  return (
    <>
      <div className="game-wrapper">
        <div className="red" onClick={changeWord}>
          <span>
            ქულა: <span>{score}</span>
          </span>
          <span className="playerName">{currentPlayer}</span>
        </div>
        <div className="green" onClick={changeWord}>
          <span className="time">
            დრო: <span ref={timeRef}>{time}</span>
          </span>
        </div>
        <span className="fiveSec" ref={fiveSecRef}>
          {fiveSec}
        </span>
        <span className="word" ref={wordsRef}>
          {word}
        </span>
      </div>
    </>
  );
};

export default Game;

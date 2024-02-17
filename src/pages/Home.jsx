import { useContext, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Source } from "../App";

import Rules from "../components/Rules"
const Home = () => {
  const source = useContext(Source);
  const startGame = useRef(null);

  const [rulesStatus, setRulesStatus] = useState(false)


  function changePlayerName(e, playerState) {
    playerState(e.target.value);
  }
  return (
    <>
      <div className="home-wrapper">
        <h1>ისა რა ქვია</h1>
        <button className="rules-button" onClick={() => {
          rulesStatus ? setRulesStatus(false) : setRulesStatus(true)
        }}> წესები </button>
        {
          rulesStatus && <Rules />
        }
        <h4 style={{textAlign: "center"}}>დაიჭირეთ მობილური ჰორიზონტალურად (კარგი ექსფერიენსისთვის)</h4>
        <div className="mode-wrapper">
          <h2>რეჟიმი</h2>
          <div className="modes">
            <button
              onClick={() => {
                source.setMode1(true);
                startGame.current.removeAttribute("disabled");
                
              }}
              className="game-mode"
            >
              მოქმედებებით მინიშნება
            </button>
          </div>
        </div>
        <div className="names-wrapper">
          <h2>შეიყვანეთ მოთამაშეების სახელები</h2>
          <input
            type="text"
            onChange={(e) => changePlayerName(e, source.setPlayer1Name)}
            value={source.player1Name}
            className="name-input"
          />
          <input
            type="text"
            onChange={(e) => changePlayerName(e, source.setPlayer2Name)}
            value={source.player2Name}
            className="name-input"
          />
          <input
            type="text"
            onChange={(e) => changePlayerName(e, source.setPlayer3Name)}
            value={source.player3Name}
            className="name-input"
          />

          <div className="start-game-wrapper">
            <Link to={"/Game"}>
              <button ref={startGame} disabled className="start-game">
                {" "}
                თამაშის დაწყება
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

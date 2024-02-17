import { useContext } from "react";
import { Link } from "react-router-dom";
import { Source } from "../App";

const Score = () => {
  const source = useContext(Source);
  return (
    <>
      <div className="stage-wrapper">
        <div className="table-container">
          <div className="table">
            <span>{source.player1Name}</span>
            <span className="barrier"></span>
            <span>{source.player1Score}</span>
          </div>
          <div className="table">
            <span>{source.player2Name}</span>
            <span className="barrier"></span>
            <span>{source.player2Score}</span>
          </div>
          <div className="table">
            <span>{source.player3Name}</span>
            <span className="barrier"></span>
            <span>{source.player3Score}</span>
          </div>
        </div>
        <div className="stage-buttons">
          <Link onClick={() => {
          if(source.playerStatus === 1) {
            source.setPlayerStatus(2)
          } else if(source.playerStatus === 2) {
            source.setPlayerStatus(3)
          } else if(source.playerStatus === 3) {
            source.setPlayerStatus(1)
          }
          }} to={"/Game"} className="stage-buttons-play">
            შემდეგ მოთამაშეზე გადასვლა
          </Link>
          <Link onClick={() => {
            source.setPlayerStatus(1)

            source.setPlayer1Score(0)
            source.setPlayer2Score(0)
            source.setPlayer3Score(0)
          }} to={"/"} className="stage-buttons-reset">
            ხელახლა დაწყება / რესტარტი (ქულები ნულდება)
          </Link>
        </div>
      </div>
    </>
  );
};

export default Score;

import React from "react";
import Timer from '../Timer';

function Stats(props) {
  
  return (
    <div className="row stats-block">
      <h2>Wins: {props.wins}</h2>
      <h2>Losses: {props.losses}</h2>
      
      {props.play ? <Timer timer={props.timer} /> : <button onClick={props.init}>Play</button>}
    </div>
  );

}

export default Stats;

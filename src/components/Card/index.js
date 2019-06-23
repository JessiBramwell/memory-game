import React from "react";

function Card(props) {
  
  let image, matchedClass;

  // if active status == true cards flip
  (props.active || props.matched) ? image = `./img/card-${props.pairId}.png` : image = "./img/back.png"
  
  // if matched status == true cards add class
  props.matched ? matchedClass = "matched" : matchedClass = "";


  return (
    <div className="col-md-3 col-sm-6">
      <div className={`single-card d-flex justify-content-center ${matchedClass}`} onClick={() => props.guess(props.id)}>
        <img src={image} alt="" />
      </div>
    </div>
  );

}

export default Card;
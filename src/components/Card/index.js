import React from "react";

function Card(props) {

  return (
    <div className="col-sm-4">
      <div className="card text-center">
        <div className="card-header bg-primary text-white">
          {props.id}
        </div>
        <div className="card-body">
          {props.pairId}
          {/* <p className="card-text">Click Count: {this.state.count}</p>
        <button className="btn btn-primary" onClick={this.handleIncrement}>
          Increment
          </button> */}
        </div>
      </div>
    </div>
  );

}

export default Card;
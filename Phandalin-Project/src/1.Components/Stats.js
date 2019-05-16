import React, { Component } from "react";
import { connect } from "react-redux";

class _Stats extends Component {
  constructor(props) {
    super(props);
    this.state = { potionDiv: "", blueDiv: "blue" };
  }

  /*************** FUNCTIONS **********************************/

  //potion
  usePotion = () => {
    console.log("button pressed");
    if (this.props.consumables.potion.number <= 0) {
      console.log("no potions :)");
      return;
    } else {
      this.props.dispatch({
        type: "UsePotion",
        content: 1
      });
    }
  };

  /*************** RENDER **********************************/

  render() {
    return (
      <div
        className="stats"
        style={{
          width: "30em",
          border: "solid",
          borderRadius: "1em",
          margin: "1em",
          padding: "1em",
          backgroundColor: "#eee"
        }}
      >
        <h3 style={{ marginTop: "-0.5em" }}>Stats</h3>
        <p style={{ textDecoration: "underline" }}>
          {this.props.playerName.toUpperCase()}
        </p>
        <div>
          {" "}
          HP: <span style={{ color: "red" }}>{this.props.HP} / 35</span>
        </div>
        <div>
          Gold: <span style={{ color: "#b09514" }}>{this.props.gold}</span>
        </div>
        <div>
          Exp: <span style={{ color: "green" }}>{this.props.exp}</span>
        </div>
        <div style={{ borderTop: "solid", marginTop: "1em" }}>
          <h3 style={{ marginTop: "0.5em" }}>Inventory</h3>
          <ul style={{ listStyleType: "none" }}>
            <li>
              Potion:
              {this.props.consumables.potion.number}
            </li>
          </ul>
          <div>
            <button onClick={this.usePotion}>Restore HP</button>
          </div>
        </div>
      </div>
    );
  }
}

let mapStateToProps = function(state) {
  return {
    HP: state.HP,
    weapon: state.weapon,
    gold: state.gold,
    exp: state.exp,
    playerName: state.playerName,
    consumables: state.consumables,
    potion: state.potion
  };
};

const Stats = connect(mapStateToProps)(_Stats);
export default Stats;

import React, { Component } from "react";
import { connect } from "react-redux";

class _Chapter1v2 extends Component {
  //Resource gathering in a forest populated with goblins.
  constructor(props) {
    super(props);
    this.state = {
      goblin1: 15,
      combat_log_enemy: "",
      combat_log_player: "",
      showLine: "none"
    };
  }

  /*************** FUNCTIONS **********************************/
  componentDidMount() {
    this.props.dispatch({
      type: "checkpoint",
      content: 1.3
    });
  }

  /*************** RENDER **********************************/

  render() {
    console.log("Propsidou :", this.props);
    console.log("checkpoint :", this.props.checkpointChapter);

    this.attack = () => {
      this.setState({
        showLine: "block",
        combat_log_enemy:
          "The goblin received " +
          this.props.weapon.damage +
          " points of damage.",
        goblin1: this.state.goblin1 - this.props.weapon.damage,
        combat_log_player:
          "Player takes 3 points of damage, player's current HP: " +
          (this.props.HP - 3)
      });
      this.props.dispatch({
        type: "lose HP",
        content: 3
      });
    };

    /**************************************** WON - WON - WON ************************************************/

    if (this.state.goblin1 <= 0) {
      return (
        <div className="main-container">
          <div
            className="chapter"
            style={{
              border: "solid",
              borderRadius: "1em",
              margin: "1em",
              padding: "1em",
              backgroundColor: "#eee"
            }}
          >
            <h3 style={{ marginTop: "-0.5em" }}>
              Chapter 1.3 - Resource gathering
            </h3>
            <p>The goblin is dead.</p>
          </div>
          <div
            style={{
              border: "solid",
              borderRadius: "1em",
              margin: "1em",
              padding: "1em",
              backgroundColor: "#eee"
            }}
          >
            {" "}
            <h3>What do you do? </h3>
            <div style={{}}>
              <div>
                <button
                  onClick={this.toChapter1}
                  style={{
                    margin: "1em",
                    padding: "0",
                    border: "none",
                    background: "none",
                    textDecoration: "underline",
                    color: "royalBlue",
                    cursor: "pointer"
                  }}
                >
                  HOOOOOOO!!!
                </button>
              </div>
              <div />
            </div>
          </div>
        </div>
      );
    }

    /**************************************** COMBAT - COMBAT - COMBAT ************************************************/

    return (
      //
      /**************************************** CHAPTER ************************************************/
      <div className="main-container">
        <div
          className="chapter"
          style={{
            border: "solid",
            borderRadius: "1em",
            margin: "1em",
            padding: "1em",
            backgroundColor: "#eee"
          }}
        >
          <h3 style={{ marginTop: "-0.5em" }}>
            Chapter 1.3 - Resource gathering
          </h3>
          <p>The goblin stands before you, ready to attack.</p>
          <p>
            Keep an eye on your HP, in the right section. Should it fall below
            0, you would die. If you find you are nearing death, use a potion
            from your inventory, if possible.
          </p>
          <div style={{ color: "red" }}>{this.state.combat_log_enemy}</div>
          <div style={{ display: this.state.showLine }}>{"------------"}</div>
          <div style={{ color: "green" }}>{this.state.combat_log_player}</div>
          <button onClick={this.attack}>Attack</button>
        </div>
      </div>
    );
  }
}

let mapStateToProps = function(state) {
  return {
    checkpointChapter: state.checkpointChapter,
    HP: state.HP,
    weapon: state.weapon,
    gold: state.gold,
    exp: state.exp
  };
};

const Chapter1v2 = connect(mapStateToProps)(_Chapter1v2);
export default Chapter1v2;

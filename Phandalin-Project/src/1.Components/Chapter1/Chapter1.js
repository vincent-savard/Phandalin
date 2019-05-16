import React, { Component } from "react";
import { connect } from "react-redux";

class _Chapter1 extends Component {
  //Resource gathering in a forest populated with goblins.
  constructor(props) {
    super(props);
    this.state = {};
  }

  /*************** FUNCTIONS **********************************/
  componentDidMount() {
    this.props.dispatch({
      type: "checkpoint",
      content: 1
    });
  }

  toChapter1v2 = () => {
    this.props.dispatch({
      type: "chapter1v2",
      content: 1.2
    });
  };

  /*************** RENDER **********************************/

  render() {
    return (
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
            Chapter 1 - Resource gathering
          </h3>{" "}
          <p>
            You hail the group of men, tell them to drop what they are doing and
            ask them to fetch wood chopping tools while you get a horse and
            wagon.
          </p>
          <p>
            You get to the center of town, where things are livelier then ever;
            people are talking everywhere, the sound of tools against material
            is heard from every angle, kids are playing and some people set up a
            tent to use as a temporary kitchen.
          </p>
          <p>
            You approach the stables, located right beside the forge, and ask
            for a work horse and a sleigh: you are going to chop down trees and
            need a means of transportation to bring them back here. The smith
            holler at you that he will set up a small sawmill in the destroyed
            house not far from there. He shouts to his apprentices to drop their
            hammer and give him a hand.
          </p>
          <p>
            "We need to have this sawmill finished by the end of tomorrow! Get
            saws and nails 'prentices!", he shouts.
          </p>
          <p>
            The stable master loses no time in preparing a sleigh and brings the
            horse to you. You are all set and return to the group of newly
            appointed lumberjacks, by the forest entrance.
          </p>
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
                onClick={this.toChapter1v2}
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
                Lead your group in the forest
              </button>
            </div>
            <div />
          </div>
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

const Chapter1 = connect(mapStateToProps)(_Chapter1);
export default Chapter1;

import React, { Component } from "react";
import { connect } from "react-redux";

class _Chapter1v2 extends Component {
  //Resource gathering in a forest populated with goblins.
  constructor(props) {
    super(props);
    this.state = {};
  }

  /*************** FUNCTIONS **********************************/
  componentDidMount() {
    this.props.dispatch({
      type: "checkpoint",
      content: 1.2
    });
  }

  toChapter1v3 = () => {
    this.props.dispatch({
      type: "chapter1v3",
      content: 1.3
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
            Chapter 1.2 - Resource gathering
          </h3>
          <p>
            After about twenty minutes of walking amongst the trees, you get to
            a clearing where youcould set up a lumber camp. The men start to
            make the tents, one Redbrand starts a fire and unpack some cooking
            gear to feed the lumberjacks, while you and two other start to mark
            some trees for cutting.
          </p>
          <p>
            An hour passed and trees finally start to hit the ground. Everthing
            goes smoothly, the Redbrands are in high spirits as they sing along
            while swinging their axe. As you watch them working and having lots
            of fun, you begin to think you did the right thing to stay behind in
            Phandalin, you already feel at home. Your thoughts continue to drift
            and it gets to a point where you are surprised by the fact you are
            thinking about hanging your sword and just live a normal life.
          </p>
          <p>
            This dream of retiring from a life of combat, war and violence is
            somewhat short lived though, as you hear one of the Redbrands
            shouting.
          </p>
          <p>"Goblin!", shouts-he, as you get up.</p>
          <p>
            The men all gather around the kitchen fire, readiying their axe. As
            you approach them, trying to catch a glimpse of the goblin in trees,
            you finally see a small heap of green flesh, dressed in rags, a bow
            in hands.
          </p>
          <p>
            "He is only a lone scout" you thought to yourself. The noise from
            the lumber camp must have brought some unwanted attention. As you
            study the goblin, you find that he is a young pup, a kid. He looks
            as if he was afraid. You try to talk to him from a distance, but
            realize that he must be too young of age to have had the time to
            learn the basics of the common thongue.
          </p>
          <p>
            You begin to slowly walk towards him, your blade still in it's
            scabbard, gesturing you mean him no harm.
          </p>
          <p>
            The goblin leaves his post, and looks confused. Reluctantly, he puts
            his bow away. Relieved, you continue making your way to him, but you
            stop as you see him taking out a hunting knife from the rags he's
            wearing. You gesture to him that you mean no harm. He looks at you,
            his young eyes wet from tears and he gestures "no" with his head. He
            is sobbing as he raises his blade and starts in your direction.
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
                onClick={this.toChapter1v3}
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
                Unsheathe your sword and meet the goblin
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

const Chapter1v2 = connect(mapStateToProps)(_Chapter1v2);
export default Chapter1v2;

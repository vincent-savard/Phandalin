import React, { Component } from "react";
import { connect } from "react-redux";

class _Intro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      intro: "state intro",
      goblinAHP: 20,
      combat_log_enemy: "",
      combat_log_player: ""
    };
  }

  /*************** FUNCTIONS **********************************/

  testWeapon = () => {
    console.log("The equipped weapon is:", this.props.weapon.name);
  };

  toChapter1 = () => {
    this.props.dispatch({
      type: "chapter1",
      content: 1
    });
  };

  loseHalf = () => {
    this.props.dispatch({
      type: "lose Half",
      content: 25
    });
  };

  /*************** RENDER **********************************/

  render() {
    /*************** CONDITIONALS **********************************/

    return (
      /**************************************** CHAPTER ************************************************/
      <div>
        <div
          style={{
            border: "solid",
            borderRadius: "1em",
            margin: "1em",
            padding: "1em",
            backgroundColor: "#eee"
          }}
        >
          <h3 style={{ marginTop: "-0.5em" }}>Intro</h3>
          <p>
            A week has passed since your band of mercenaries helped to reclaim
            the lost mine of Phandelver. With a considerable fortune now filling
            the coffers, your company disbanded and your fellow brothers-in-arms
            retired, some returned to Neverwinter, others made it back to
            Baldur's Gate.
          </p>
          <p>
            The events that led to the claiming of the mine did not left the
            land unscathed. The frontier town of Phandalin is now a vestige of
            what it once was. Still longing for adventure, you decided to stay
            in order to help the town people rebuild their home.{" "}
          </p>
          <p>
            The small ruffian militia that was the Redbrand, now without a
            leader, in an attempt to repent for the trouble they caused around
            the town, united under your command and are leading the rebuilding
            effort.
          </p>
          <p>
            As you were looking at the new irrigation plans for the farmland, a
            worker came to you, with a sorry look in his face.
          </p>
          <p>
            " I'm sorry to bother you mister warrior... I'm the foreman assigned
            to the townhall. My men are all sitting on their asses, claiming
            that there is not enough wood to continue the repairs. I took a walk
            to the stockpile, and they are quite right... at this rate, if help
            from Neverwinter doesn't come soon, we will be without any materials
            to go on. I'm talking about wood, stone, minerals... What do you
            suggest? "
          </p>
          <p>
            You look at the foreman with a pensive look. One of your newly
            retired friend, on his way to Neverwinter did tell you he was to
            send help in the guise of gold or materials. You did not think you
            would burn through what little you had in the stockpile that fast.
            Those Redbrand are proving to be quite motivated under the right
            leader. You ask the foreman what would be the priority right now.
          </p>
          <p>"Definitely wood", he answered you without any hesitation</p>
          <p>
            The forests around Phandalin are not under any jurisdiction, so you
            decided to start there. You turn your head around to see if any of
            the Redbrands could help you with this task. You see a small gang,
            all dressed in red, busy at digging the foundation of what will
            become the new trade post.
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
                Get the men and get some wood
              </button>
            </div>
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

const Intro = connect(mapStateToProps)(_Intro);
export default Intro;

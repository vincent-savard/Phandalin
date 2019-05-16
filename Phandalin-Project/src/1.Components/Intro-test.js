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

    if (this.state.goblinAHP <= 0) {
      return (
        <div>
          <p>Enemy died, you received 5 gold and 5 exp.</p>
          <button>continue</button>
        </div>
      );
    }

    this.attack = () => {
      this.setState({
        combat_log_enemy:
          "The goblin received " +
          this.props.weapon.damage +
          " points of damage. Goblin's remaining HP: " +
          (this.state.goblinAHP - this.props.weapon.damage),
        goblinAHP: this.state.goblinAHP - this.props.weapon.damage,
        combat_log_player:
          "Player takes 3 points of damage, player's current HP: " +
          (this.props.HP - 3)
      });
      this.props.dispatch({
        type: "lose HP",
        content: 3
      });
    };

    if (this.props.HP <= 0) {
      return <div> You died. </div>;
    }
    return (
      <div>
        <div>
          <p>
            Here is your HP:{" "}
            <span style={{ color: "red" }}>{this.props.HP}.</span>
          </p>
          <p>
            Should your HP drop below <span style={{ color: "red" }}>0</span>,
            you will die.
          </p>
          <button onClick={this.loseHalf}>lose 25 hp</button>
          <button onClick={this.testWeapon}>Test Weapon</button>
        </div>
        <div>
          <p>
            Before you stands a goblin. Goblin's HP:{" "}
            <span style={{ color: "red" }}>{this.state.goblinAHP}.</span>
          </p>
          <p style={{ color: "red" }}>{this.state.combat_log_enemy}</p>
          <p style={{ color: "green" }}>{this.state.combat_log_player}</p>
          <button onClick={this.attack}>Attack</button>
          <button onClick={this.toChapter1}>To chapter 1</button>
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
    exp: state.exp
  };
};

const Intro = connect(mapStateToProps)(_Intro);
export default Intro;

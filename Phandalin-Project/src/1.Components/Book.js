import React, { Component } from "react";
import { connect } from "react-redux";
/*************** COMPONENTS **********************************/
import Intro from "./Intro";
import Chapter1 from "./Chapter1/Chapter1";
import Chapter1v2 from "./Chapter1/Chapter1v2";
import Chapter1v3 from "./Chapter1/Chapter1v3";

class _Book extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  /*************** FUNCTIONS **********************************/

  /*************** RENDER **********************************/

  render() {
    if (this.props.currentChapter === 0) {
      return (
        <div style={{ width: "85em" }}>
          <Intro />
        </div>
      );
    } else if (this.props.currentChapter === 1) {
      return (
        <div style={{ width: "85em" }}>
          <Chapter1 />
        </div>
      );
    } else if (this.props.currentChapter === 1.2) {
      return (
        <div style={{ width: "85em" }}>
          <Chapter1v2 />
        </div>
      );
    } else if (this.props.currentChapter === 1.3) {
      return (
        <div style={{ width: "85em" }}>
          <Chapter1v3 />
        </div>
      );
    } else {
      return <div>Something bad happened</div>;
    }
  }
}

let mapStateToProps = function(state) {
  return {
    currentChapter: state.currentChapter,
    HP: state.HP,
    weapon: state.weapon
    //state.todos is the same todos element from the store.
  };
};

const Book = connect(mapStateToProps)(_Book);
export default Book;

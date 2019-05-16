import React, { Component } from "react";
import "./App.css";
import { createStore } from "redux";
import { Provider } from "react-redux";
/********************** Components ****************************/

import Book from "./1.Components/Book";
import Stats from "./1.Components/Stats";

/********* REDUCER **********/

let reducer = function(state, action) {
  if (action.type === "checkpoint") {
    //return todos as it is, plus it concats the new todo item.
    return { ...state, checkpointChapter: action.content };
  }
  if (action.type === "UsePotion") {
    //return todos as it is, plus it concats the new todo item.
    return {
      ...state,
      consumables: state.consumables.potion - action.content,
      HP: 35
    };
  }
  if (action.type === "lose HP") {
    //return todos as it is, plus it concats the new todo item.
    return { ...state, HP: state.HP - action.content };
  }
  if (action.type === "chapter1") {
    return { ...state, currentChapter: 1 };
  }
  if (action.type === "chapter1v2") {
    return { ...state, currentChapter: 1.2 };
  }
  if (action.type === "chapter1v3") {
    return { ...state, currentChapter: 1.3 };
  }
  return state;
};

/********* STORE **********/

//Store always takes 3 arguments, the reducer, the initial state, and : window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()+
//When placing the PROVIDER, specify the store!!!!
let myStore = createStore(
  reducer,
  {
    currentChapter: 0,
    checkpointChapter: 0,
    playerName: "Drizzt",
    HP: 35,
    weapon: {
      name: "short sword",
      damage: 5
    },
    gold: 250,
    exp: 0,
    consumables: {
      potion: { number: 1 }
    },
    inventory: ["wood", "iron"]
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

/********* APP **********/
class App extends Component {
  render() {
    return (
      <Provider store={myStore}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around"
          }}
        >
          <div style={{ marginTop: "2em" }}>
            <Book />
          </div>
          <div style={{ marginTop: "2em" }}>
            <Stats />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;

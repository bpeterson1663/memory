import * as React from "react";
import { hot } from "react-hot-loader";
import "./App.css";
import Welcome from "./components/Welcome";
const App = () => {
    return (
        <div className="App">
            <h1>Memory Game</h1>
            <Welcome firstName="Brady" lastName="Peterson"/>
        </div>
    );
    
}

export default hot(module)(App);
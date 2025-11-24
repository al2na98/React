import "./App.css";
import Clicker from "./Clicker";
import WithRef from "./Ref";
import Timer from "./Timer";
import React, { useState } from "react"; //useState- хук - используй состояние

function App() {
    const [isClicker, setClicker] = useState(false);
    return (
        <div className="App">
            <h2>Raact App</h2>
            <button onClick={() => setClicker(!isClicker)}>
                Toggle Clicker
            </button>
            {isClicker && <Clicker />}
            <WithRef />
            <Timer />
        </div>
    );
}

export default App;

import "./App.css";
//import { State } from "./hooks/State";
//import { Effect } from "./hooks/Effect";
import { Context } from "./hooks/Context";
import { Books } from "./components/Books";

function App() {
    return (
        <div className="App">
            {/* <State /> */}
            {/* <Effect /> */}
            <Context>
                <Books />
            </Context>
        </div>
    );
}

export default App;

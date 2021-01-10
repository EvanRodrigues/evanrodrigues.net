import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./stylesheets/css/App.css";
import { Home } from "./pages/Home";
import { LumiAero } from "./pages/LumiAero";

function App() {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/lumiaero" component={LumiAero} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;

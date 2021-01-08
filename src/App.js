import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./stylesheets/css/App.css";
import { Home } from "./pages/Home";
import { ProjectPage } from "./pages/ProjectPage";

function App() {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/project" component={ProjectPage} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;

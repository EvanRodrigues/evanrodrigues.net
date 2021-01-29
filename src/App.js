import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./stylesheets/css/App.css";
import { Home } from "./pages/Home";
import { LumiAero } from "./pages/LumiAero";
import { BmaWebsite } from "./pages/BmaWebsite";
import { SongList } from "./pages/SongList";
import { StreamTools } from "./pages/StreamTools";
import { EmoteComboDisplay } from "./pages/EmoteComboDisplay";
import { IRCBot } from "./pages/IRCBot";

function App() {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/lumiaero" component={LumiAero} />
                    <Route path="/bma-website" component={BmaWebsite} />
                    <Route path="/song-list" component={SongList} />
                    <Route path="/stream-tools" component={StreamTools} />
                    <Route
                        path="/emote-combo-display"
                        component={EmoteComboDisplay}
                    />
                    <Route path="/irc-bot" component={IRCBot} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;

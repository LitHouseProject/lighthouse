import "./App.css";
import NavBar from "./components/Navbar/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./components/Pages/Home";
import { Color } from "./components/Pages/Color";
import { Pattern } from "./components/Pages/Pattern";
import { About } from "./components/Pages/About";

function App() {
  return (
    <>
      <Router>
      
        <NavBar />
        <div className="pages">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/color" component={Color} />
            <Route path="/function" component={Pattern} />
            <Route path="/about" component={About} />
          </Switch>
        </div>
        
      </Router>
    </>
  );
}

export default App;

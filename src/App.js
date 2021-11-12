import "./App.css";
import NavBar from "./components/Navbar/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./Pages/Home";
import { Color } from "./Pages/Color";
import { About } from "./Pages/About";
import PatternPage  from './Pages/pattern/pattern.component'


function App() {
  return (
    <>
      <Router>
      
        <NavBar />
        <div className="pages">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/color" component={Color} />
            <Route path="/pattern" component={PatternPage} />
            <Route path="/about" component={About} />
          </Switch>
        </div>
        
      </Router>
    </>
  );

}

export default App;

import "./App.css";
import NavBar from "./components/Navbar/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Color } from "./Pages/Color";
import PatternPage  from './Pages/pattern/pattern.component';
import React, { useEffect, useState, createContext, useRef } from 'react';

export const AppPatternContext = createContext('');

function App() {

  const [selectedColor, setColor] = useState('3cd6bf');
  const [selectedPattern, setPattern] = useState('Color Wipe');

  const updateSelectedPattern = (updatedPattern) => {
    setPattern(updatedPattern);
  }

  const updateSelectedColor = (updatedColor) => {
    setColor(updatedColor);
  };

  // send json object to backend
  // useEffect( () => {
  //   fetch('/api', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json;charset=utf-8'
  //     },
  //     'body': JSON.stringify({
  //       'color': selectedColor,
  //       'pattern': selectedPattern
  //     })
  //   })
  //   .then(
  //     response => {
  //       if (response.ok) {
  //         return response.json();
  //       }
  //     }
  //   )
  // }, []);

  return (
    <>

    <AppPatternContext.Provider value={{ 
      setPattern: updateSelectedPattern,
      selectedColor: selectedColor,
      selectedPattern: selectedPattern
    }}>
    
      <Router>
        <NavBar />
        <div className="pages">
          <Switch>
            <Route exact path="/" render={
              () => (<Color selectedColor={selectedColor} setSelectedColor={updateSelectedColor} />) 
            } />
            <Route path="/pattern" component={PatternPage} />
          </Switch>
        </div>    
      </Router>
    
      </AppPatternContext.Provider>
    </>
  );

}

export default App;

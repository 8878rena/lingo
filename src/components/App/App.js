import './App.css';
import React, {useState} from "react";
import {Header} from '../header/header';
import {Home} from '../home/home';
import {Exercises} from '../exercises/exercises';
import {Scores} from '../scores/scores';
import {
  HashRouter,
  Routes,
  Route,
  } from "react-router-dom";

export const Context = React.createContext("");
export const Context2 = React.createContext("");
export const Context3 = React.createContext("");


function App() {
  const [language, setLanguage] = useState("");
  const [score, setScore]=useState(0);
  const [scoresArray, setScoresArray]= useState([]);
  return (
    <div>
      <Context.Provider value = {{language, setLanguage}} >
      <Context2.Provider value ={{score, setScore}}>
      <Context3.Provider value={{scoresArray, setScoresArray}}>
    <HashRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/exercises" element={<Exercises />}></Route>
          <Route path="/scores" element= {<Scores />}></Route>
        </Routes>
      </HashRouter></Context3.Provider></Context2.Provider></Context.Provider>
      </div>
  );
}

export default App;

import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";
import { getTodo } from "./api";

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      const todos = await getTodo("609a87dd8e2f5715a9bd262e");
      setItems(todos);
    };
    fetchItems();
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>{items.text}</p>
      </header>
    </div>
  );
}

export default App;

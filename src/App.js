import './App.css';
import { useState } from 'react';

const arr = [
  { word: "React", meaning: "A JavaScript library for building user interfaces." },
  { word: "Component", meaning: "A reusable building block in React." },
  { word: "State", meaning: "An object that stores data for a component." }
];

function App() {
  const [dictionary, setDictionary] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const searchHandler = (e) => {
    e.preventDefault();
    const result = arr.find(
      (item) => item.word.toLowerCase() === searchTerm.toLowerCase()
    );
    if (result) {
      setDictionary(result.meaning);
    } else {
      setDictionary("Word not found in the dictionary.");
    }
  };

  return (
    <div className="app">
      <h1>Dictionary App</h1>
      <div className="search-container">
        <input 
          type="text" 
          value={searchTerm} 
          onChange={(e) => setSearchTerm(e.target.value)} 
          className="searchbar" 
        />
        <button onClick={searchHandler}>Search</button>
      </div>
      <h4>Definition</h4>
      <p>{dictionary}</p>
    </div>
  );
}

export default App;

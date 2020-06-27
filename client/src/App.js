import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {
  const [items, setItems] = useState([]);

  const getItems = async () => {
    const lists = await fetch('/list');
    const response = await lists.json();

    console.log(response);
    setItems(response.data);
  };

  useEffect(() => {
    getItems();
  }, []);

  return (
    <div className="App">
      {items.map(item => (
        <div key={item.id}>
          <div>{item.attributes.condition}</div>
          <div>{item.attributes.links.image}</div>
        </div>
      ))}
    </div>
  );
}

export default App;

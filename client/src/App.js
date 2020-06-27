import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {
  const [items, setItems] = useState([]);

  const getItems = async () => {
    const lists = await fetch('/api/items');
    const response = await lists.json();

    setItems(response.data);
  };

  useEffect(() => {
    getItems();
  }, []);

  return (
    <div className="App">
      {items.map(item => (
        <div key={item.id}>
          <h1>Hello</h1>
          <div>{item.attributes.condition}</div>
          <div>{item.attributes.links.image}</div>
        </div>
      ))}
    </div>
  );
}

export default App;

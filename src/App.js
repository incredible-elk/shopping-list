import React from 'react';
import './App.css';
import StoreComponent from './Store';

function App() {
  const stores = ['Rewe', 'Aldi'];
  const shoppingList = [
    ['1x Brot', '3x Milch'],
    ['5x Äpfel', '3x Birnen'],
  ];

  return (
    <div className="App">
      <header className="App-header">
        <h1>Sylvia & Stephi need Food! 🍔🥦</h1>
        <ol>
          <StoreComponent storeName={stores[0]} itemList={shoppingList[0]} />
          <StoreComponent storeName={stores[1]} itemList={shoppingList[1]} />
        </ol>
      </header>
    </div>
  );
}

export default App;

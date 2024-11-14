// ALI KAZEM MAHDY
//IN this lab i use three  components ,parent component and two child components , I use onIncrease and onDecrese to send from  parent component to handle from Decrease and Increase function
import React, { useState, useEffect } from 'react';
import './App.css';
import Increase from './Increase';
import Decrease from './Decrease';

function App() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [countY, setCountY] = useState(0);
  const [countX, setCountX] = useState(0);
  const [name, setName] = useState('');
  const [submittedName, setSubmittedName] = useState('');

  useEffect(() => {
    setCountY(countY + 1);

    return () => {
      console.log(`Cleaning up after y: ${y}`); // I write this to show how useEffect every time y changes and countY is incremented.
    };
  }, [y]);

  useEffect(() => {
    setCountX(countX + 1); // I write this to show how useEffect every time x changes and countX is incremented.

    return () => {
      console.log(`Cleaning up after x: ${x}`);
    };
  }, [x]);

  const handleIncreaseX = () => {
    setX(prevX => prevX + 1); // Function to increase x and update x to the new value.
  };

  const handleDecreaseX = () => {
    setX(prevX => prevX - 1); // Function to decrease x and update to new value.
  };

  const handleIncreaseY = () => {
    setY(prevY => prevY + 1); // Function to increase y and update to new value.
  };

  const handleDecreaseY = () => {
    setY(prevY => prevY - 1); // Function to decrease y and update to new value.
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // I use it to Prevent the page from reloading and send the data to the server.
    setSubmittedName(name); // Update name to the new value after submitted
    console.log(`Name submitted: ${name}`);
  };

  return (
    <div className="App">
      <Increase onIncrease={handleIncreaseX} label="+X" />
      <Decrease onDecrease={handleDecreaseX} label="-X" />
      <br />
      <Increase onIncrease={handleIncreaseY} label="+Y" />
      <Decrease onDecrease={handleDecreaseY} label="-Y" />

      <h1>X: {x}</h1>
      <h1>Y: {y}</h1>
      <h3>Ychanged = {countY}</h3>
      <h3>Xchanged = {countX}</h3>

      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <button type="submit">Submit</button>
      </form>

      <h2>Submitted Name: {submittedName}</h2> {/* Display the submitted name */}
    </div>
  );
}

export default App;

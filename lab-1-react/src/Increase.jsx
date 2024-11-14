import React from 'react';
// Child component and the props are onIncrease and label

function Increase({ onIncrease, label }) {
 //When the button is clicked, the onIncrease function is called

  return <button onClick={onIncrease}>{label}</button>;
}

export default Increase;
// Exports the Increase component as default export

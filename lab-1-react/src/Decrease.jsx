import React from 'react';
// Child component and the props are onDecrease and label
function Decrease({ onDecrease, label }) {
   //When the button is clicked, the onDecrease function is called

  return <button onClick={onDecrease}>{label}</button>;
}
// Exports the Decrease component as default export

export default Decrease;

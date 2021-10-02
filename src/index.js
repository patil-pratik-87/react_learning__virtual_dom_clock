import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
// inspect the element in dev tools for change. You will notice only the required tag changing rather than the entire DOM.
// Enable Rendering >> Paint Flashing to see DOM updates on  screen

function tick() {
  // Vaniall Js Clock
  document.getElementById('js-element').innerHTML = `
    <div class="container">
      <h1> Javascript Clock </h1>
      <div class="clock">
        <h2>${new Date().toLocaleTimeString()}</h2>
      </div>
    </div>`;

  // React Clock
  const element = (
    <div className="container">
      <h1> React Clock </h1>
      <div className="clock">
        <h2>{new Date().toLocaleTimeString()}</h2>
      </div>
    </div>
  );
  ReactDOM.render(element, document.getElementById('react-element'));
}

setInterval(tick, 1000);

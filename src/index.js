import React from 'react';
import ReactDOM from 'react-dom';

function tick() {
  const element = (
    <div>
      <h2>The time is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  // highlight-next-line
  ReactDOM.render(element, document.getElementById('root'));
}

setInterval(tick, 1000);

// vs

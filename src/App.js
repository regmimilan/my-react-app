import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My React App</h1>
        <p>This is a simple React project.</p>
        <div>
          <button onClick={increment}>Click me</button>
          <p>You clicked {count} times</p>
        </div>
      </header>
    </div>
  );
}

export default App;

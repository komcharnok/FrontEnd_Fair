import React from "react";
import './App.css';

import AppRouter from './routes/AppRouter';

function App() {
  return (
    <div data-theme="light" className="continer mx-auto">
      <AppRouter />
    </div>
  );
}

export default App;

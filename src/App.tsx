import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import ViewContainer from './routes/ViewContainer';

function App() {
  return (
    <Router>
    <ViewContainer/>
    </Router>
  );
}

export default App;

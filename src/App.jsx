import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ContactForm from './components/ContactForm';
import Routes from './routes';


import './App.css'

const App = () => {
  return (
    <Router>
      <ContactForm />
      <Routes />
    </Router>
  );
};

export default App;

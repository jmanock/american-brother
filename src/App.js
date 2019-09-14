import React from 'react';
import Header from './Components/Navbar/Header';
import About from './Components/About';
import SignUp from './Components/SignUp';
import Footer from './Components/Navbar/Footer';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <About />
      <SignUp />
      <Footer />
    </div>
  );
}

export default App;

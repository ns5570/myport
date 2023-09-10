import React from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
// import Skills from './components/Internship';
import Internship from './components/Internship';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <About />
        <Portfolio />
        <Internship/>
        <Contact />
        <Footer/>
      </main>
    </div>
  );
}

export default App;

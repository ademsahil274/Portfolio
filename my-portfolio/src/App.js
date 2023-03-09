import './App.css'
import React from 'react';
import Resume from './components/Resume';
import {Routes, Route} from 'react-router-dom';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Header from './components/Header';
//import navigationMenu from './components/navigationMenu';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path='/' element = {<About/>} />
        <Route path='/about' element = {<About/>} />
        <Route path='/contact' element = {<Contact/>} />
        <Route path='/portfolio' element = {<Portfolio/>} />
        <Route path='/resume' element = {<Resume />} />
        <Route patch='/projects' element = {<Projects />} />
      </Routes>
      <Footer />
      {/* <About />
      <Projects />
      <Contact />
      <Portfolio /> */}
    </div>
  );
}

export default App;




// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

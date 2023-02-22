import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Project from './Project';
import Resume from './Resume';

function App() {
  return (
    <div className="app">
      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/project" component={Project} />
      <Route path="/resume" component={Resume} />
    </div>
  );
}

export default App;




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

export default App;
import React, { useState } from 'react';
import Header from './components/Header';
import Portfolio from './components/Portfolio'
import Resume from './components/Resume';
import About from './components/About';
import Contact from './components/Contact';

// import './App.css';

function App() {

  const [contactSelected, setContactSelected] = useState(false);
  
  const [pages] = useState([
    {
      name: "About", 
      description: "I have a background in web and graphic design, and have worn a lot of hats relating to those fields. Currently, I'm a web administrator. Lately I've been learning more about web development, and loving it! I've decided to pursue web development as a career change.",
    },
    { 
      name: "Portfolio",
      description: "My Work" },
    { 
      name: "Resume", 
      description: "Professional front-end web developer with working knowledge of back-end technologies. Love for the industry!" 
    },
    { 
      name: "Contact", 
      description: "Say Hi." 
    },
  ]);

  const [currentPage, setCurrentPage] = useState(pages[0]);

  return (
    <div className="App">
        <Header
          pages={pages}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
          contactSelected={contactSelected}
          setContactSelected={setContactSelected}
        ></Header>
      <main>
      {currentPage.name == "About" ? <About/> : currentPage.name == "Portfolio" ? <Portfolio/>: currentPage.name == "Contact" ? <Contact /> : <Resume></Resume>}    
      </main>
    </div>
  );
}

export default App;

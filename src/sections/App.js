import React, { Component } from 'react';

import '../App.css';
import '../index.css';

import Cover from './Cover';
import TableOfContents from './TableOfContents';
import Projects from './Projects';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div className="app">
          <Cover/>
          <div className="parallax-projects app-projects"> 
            <div className="header">
              <div className="header-inside">
                EVAN BROWN
              </div>
            </div>
            <TableOfContents/>
            <Projects/>
            <Footer/>
          </div>
      </div>
    );
  }
}

export default App;
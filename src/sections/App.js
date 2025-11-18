import React, { Component } from 'react';
import '../App.css';
import FlagOnMountain from '../assets/images/flag-on-mountain.png';
import MountainForeground from '../assets/images/mountain-foreground.png';
import Name from '../assets/images/name.png';
import Clouds from '../assets/images/clouds.png';
import MinecraftLogo from '../assets/images/minecraft_logo.png';
import Rocks from '../assets/images/foreground.png';
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import '../index.css';

import Parallax from './Parallax';
import Cover from './Cover';
import TableOfContents from './TableOfContents';
import Projects from './Projects';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div>
          <Cover/>
          <div className="parallax-projects"> 
            <div className="app-projects">
              <TableOfContents/>
              <Projects/>
              <Footer/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

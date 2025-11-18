import '../App.css';
import FlagOnMountain from '../assets/images/flag-on-mountain.png';
import MountainForeground from '../assets/images/mountain-foreground.png';
import Name from '../assets/images/name.png';
import Clouds from '../assets/images/clouds.png';
import Rocks from '../assets/images/foreground.png';

import '../index.css';

import Parallax from './Parallax';

const Cover = () => {
    return (
    <div>
        <div className="parallax-deep">
        <Parallax speed={-0.1}>
            <img className="name" src={Name}/>
        </Parallax>
        </div>
        <div className="parallax-far">
        <Parallax speed={-0.2}>
            <img src={Clouds} className="clouds clouds-1" />
        </Parallax>
        </div>

        <div className="parallax-back">
        <Parallax speed={-0.3}>
            <img src={Clouds} className="clouds clouds-2" />
        </Parallax>
        </div>
        <div className="parallax-mid">
        <Parallax speed={-0.45}>
            <img src={FlagOnMountain} className="flag-on-mountain" />
        </Parallax>
        </div>

        <div className="parallax-close">
        <Parallax speed={-0.6}>
            <img src={MountainForeground} className="mountain-foreground" />
        </Parallax>
        </div>

        <div  className="parallax-base">
            <img src={Rocks} className="rocks-img" />
        </div>
    </div>
    );
}

export default Cover;
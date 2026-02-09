import '../App.css';
import FlagOnMountain from '../assets/images/cover/flag-on-mountain.png';
import MountainForeground from '../assets/images/cover/mountain-foreground.png';
import Clouds from '../assets/images/cover/clouds.png';
import Rocks from '../assets/images/cover/foreground.png';

import '../index.css';

import Parallax from './Parallax';

const Cover = () => {
    return (
    <div>
        <div className="parallax-deep">
        </div>
        <div className="parallax-far">
        <Parallax speed={-0.1}>
            <img src={Clouds} className="clouds clouds-1" />
        </Parallax>
        </div>

        <div className="parallax-back">
        <Parallax speed={-0.2}>
            <img src={Clouds} className="clouds clouds-2" />
        </Parallax>
        </div>
        <div className="parallax-mid">
        <Parallax speed={-0.5}>
            <img src={FlagOnMountain} className="flag-on-mountain" />
        </Parallax>
        </div>

        <div className="parallax-close">
        <Parallax speed={-0.8}>
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
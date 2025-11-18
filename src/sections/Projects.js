import '../App.css';
import '../index.css';

import MinecraftLogo from '../assets/images/minecraft_logo.png';

const Projects = () => {
    return (
        <div>
              <div className="project-header-row">
                <img src={MinecraftLogo} className="minecraft-logo" />
                <div id="Server-Side_Mods" className="section-heading">Server-Side Mods</div>
              </div>
        
        <div className="project-section">
        <div className="vertical-text">NOVEMBER 26 2022</div>
        <div>
            <div className="title-section">
            <div id="Infiltration" className="title">Infiltration</div>
            <div className="tag-section">
                <div className="tag" style={{backgroundColor: 'darkorange'}}>Java</div>
                <div className="tag" style={{backgroundColor: 'coral'}}>GLSL</div>
                <div className="tag" style={{backgroundColor: 'darksalmon'}}>MongoDB</div>
            </div>
            </div>
            <div className="app-divider" />
            <p className="project-body">
            A gamemode aimed to bring a tactical side to combat.
            </p>
            <p className="project-body">
            The game splits players into groups of squads sub-divided into fireteams.
                Squad Leaders communicate with each other to coordinate attacks and hold positions in objectives.
                The game favors teamwork and will punish players who do not work together.
            </p>
            <div>
            <div id="Firearms" className="secondary-title">Firearms</div>
            </div>
            <div>
            <div id="Helicopters" className="secondary-title">Helicopters</div>
            </div>
            <div>
            <div id="Spatial_Interface" className="secondary-title">Spatial Interface</div>
            </div>
            <div>
            <div id="Screen_Effects" className="secondary-title">Screen Effects</div>
            </div>
        </div>
        </div>

        <div className="project-section">
        <div className="vertical-text">OCTOBER 24 2021</div>
        <div>
            <div className="title-section">
            <div id="Project:_MTF" className="title">Project: MTF</div>
            <div className="tag-section">
                <div className="tag" style={{backgroundColor: 'darkorange'}}>Java</div>
                <div className="tag" style={{backgroundColor: 'darksalmon'}}>Skript</div>
            </div>
            </div>
            <div className="app-divider" />
            <p className="project-body" style={{fontStyle: 'italic'}}>
            "We die in the dark so you can live in the light"
            </p>
            <p className="project-body">
            Based off of Task Force on Roblox, it is a game mode where you play as a Mobile Task Force Operative with the objective of carrying out a certain mission or task for the SCP foundation.
                The missions involve several SCPs and other groups of interest.
                Operatives are tasked to go on dangerous missions to study the anomalies and gather intel for the foundation.
            </p>
            <div>
            <div id="Story" className="secondary-title">Story</div>
            </div>
        </div>
        </div>

        <div className="project-section">
        <div className="vertical-text">DECEMBER 12 2020</div>
        <div>
            <div className="title-section">
            <div id="Unsecured" className="title">Unsecured</div>
            <div className="tag-section">
                <div className="tag" style={{backgroundColor: 'darksalmon'}}>Skript</div>
            </div>
            </div>
            <div className="app-divider" />
            <p className="project-body">
            A prison break server which hosts a large amount of content
            </p>
            <p className="project-body">
            The game has several layers to it.
                The base layer, Class-D Prisoners, try to escape their containment by a plethora of escape routes.
                On their journey they can get transported to the SCP sector of the facility.
                In this section many and anomalous objects and entities can be interacted with.
                The goal of the Security Personnel is to maintain the prison and contain all SCP's.
                Their secondary tasks may include capturing Chaos Insurgency and escorting scientists for experiments.
            </p>
            <div>
            <div id="Anomalies" className="secondary-title">Anomalies</div>
            </div>
            <div>
            <div id="Map" className="secondary-title">Map</div>
            </div>
        </div>
        </div>
        </div> 
    )
}

export default Projects;
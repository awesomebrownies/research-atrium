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
                Several alpha and beta tests have been conducted with player feedback being implemented into a roughly 2-week cycle while in active development.
            </p>
            <div id="Firearms" className="secondary-title">Firearms</div>
            <p className="project-body">
                The system relies real-time projectile calculations using asynchronous threads. 
                The advantage of such a system is timings for gunfire and hit detection are not limited by the default 20-tick main thread.
                In addition, hitbox calculations are latency compensated and integrated directly into the Raycast API.
            </p>
            <div>
            <div id="Helicopters" className="secondary-title">Helicopters</div>
            <p className="project-body">
                Due to the highly rotational nature of the vehicle, Quaternions were used to track current position - Taking advantage of the mathematical
                representation, it allowed me to easily transform local offset vectors to absolute coordinates with respect to rotation.
            </p>
            </div>
            <div>
            <div id="Spatial_Interface" className="secondary-title">Spatial Interface</div>
            <p className="project-body">
                The menu system upon logging into the server is a mix between first person perspective and an interactive menu.
                Packet-based removal is applied to nearby players, with a gradual fade in effect when fellow players exit the main menu space.
                This allows for a seamless transition from battlefield to menu with an easy to use point and click for all menu elements.
            </p>
            <p className="project-body">
                A squad creation system before deployment uses a variety of packet update orders to ensure every player can see real-time personalized
                status. For example, the join buttons will only appear if a player is not currently in a squad.
            </p>
            </div>
            <div>
            <div id="Screen_Effects" className="secondary-title">Screen Effects</div>
            <p className="project-body">
                I took advantage of the client-side implementation of GLSL shaders within resource packs. Utilizing GameTime & detectable server-side parameters,
                the vignette upon taking damage is animated and optimized to maintain performance. Creating this code within shader pipelines helped me better understand how massively parallel, 
                per-pixel operations are structured and optimized.
            </p>
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
            <p className="project-body">
                Mobile Task Force Operatives are tasked to escort a trapped scientist within an infected facility.
            </p>
            <p className="project-body">
                Scene I: A group between 2-10 operatives are deployed via helicopter beside the facility entrance. 
                Players are released from the cutscene after given instructions, and enter the facility with lights flashing and alarms going off.
            </p>
            <p className="project-body">
                Scene II: Multiple infected are eliminated as the operatives find the elevator shaft broken open and destroyed. they slowly progress down a spiral staircase.
                At this point, a research lab with computers can be seen, and many dead scientists are found on the ground.
            </p>
            <p className="project-body">
                Scene III: The operatives locate the scientist, and have to escort it back while defending the scientist against the infected.
                At this point, more infected have surrounded them and they have to fight their way out.
            </p>
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
            <p className="project-body">
                The facility hosts a plethora of SCP's within the containment zones. This includes SCP-173 similar to the weeping angels, 
                SCP-682 as a intelligent dangerous indestructable reptile due to its regenerative abilities. 
                SCP-035 "The Possessive Mask" which animates and kills whoever puts it on. 
                SCP-914 as a scientist experimental favorite is a machine that allows objects to be put in to be upgraded or destroyed/mutated.
            </p>
            </div>
            <div>
            <div id="Map" className="secondary-title">Map</div>
            <p className="project-body">
                The map is in the mountains covered in snow. The facility takes place hidden in Canada near a lake.
            </p>
            </div>
        </div>
        </div>
        </div> 
    )
}

export default Projects;
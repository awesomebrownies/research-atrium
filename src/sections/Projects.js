import '../App.css';
import '../index.css';
import MarkdownComponent from './MarkdownComponent';
import rehypeSlug from 'rehype-slug';
import rehypeRaw from 'rehype-raw';

import MinecraftLogo from '../assets/images/title/minecraft_logo.png';
import Antenna from '../assets/images/title/antenna.jpg';

import GitHubRepoCard from './GitHubRepoCard';


const esProjectsData = [
    {
        date: "OCTOBER 26 2025",
        id: "hid-workflow-emulator",
        title: "HID Workflow Emulator",
        tags: "C++",
        fileName: "hid-workflow-emulator.md",
        theme: "comparator",
        repository: "hid-workflow-emulator",
    }
]

const mcProjectsData = [
    {
        date: "NOVEMBER 26 2022",
        id: "infiltration",
        title: "Infiltration",
        tags: "Java, GLSL, and MongoDB",
        fileName: "infiltration.md",
        theme: "copper-golem",
    },
    {
        date: "OCTOBER 24 2021",
        id: "project:-mtf",
        title: "Project: MTF",
        tags: "Java and Skript",
        fileName: "project:-mtf.md",
        theme: "copper-golem",
    },
    {
        date: "DECEMBER 12 2020",
        id: "Unsecured",
        title: "Unsecured",
        tags: "Skript",
        fileName: "unsecured.md",
        theme: "copper-golem",
    }
]

const renderItem = (item) => {
    return (
        <div className={`project-section project-section--${item.theme}`}>
        <div className="vertical-text">{item.date}</div>
        <div className="content-section">
            <div className="title-section">
                <div id={item.id} className="title">{item.title}</div>
            </div>
            <div className="tag-section">
                {item.tags}
            </div>

            <div className="app-divider" />
            <div className="project-body">
                {item.repository && (
                    <GitHubRepoCard owner="awesomebrownies" repo={item.repository} />
                )}
                <MarkdownComponent rehypePlugins={[rehypeSlug, rehypeRaw]} fileName={item.fileName}/>
            </div>
        </div>
        </div>
    )
    
}

const Projects = () => {
    return (
        
        <div>
        <div className="project-header-row">
        <img src={Antenna} className="minecraft-logo" />
        <div id="embedded-systems" className="section-heading">Embedded Systems</div>
        </div>

        {esProjectsData.map(renderItem)}
        
        <div className="project-header-row">
        <img src={MinecraftLogo} className="minecraft-logo" />
        <div id="server-side-mods" className="section-heading">Server-Side Mods</div>
        </div>

        {mcProjectsData.map(renderItem)}

        </div> 
    )
}

export default Projects;
import '../App.css';
import '../index.css';
import MarkdownComponent from './MarkdownComponent';
import rehypeSlug from 'rehype-slug';
import rehypeRaw from 'rehype-raw';

import MinecraftLogo from '../assets/images/minecraft_logo.png';


const projectsData = [
    {
        date: "NOVEMBER 26 2022",
        id: "Infiltration",
        title: "Infiltration",
        tags: "Java, GLSL, and MongoDB",
        fileName: "infiltration.md"
    },
    {
        date: "OCTOBER 24 2021",
        id: "Project:_MTF",
        title: "Project: MTF",
        tags: "Java and Skript",
        fileName: "project:-mtf.md"
    },
    {
        date: "DECEMBER 12 2020",
        id: "Unsecured",
        title: "Unsecured",
        tags: "Skript",
        fileName: "unsecured.md"
    }
]

const renderItem = (item) => {
    return (
        <div className="project-section">
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
        <img src={MinecraftLogo} className="minecraft-logo" />
        <div id="Server-Side_Mods" className="section-heading">Server-Side Mods</div>
        </div>

        {projectsData.map(renderItem)}

        </div> 
    )
}

export default Projects;
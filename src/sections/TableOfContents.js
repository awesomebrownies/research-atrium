import '../App.css';;
import '../index.css';

const TableOfContents = () => {
  const tocData = [
    {
      id: "Server-Side_Mods",
      number: "1",
      title: "Server-Side Mods",
      children: [
        {
          id: "Infiltration",
          number: "1.1",
          title: "Infiltration",
          children: [
            {id: "firearms", number: "1.1.1", title: "Firearms"},
            {id: "helicopters", number: "1.1.2", title: "Helicopters"},
            {id: "spatial-interface", number: "1.1.3", title: "Spatial Interface"},
            {id: "screen-effects", number: "1.1.4", title: "Screen Effects"}
          ]
        },
        {
          id: "Project:_MTF",
          number: "1.2",
          title: "Project: MTF",
          children: [
            {id: "story", number: "1.2.1", title: "Story"}
          ]
        },
        {
          id: "Unsecured",
          number: "1.3",
          title: "Unsecured",
          children: [
            {id: "anomalies", number: "1.3.1", title: "Anomalies"},
            {id: "map", number: "1.3.2", title: "Map"}
          ]
        }
      ]
    }
  ]

  const renderItem = (item) => (
    <li>
      <a href={`#${item.id}`} className="link">
        <span className="number">{item.number}</span>
        <span>{item.title}</span>
      </a>
      {item.children && (
        <ul className="list">{item.children.map(renderItem)}</ul>
      )}
    </li>
  );

  return (
    <div>
      <ul className="project-body list">
        {tocData.map(renderItem)}
      </ul>
    </div>
  );
}

export default TableOfContents;
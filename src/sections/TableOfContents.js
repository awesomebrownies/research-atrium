import '../App.css';
import '../index.css';

import MarkdownComponent from './MarkdownComponent';

const TableOfContents = () => {
  return (
    <div className="project-body list introduction-format">
      <MarkdownComponent fileName={"table-of-contents.md"}/>
      <div className="introduction">
      <MarkdownComponent fileName={"introduction.md"}/>
      </div>
    </div>
  );
}

export default TableOfContents; 
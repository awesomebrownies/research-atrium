import '../App.css';
import '../index.css';

import MarkdownComponent from './MarkdownComponent';

const TableOfContents = () => {
  return (
    <div className="project-body list">
      <MarkdownComponent fileName={"table-of-contents.md"}/>
    </div>
  );
}

export default TableOfContents; 
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

function MarkdownComponent(item) {
  const [markdownContent, setMarkdownContent] = useState("");
  
  useEffect(() => {
    fetch(`/markdown/${item.fileName}`)
      .then((response) => response.text())
      .then((text) => setMarkdownContent(text));
  }, [item.fileName]);
  
  return (
    <section>
      <ReactMarkdown rehypePlugins={item.rehypePlugins}>
        {markdownContent}
      </ReactMarkdown>
    </section>
  );
}

export default MarkdownComponent;
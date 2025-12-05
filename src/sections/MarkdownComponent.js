import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

function MarkdownComponent(item) {
  const [markdownContent, setMarkdownContent] = useState("");
  
useEffect(() => {
  fetch(`${process.env.PUBLIC_URL}/markdown/${item.fileName}`)
    .then((response) => response.text())
    .then((text) => setMarkdownContent(text))
    .catch((err) => console.error("Error loading markdown:", err));
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
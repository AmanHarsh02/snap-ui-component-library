import "../CodeBlock/CodeBlock.css";
import { CodeBlock as Block } from "react-code-blocks";

export const CodeBlock = ({ children, heading }) => {
  return (
    <section className="code__block__container">
      <h3>{heading}</h3>

      <Block
        text={children}
        language="jsx"
        showLineNumbers={false}
        wrapLongLines
      />
    </section>
  );
};

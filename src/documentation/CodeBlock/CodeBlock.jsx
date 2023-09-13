import "../CodeBlock/CodeBlock.css";

export const CodeBlock = ({ children, heading }) => {
  return (
    <section className="code__block__container">
      <h3>{heading}</h3>
      <div>{children}</div>
    </section>
  );
};

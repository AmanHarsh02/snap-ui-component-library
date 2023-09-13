import "../ComponentBlock/ComponentBlock.css";

export const ComponentBlock = ({ align, direction, children }) => {
  const componentDirectionClass = `direction-${direction}`;
  const componentAlignClass = `align-${align}`;

  return (
    <section className={`${componentDirectionClass} ${componentAlignClass}`}>
      {children}
    </section>
  );
};

import "../css/utility.css";
import { CodeBlock, ComponentBlock, Description, Header } from "./index";
import "../css/utility.css";
import { buttonBasicCode } from "../data/codeBlocks";
import { Button } from "../components/index";

export const ButtonDoc = () => {
  const handleClick = () => {
    console.log("Button Clicked");
  };

  return (
    <section className="documentation__page">
      <Header>Button Component</Header>

      <Description>
        Button component provide various styles for different actions.
      </Description>

      <ComponentBlock direction="row">
        <Button type="solid" text="Solid Button" onClick={handleClick} />
        <Button
          type="solid"
          text="Solid Button"
          onClick={handleClick}
          disabled
        />
        <Button type="outline" text="Outline Button" onClick={handleClick} />
        <Button type="ghost" text="Ghost Button" onClick={handleClick} />
        <Button type="link" text="Link Button" onClick={handleClick} />
      </ComponentBlock>

      <CodeBlock heading="How to use button component?">
        {buttonBasicCode}
      </CodeBlock>
    </section>
  );
};

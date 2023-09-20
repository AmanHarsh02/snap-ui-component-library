import "../css/utility.css";
import { CodeBlock, ComponentBlock, Description, Header } from "./index";
import "../css/utility.css";
import { headingCode, textCode } from "../data/codeBlocks";
import { Text } from "../components/index";

export const TextDoc = () => {
  return (
    <section className="documentation__page">
      <Header>Text Component</Header>

      <Description>
        The Text component is used to display texts like paragraphs,
        descriptions in various font sizes.
      </Description>

      <ComponentBlock direction="column">
        <Text size="xl">Extra Large Text</Text>
        <Text size="lg">Large Text</Text>
        <Text size="md">Medium Text</Text>
        <Text size="sm">Small Text</Text>
        <Text size="xs">Extra Small Text</Text>
      </ComponentBlock>

      <CodeBlock heading="How to use text component?">{textCode}</CodeBlock>
    </section>
  );
};

import "../css/utility.css";
import { CodeBlock, ComponentBlock, Description, Header } from "./index";
import "../css/utility.css";
import { headingCode } from "../data/codeBlocks";
import { Heading } from "../components/index";

export const HeadingDoc = () => {
  return (
    <section className="documentation__page">
      <Header>Heading Component</Header>

      <Description>
        The Heading component is used to display headings in various font sizes
        and weights.
      </Description>

      <ComponentBlock direction="column">
        <Heading size="xl" weight="bolder">
          Extra Large Heading
        </Heading>
        <Heading size="lg" weight="bold">
          Large Heading
        </Heading>
        <Heading size="md" weight="semi-bold">
          Medium Heading
        </Heading>
        <Heading size="sm" weight="normal">
          Small Heading
        </Heading>
        <Heading size="xs" weight="light">
          Extra Small Heading
        </Heading>
      </ComponentBlock>

      <CodeBlock heading="How to use heading component?">
        {headingCode}
      </CodeBlock>
    </section>
  );
};

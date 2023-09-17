import "../css/utility.css";
import { CodeBlock, ComponentBlock, Description, Header } from "./index";
import "../css/utility.css";
import { badgeBasicCode } from "../data/codeBlocks";
import { Badge } from "../components/index";

export const BadgeDoc = () => {
  return (
    <section className="documentation__page">
      <Header>Badge Component</Header>

      <Description>
        The Badge component is used to highlight and display short information,
        labels or statuses
      </Description>

      <ComponentBlock direction="row" align="end">
        <Badge size="sm" text="New" status="primary" />
        <Badge size="md" text="In Progress" status="secondary" />
        <Badge size="lg" text="Completed" status="success" />
        <Badge size="md" text="Error" status="error" />
      </ComponentBlock>

      <CodeBlock heading="How to use badge component?">
        {badgeBasicCode}
      </CodeBlock>
    </section>
  );
};

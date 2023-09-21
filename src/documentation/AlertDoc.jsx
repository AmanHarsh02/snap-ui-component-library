import "../css/utility.css";
import { CodeBlock, ComponentBlock, Description, Header } from "./index";
import { alertBasicCode } from "../data/codeBlocks";
import { Alert } from "../components/index";

export const AlertDoc = () => {
  return (
    <section className="documentation__page">
      <Header>Alert Component</Header>

      <Description>
        The Alert component is used to display various types of messages with
        different statuses.
      </Description>

      <ComponentBlock direction="column">
        <Alert status="error">
          There was an error processing your request.
        </Alert>
        <Alert status="success">
          Data uploaded to the server successfully.
        </Alert>
        <Alert status="warn">
          Seems your account is about to expire, upgrade now.
        </Alert>
        <Alert status="info">Sale is going live on 1 November, 2023.</Alert>
      </ComponentBlock>

      <CodeBlock heading="How to use alert component?">
        {alertBasicCode}
      </CodeBlock>
    </section>
  );
};

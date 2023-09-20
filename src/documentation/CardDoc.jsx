import "../css/utility.css";
import { CodeBlock, ComponentBlock, Description, Header } from "./index";
import { Card } from "../components/index";
import { cardCode } from "../data/codeBlocks";

export const CardDoc = () => {
  return (
    <section className="documentation__page">
      <Header>Card Component</Header>

      <Description>
        The card component is used to display various types of information with
        heading and image. User can even interact with the cards like closing
        the cards and performing confirm/reject action.
      </Description>

      <ComponentBlock direction="row">
        <Card>This is a text only card.</Card>
        <Card headingText="Test Heading">This is a card with heading.</Card>
        <Card headingText="Test Heading" border="sm">
          This is a card with small border.
        </Card>
        <Card
          headingText="Test Heading"
          border="md"
          showActionButtons={true}
          successActionText="Accept"
          rejectActionText="Reject"
        >
          This is a card with action buttons and medium border
        </Card>

        <Card
          imageSrc="https://images.unsplash.com/photo-1599664223843-9349c75196bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
          shadow="lg"
        >
          This is a card with an image and text.
        </Card>
        <Card
          imageSrc="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
          headingText="Test Heading"
          layout="horizontal"
        >
          This is a horizontal card with image.
        </Card>
      </ComponentBlock>

      <CodeBlock heading="How to use card component?">{cardCode}</CodeBlock>
    </section>
  );
};

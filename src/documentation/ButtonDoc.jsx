import "../css/utility.css";
import { CodeBlock, ComponentBlock, Description, Header } from "./index";
import {
  buttonBasicCode,
  floatingActionButtonCode,
  iconButtonCode,
} from "../data/codeBlocks";
import { Button, FloatingActionButton, IconButton } from "../components/index";
import {
  BiSearch as SearchIcon,
  BiEdit as EditIcon,
  BiTrashAlt as DeleteIcon,
} from "react-icons/bi";
import { AiOutlinePlus as AddIcon } from "react-icons/ai";

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
        <Button type="solid" variant="primary" onClick={handleClick}>
          Solid Button
        </Button>
        <Button type="solid" variant="secondary" onClick={handleClick} disabled>
          Solid Button
        </Button>
        <Button type="outline" variant="success" onClick={handleClick}>
          Outline Button
        </Button>
        <Button type="ghost" variant="error" onClick={handleClick}>
          Ghost Button
        </Button>
        <Button type="link" href="https://www.google.com/">
          Link Button
        </Button>
      </ComponentBlock>

      <CodeBlock heading="How to use button component?">
        {buttonBasicCode}
      </CodeBlock>

      <Header>IconButton Component</Header>

      <Description>
        IconButton component combines icons with text for actions.
      </Description>

      <ComponentBlock direction="row">
        <IconButton
          icon={<SearchIcon size={20} className="icon" />}
          type="solid"
          variant="primary"
          onClick={handleClick}
        >
          Search
        </IconButton>
        <IconButton
          icon={<EditIcon size={20} className="icon" />}
          type="outline"
          variant="secondary"
          onClick={handleClick}
        >
          Edit
        </IconButton>
        <IconButton
          icon={<DeleteIcon size={20} className="icon" />}
          type="ghost"
          variant="error"
          onClick={handleClick}
        >
          Delete
        </IconButton>
        <IconButton
          icon={<AddIcon size={20} className="icon" />}
          type="ghost"
          variant="success"
          onClick={handleClick}
        >
          Add
        </IconButton>
      </ComponentBlock>

      <CodeBlock heading="How to use icon button component?">
        {iconButtonCode}
      </CodeBlock>

      <Header>FloatingActionButton Component</Header>

      <Description>
        FloatingActionButton component provide quick actions for user
        interactions.
      </Description>

      <ComponentBlock direction="row">
        <FloatingActionButton
          type="solid"
          variant="primary"
          onClick={handleClick}
        >
          <AddIcon size={20} className="icon" />
        </FloatingActionButton>
        <FloatingActionButton
          type="outline"
          variant="success"
          onClick={handleClick}
        >
          <EditIcon size={20} className="icon" />
        </FloatingActionButton>
      </ComponentBlock>

      <CodeBlock heading="How to use floating action button component?">
        {floatingActionButtonCode}
      </CodeBlock>
    </section>
  );
};

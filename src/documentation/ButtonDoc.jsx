import "../css/utility.css";
import { CodeBlock, ComponentBlock, Description, Header } from "./index";
import "../css/utility.css";
import { buttonBasicCode, iconButtonCode } from "../data/codeBlocks";
import { Button, IconButton } from "../components/index";
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

      <Header>IconButton Component</Header>

      <Description>
        IconButton component combines icons with text for actions.
      </Description>

      <ComponentBlock direction="row">
        <IconButton
          icon={<SearchIcon size={20} fill="blueviolet" />}
          textColor="blueviolet"
          text="Search"
          onClick={handleClick}
        />
        <IconButton
          icon={<EditIcon size={20} fill="blue" />}
          textColor="blue"
          text="Edit"
          onClick={handleClick}
        />
        <IconButton
          icon={<DeleteIcon size={20} fill="red" />}
          textColor="red"
          text="Delete"
          onClick={handleClick}
        />
        <IconButton
          icon={<AddIcon size={20} fill="green" />}
          textColor="green"
          text="add"
          onClick={handleClick}
        />
      </ComponentBlock>

      <CodeBlock heading="How to use icon button component?">
        {iconButtonCode}
      </CodeBlock>
    </section>
  );
};

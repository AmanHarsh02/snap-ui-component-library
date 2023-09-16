import { Avatar } from "../components";
import { CodeBlock, ComponentBlock, Description, Header } from "./index";
import "../css/utility.css";
import { avatarBasicCode } from "../data/codeBlocks";

export const AvatarDoc = () => {
  return (
    <section className="documentation__page">
      <Header>Avatar Component</Header>

      <Description>
        The Avatar component displays an image representing a user or entity
        along with a name.
      </Description>

      <ComponentBlock direction="row" align="end">
        <Avatar
          size="sm"
          name="James"
          shadow="sm"
          src="https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?w=2000"
        />
        <Avatar
          size="md"
          name="Diana"
          shadow="md"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbmJrjAzWu0Wdi6AgwbiOFeTbdVJI0uGKgECftRzt4_YavyZxe7qYmFtuBOmEy2Xw47M8&usqp=CAU"
        />
        <Avatar
          size="lg"
          name="Zach"
          shadow="lg"
          src="https://t3.ftcdn.net/jpg/02/22/85/16/360_F_222851624_jfoMGbJxwRi5AWGdPgXKSABMnzCQo9RN.jpg"
        />
      </ComponentBlock>

      <CodeBlock heading="How to use avatar component?">
        {avatarBasicCode}
      </CodeBlock>
    </section>
  );
};

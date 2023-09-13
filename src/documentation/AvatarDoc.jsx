import { Avatar } from "../components";
import { CodeBlock, ComponentBlock, Description, Header } from "./index";
import "../css/utility.css";

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
        <iframe
          src="https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=night-owl&wt=bw&l=auto&width=680&ds=true&dsyoff=34px&dsblur=60px&wc=true&wa=true&pv=17px&ph=14px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253CAvatar%2520size%253D%2522sm%2522%2520name%253D%2522Aman%2522%2520shadow%253D%2522sm%2522%2520src%253D%2522https%253A%252F%252Fimg.freepik.com%252Ffree-photo%252Fportrait-white-man-isolated_53876-40306.jpg%253Fw%253D2000%2522%2520%252F%253E%250A%250A%253CAvatar%2520size%253D%2522md%2522%2520name%253D%2522Diana%2522%2520shadow%253D%2522sm%2522%2520src%253D%2522https%253A%252F%252Fencrypted-tbn0.gstatic.com%252Fimages%253Fq%253Dtbn%253AANd9GcQbmJrjAzWu0Wdi6AgwbiOFeTbdVJI0uGKgECftRzt4_YavyZxe7qYmFtuBOmEy2Xw47M8%2526usqp%253DCAU%2522%2520%252F%253E%250A%250A%253CAvatar%2520size%253D%2522lg%2522%2520name%253D%2522Zach%2522%2520shadow%253D%2522sm%2522%2520src%253D%2522https%253A%252F%252Ft3.ftcdn.net%252Fjpg%252F02%252F22%252F85%252F16%252F360_F_222851624_jfoMGbJxwRi5AWGdPgXKSABMnzCQo9RN.jpg%2522%2520%252F%253E%250A"
          style={{
            width: "1024px",
            height: "279px",
            border: "0",
            overflow: "hidden",
          }}
          sandbox="allow-scripts allow-same-origin"
        ></iframe>
      </CodeBlock>
    </section>
  );
};

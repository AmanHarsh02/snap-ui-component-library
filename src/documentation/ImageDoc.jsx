import "../css/utility.css";
import { CodeBlock, ComponentBlock, Description, Header } from "./index";
import { imageCode } from "../data/codeBlocks";
import { Image } from "../components/index";

export const ImageDoc = () => {
  return (
    <section className="documentation__page">
      <Header>Image Component</Header>

      <Description>
        The Image component is used to display images in various sizes. Images
        can be responsive and rounded.
      </Description>

      <ComponentBlock direction="column">
        <div className="image__container">
          <Image
            imageSrc="https://images.unsplash.com/photo-1599664223843-9349c75196bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            variant="responsive"
          />
        </div>
        <ComponentBlock direction="row" align="end">
          <Image
            imageSrc="https://images.unsplash.com/photo-1599664223843-9349c75196bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            variant="rounded"
            size="xs"
          />
          <Image
            imageSrc="https://images.unsplash.com/photo-1599664223843-9349c75196bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            variant="rounded"
            size="sm"
          />
          <Image
            imageSrc="https://images.unsplash.com/photo-1599664223843-9349c75196bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            variant="rounded"
            size="md"
          />
          <Image
            imageSrc="https://images.unsplash.com/photo-1599664223843-9349c75196bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            variant="rounded"
            size="lg"
          />
          <Image
            imageSrc="https://images.unsplash.com/photo-1599664223843-9349c75196bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            variant="rounded"
            size="xl"
          />
        </ComponentBlock>
      </ComponentBlock>

      <p>
        <strong>Responsive Image: </strong>
        Responsive images will take 100% width of the parent's width. Make sure
        to wrap the Image component in a parent element and set the width
        accordingly.
      </p>

      <CodeBlock heading="How to use image component?">{imageCode}</CodeBlock>
    </section>
  );
};

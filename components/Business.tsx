import React, { useState } from "react";
import Image from "next/image";

type ItemType = {
  img: string;
  alt: string;
  title: string;
  content: string;
};

const Item: React.FC<ItemType> = ({ img, alt, title, content }) => {
  return (
    <article>
      <Image src={img} alt={alt} width={72} height={16} />
      <div>
        <h3>{title}</h3>
        <p>{content}</p>
      </div>
    </article>
  );
};

const About: React.FC = () => {
  return (
    <section>
      <h1>What I Offer?</h1>
      <div>
        <Item />
        <Item />
        <Item />
        <Item />
      </div>
    </section>
  );
};
export default About;

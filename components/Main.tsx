import React, { useState } from "react";
import { Text } from "../styles/main";

const INTROS = [
  "Hi, I am Nehla",
  "Your soul healer",
  "I am here to serve you.",
  "Are you curious how to find your wisdom within?",
];

const Main: React.FC = () => {
  const [intro, setIntro] = useState<number>(0);
  return (
    <section>
      <h1></h1>
      <Text charLeng={INTROS[intro].length}>
        <p>{INTROS[intro]}</p>
      </Text>
    </section>
  );
};

export default Main;

import React, { useState } from "react";
import { Text, MainWrapper, SNS } from "../styles/main";

const INTROS = [
  "Hi, I am Nehla",
  "Your soul healer",
  "I am here to serve you.",
  "Are you curious how to find your wisdom within?",
];

const Main: React.FC = () => {
  const [intro, setIntro] = useState<number>(0);

  return (
    <MainWrapper>
      {/* <h1></h1> */}
      <Text charLeng={INTROS[intro].length}>
        <p>{INTROS[intro]}</p>
      </Text>

      {/* SNSs */}
      <SNS>
        <div>Linked in</div>
      </SNS>
    </MainWrapper>
  );
};

export default Main;

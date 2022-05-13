import React, { useState } from "react";
import Image from "next/image";
import useTranslation from "next-translate/useTranslation";

const About: React.FC = () => {
  const { t } = useTranslation("home");

  return (
    <section>
      <h1>About Nehla</h1>
      <div>
        {/* <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} /> */}
        <article>
          <h3>{t("introduction")}</h3>
          <p>{t("introductionLong")}</p>
          {/* points */}
          <div></div>
        </article>
      </div>
    </section>
  );
};
export default About;

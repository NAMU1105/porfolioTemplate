import React from "react";
import Link from "next/link";

import { HeaderWrapper } from "../styles/header";

const Header = () => {
  return (
    <HeaderWrapper>
      {/* <h1 className="srOnly">header</h1> */}
      <div>logo</div>
      <div className="links">
        {/* <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} /> */}
        <Link href="/">
          <a>HOME</a>
        </Link>
        <Link href="/">
          <a>ABOUT</a>
        </Link>
        <Link href="/">
          <a>SERVICE</a>
        </Link>
        <Link href="/">
          <a>WORK</a>
        </Link>
        <Link href="/">
          <a>TESTIMONIAL</a>
        </Link>
        <Link href="/">
          <a>CONTACT</a>
        </Link>
        <Link href="/">
          <a>BLOG</a>
        </Link>
      </div>
    </HeaderWrapper>
  );
};

export default Header;

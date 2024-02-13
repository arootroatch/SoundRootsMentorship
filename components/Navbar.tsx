"use client";
import styled from "styled-components";
import localFont from "next/font/local";
import { Handlee } from "next/font/google";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";

const mixbox = localFont({
  src: "fonts/Mixbox Stamp Italic Demo.otf",
});

const handlee = Handlee({ weight: "400", subsets: ["latin"] });

const agencyFont = localFont({ src: "fonts/OPTIAgency-Gothic.ttf.woff" });

const Nav = styled.nav`
  background-color: #03009d6c;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  padding: 1rem;
  #nav-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
  }
  #soundRoots {
    letter-spacing: 0.1rem;
    font-size: 0.8rem;
    position: relative;
    top: 0.04rem;
  }
  #mentorship {
    font-size: 1.5rem;
    margin-left: 0.6rem;
  }
  ul{
    margin-right: 1rem;
  }
  ul li {
    display: inline;
    margin-right: 1rem;
    letter-spacing: 0.2rem;
    font-size: 0.9rem;
  }
  .icon{
    margin: .2rem;
  }
  .search {
    margin-left: .5rem;
  }
  .separator{
    margin-left: .5rem;
  }
`;

export default function Navbar() {
  return (
    <Nav>
      <div id='nav-wrapper'>
        <div>
          <span id='soundRoots' className={mixbox.className}>
            Sound Roots
          </span>
          <span id='mentorship' className={handlee.className}>
            Mentorship
          </span>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <ul className={agencyFont.className}>
            <li>
              <Link href=''>Home</Link>
            </li>
            <li>
              <Link href=''>Learn</Link>
            </li>
            <li>
              <Link href=''>Contact Us</Link>
            </li>
          </ul>
          <FaSquareFacebook className='icon' />
          <FaInstagram className='icon' />
          <span className="separator">|</span>
          <IoIosSearch className="search" />
        </div>
      </div>
    </Nav>
  );
}

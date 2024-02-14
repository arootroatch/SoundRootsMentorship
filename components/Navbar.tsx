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
  color: white;
  background: radial-gradient(#0300bbdb, #02006bdb);
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  padding: 0.5rem;
  box-sizing: border-box;
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
  ul {
    margin-right: 1rem;
  }
  ul li {
    display: inline;
    margin-right: 1rem;
    letter-spacing: 0.2rem;
    font-size: 0.9rem;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  .icon {
    margin: 0.2rem;
  }
  .search {
    margin-left: 0.5rem;
  }
  .separator {
    margin-left: 0.5rem;
  }
  .nestedParent {
    position: relative;
    padding-bottom: 1rem;
  }
  .nestedParent:hover {
    .nestedNav {
      display: block;
    }
  }
`;

const NestedNav = styled.ul`
  display: none;
  background: radial-gradient(#0300bbdb, #0300aedb);
  position: absolute;
  top: 2.1rem;
  transform: translateX(-40%);
  padding: 0.5rem;
  border-radius: 0.2rem;
  :hover {
    display: block;
  }
  .arrowUp {
    position: absolute;
    top: -0.9rem;
    left: 40%;
    border-left: solid 15px transparent;
    border-right: solid 15px transparent;
    border-bottom: solid 15px #0300aedb;
    height: 0;
    width: 0;
  }
  .nested {
    display: block;
    white-space: nowrap;
    margin-top: 0.2rem;
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
            <li className='nestedParent'>
              Home
              <NestedNav className='nestedNav'>
                <div className='arrowUp'></div>
                <li className='nested'>
                  <Link href='https://www.soundrootsproductions.com/'>
                    Sound Roots Productions
                  </Link>
                </li>
                <li className='nested'>
                  <Link href='/'>Sound Roots Mentorship</Link>
                </li>
              </NestedNav>
            </li>
            <li>
              <Link href='/learn'>Learn</Link>
            </li>
            <li>
              <Link href=''>Contact</Link>
            </li>
          </ul>
          <FaSquareFacebook className='icon' />
          <FaInstagram className='icon' />
          <span className='separator'>|</span>
          <IoIosSearch className='search' />
        </div>
      </div>
    </Nav>
  );
}

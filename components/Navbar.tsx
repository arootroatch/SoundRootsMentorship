"use client";
import styled from "styled-components";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";
import { mixbox, handlee, agencyFont } from "@/lib/fonts";


const Nav = styled.nav`
  color: #d5d5d5;
  background: radial-gradient(#0300bbdb, #02006bdb);
  width: 100vw;
  height: 50px;
  position: fixed;
  top: 0;
  left: 0;
  padding: 0.5rem;
  box-sizing: border-box;
  z-index: 10;
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
    margin: 0 1rem 0 0;
    display: flex;
    align-items: center;
  }
  .navLink {
    display: inline-block;
    margin-right: 1rem;
    letter-spacing: 0.2rem;
    font-size: 0.9rem;
  }

  .navLink:hover,
  .navIcon:hover {
    color: white;
    transform: scale(102%);
  }
  .navIcon {
    position: relative;
    top: 0.1rem;
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
    top: 0.47rem;
    padding-bottom: 1rem;
  }
  .nestedNav {
    display: none;
  }
  .nestedParent:hover {
    .nestedNav {
      display: block;
    }
  }
`;

const NestedNav = styled.ul`
  color: #d5d5d5;
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
    line-height: 1.3rem;
  }
  .nested:hover,
  .icon:hover,
  .search:hover {
    color: white;
    transform: scale(102%);
    cursor: pointer;
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
            <li className='nestedParent navLink'>
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
            <li className='navLink'>
              <Link href='/learn'>Learn</Link>
            </li>
            <li className='navLink'>
              <Link href=''>Contact</Link>
            </li>
          </ul>
          <Link
            href='https://www.facebook.com/soundrootsproductions'
            className='navIcon'
          >
            <FaSquareFacebook className='icon' />
          </Link>
          <Link
            href='https://www.instagram.com/soundrootsproductions/'
            className='navIcon'
          >
            <FaInstagram className='icon' />
          </Link>
          <span className='separator'>|</span>
          <IoIosSearch className='search' />
        </div>
      </div>
    </Nav>
  );
}

import styled from "styled-components";
import Image from "next/image";
import { agencyFont } from "@/lib/fonts";


interface HeroProps{
  alt: string;
  src: string;
  h1: string;
  desc?: string;
  date?: string;
  author?: string;
}

const HeroStyles = styled.div`
  .hero {
    -o-object-fit: cover;
    object-fit: cover;
    z-index: -10;
  }
  .titleWrapper {
    height: 100vh;
    width: 100vw;
    background: linear-gradient(#0000006c, #00000071);
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    letter-spacing: 1rem;
    font-size: 2rem;
  }
  .title {
    max-width: 600px;
    text-align: center;
    h1 {
      margin-bottom: 2rem;
    }
  }
  .desc {
    letter-spacing: 0.1rem;
    font-size: 1.2rem;
    font-family: "Franklin Gothic", "Arial Narrow", Arial, sans-serif;
    margin-bottom: 2rem;
  }
`;
export default function Hero(props:HeroProps) {
  return (
    <HeroStyles>
      <Image
        className="hero"
        alt={props.alt}
        src={props.src}
        fill
      />
      <div className="titleWrapper">
        <div className="title">
          <h1 className={agencyFont.className}>{props.h1}</h1>
          {props.desc && (
            <p className="desc">{props.desc}</p>
          )}
          {props.date && (<p className="desc">
            Written by: {props.author} | {props.date ? props.date : null}
          </p>)}
        </div>
      </div>
    </HeroStyles>
  );
}

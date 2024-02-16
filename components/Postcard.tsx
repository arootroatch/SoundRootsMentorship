"use client"

import Image from "next/image";
import styled from "styled-components";
import { agencyFont } from "@/lib/fonts";
import Link from "next/link";

interface postcardProps {
  key: string;
  title: string;
  image: string;
  description: string;
  date: string;
  as: string;
  href: string;
}

const PostcardStyles = styled.div`
  width: 200px;
  height: 400px;
  margin: 1rem;
  display: inline-block;
  font-family: "Franklin Gothic", "Arial Narrow", Arial, sans-serif;
  letter-spacing: 0.1rem;
  border-radius: 0.3rem;
  overflow: hidden;
  .image {
    position: relative; // necessary for NextJS image fill property
    height: 50%;
  }
  .info {
    padding: 1rem;
  }
  h3 {
    letter-spacing: 0.2rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
  .date,
  .description {
    font-size: 0.8rem;
  }
`;

export default function Postcard(props: postcardProps) {
  const date = new Date(props.date);
  const formattedDate = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
  return (
    <PostcardStyles>
      <Link as={props.as} href={props.href}>
        <div className='image'>
          <Image alt={props.image} src={props.image} fill className='image' />
        </div>
        <div className='info'>
          <p className='date'>{formattedDate}</p>
          <h3 className={agencyFont.className}>{props.title}</h3>
          <p className='description'>{props.description}</p>
        </div>
      </Link>
    </PostcardStyles>
  );
}

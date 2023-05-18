import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillTwitterCircle, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span} from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{display:"flex",alignItem:"center",color:"white", marginBottom:"20;"}}>
        <DiCssdeck size="3rem"/><Span>My Portfolio</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons target='_blank' href="https://github.com/AbegundeStephen">
         <AiFillGithub size="3rem"/>
      </SocialIcons>
      <SocialIcons target='_blank' href="https://linkedin.com/in/abegunde-stephen-05b897aa">
         <AiFillLinkedin size="3rem"/>
      </SocialIcons>
      
    </Div3>
  </Container>
);

export default Header;

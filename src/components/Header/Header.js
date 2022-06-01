// Header component
// imported link, link allows us to link different pages and different sections in the page.
// imported react icons package, linked 'HeaderStyles.js' 
import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';
import { SocialContainer } from '../Footer/FooterStyles';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

//container component, Div1, Link component = href linking to nowhere, anchor tag with inlinestyles. icon = <Dicssdeck> portofolio =<span>
// <Div2> = styled component containing <li>= <link href=> to scroll to projects, tech and about.
const Header = () =>  (
  <Container>
  <Div1> 
    <Link href="/">
      <a style={{display: "flex", alignItems: "center", color: 'white', marginBottom: '20;'}}>
        <DiCssdeck size="3rem"/> <Span>Samuel Mutandiro</Span>
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
    <SocialContainer>
    <SocialIcons href="https://github.com/SamMut1">
      <AiFillGithub size="3rem"/>
    </SocialIcons>
    <SocialIcons href="https://www.linkedin.com/in/samuel-mutandiro-16281423a/">
      <AiFillLinkedin size="3rem"/>
    </SocialIcons>
    <SocialIcons href="https://www.instagram.com/sam_sfd/?hl=en">
      <AiFillInstagram size="3rem"/>
    </SocialIcons>
    </SocialContainer>
  </Div3>
  </Container>
);

export default Header;

import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
      <LinkColumn>
      <LinkTitle>If you need to know anything else send me an email. </LinkTitle>
      <LinkItem href="Call:07827435410">samuel.mutandiro@gmail.com</LinkItem>
      </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>“For the things we have to learn before we can do them, we learn by doing them.” ― Aristotle</Slogan>
        </CompanyContainer>
        <SocialIcons href="https://github.com/SamMut1">
      <AiFillGithub size="3rem"/>
    </SocialIcons>
    <SocialIcons href="https://www.linkedin.com/in/samuel-mutandiro-16281423a/">
      <AiFillLinkedin size="3rem"/>
    </SocialIcons>
    <SocialIcons href="https://www.instagram.com/sam_sfd/?hl=en">
      <AiFillInstagram size="3rem"/>
    </SocialIcons>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;

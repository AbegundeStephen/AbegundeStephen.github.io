import React from 'react';
import { AiFillFacebook, AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
      <LinkColumn>
      <LinkTitle>Call</LinkTitle>
      <LinkItem target='_blank' href="tell:0706 316 4212">+234-706316-4212</LinkItem>
      </LinkColumn>
      <LinkColumn>
      <LinkTitle>Email</LinkTitle>
      <LinkItem target='_blank' href="mailto:contact@timilehin18@gmail.com">timilehin18@gmail.com</LinkItem>
      </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Send that email today,could be your firm's best hire.</Slogan>
        </CompanyContainer>
        <SocialIcons target='_blank' href="https://github.com/AbegundeStephen">
         <AiFillGithub size="3rem"/>
      </SocialIcons>
      <SocialIcons target='_blank' href="https://linkedin.com/in/abegunde-stephen-05b897aa">
         <AiFillLinkedin size="3rem"/>
      </SocialIcons>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;

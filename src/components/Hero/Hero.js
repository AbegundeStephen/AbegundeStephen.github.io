import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection, SectionName} from './HeroStyles';

const Hero = (props) => (
<Section row nopadding>
<LeftSection>
  <SectionTitle main center>
   Abegunde oluwatimilehin
</SectionTitle>
 <SectionText>
    Hi there! i am a software engineer and a community-driven person.
    I am strongly passionate about web-technologies,communities and open source.
  </SectionText>
  <Button onClick={()=>window.location="https://•	linkedin.com/in/oluwatimilehin-abegunde-05b897aa/"}>Learn more </Button>
</LeftSection>
</Section>
);

export default Hero;
import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
 <Section row nopadding>
   <LeftSection>
     <SectionTitle main centre>
       Hello, Welcome To<br/>
       My Personal Portofolio
     </SectionTitle>
     <SectionText>
       Hello my name is Sam, and this is my Portofolio where I show case what I have learnt and currently learning so far as an aspiring developer. "insert proposition to employers here"  
     </SectionText>
     <Button onClick={() => window.location = 'https://drive.google.com/file/d/1udD3q1YHoBUn_3vCO6k0bZWgfrVoyXX7/view?usp=sharing'}>Curriculum Vitae</Button>
   </LeftSection>

 </Section>
);

export default Hero;
import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 4, text: 'Open Source Projects'},
  { number: 10, text: 'Qualification', },
  { number: 400, text: 'Instagram Followers', },
  { number: -0, text: 'Github Stars', }
];

const Acomplishments = () => (
 <Section>
   <SectionTitle>Personal Accomplishments</SectionTitle>
   <Boxes> 
     {data.map((card, index) => (
       <Box key={index}>
         <BoxNum>{card.number}+</BoxNum>
         <BoxText>{card.text}</BoxText>
         </Box>
     ))}
   </Boxes>
 </Section>
);

export default Acomplishments;

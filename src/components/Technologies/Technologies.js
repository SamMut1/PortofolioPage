import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
 <Section id="tech">
   <SectionDivider />
   <br />
   <SectionTitle>Technologies</SectionTitle>
   <SectionText>
     I am currently learning how to use a range of technologies in the web development world, from Back-end to Design
   </SectionText>
   <List>
     <ListItem>
       <DiReact size ="3rem"/>
       <ListContainer>
         <ListTitle>Front-End</ListTitle>
         <ListParagraph>
           Some experience with <br />
           HTML5 & react still learning and improving
         </ListParagraph>
       </ListContainer>

     </ListItem>
     <ListItem>
       <DiFirebase size ="3rem"/>
       <ListContainer>
         <ListTitle>Back-End</ListTitle>
         <ListParagraph>
           Some experience with <br />
           Node.js still learning and trying to implement databases alongside
         </ListParagraph>
       </ListContainer>

     </ListItem>
     <ListItem>
       <DiFirebase size ="3rem"/> 
       <ListContainer>
         <ListTitle>UI/UX</ListTitle>
         <ListParagraph>
           Some experience with <br />
           Tools like Figma
         </ListParagraph>
       </ListContainer>

     </ListItem>
   </List>
 </Section>
);

export default Technologies;

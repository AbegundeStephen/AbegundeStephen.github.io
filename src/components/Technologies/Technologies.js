import React from 'react';
import { DiFirebase, DiMongodb, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
<Section href="#tech">
<SectionDivider/>
<SectionTitle>Technologies</SectionTitle>
<SectionText>
  I've worked with a range of Technologies in the software development world.
  from Front-end To Back-end.
</SectionText>
<List>
  <ListItem>
    <DiReact size="3rem"/>
    <ListContainer>
      <ListTitle>Front-End</ListTitle>
      <ListParagraph>
        Experience with <br/>
        React.js
      </ListParagraph>
    </ListContainer>
  </ListItem>
  <ListItem>
    <DiZend size="3rem"/>
    <ListContainer>
      <ListTitle>Back-End</ListTitle>
      <ListParagraph>
        Experience with <br/>
        Node.js
      </ListParagraph>
    </ListContainer>
  </ListItem>
  <ListItem>
    <DiMongodb size="3rem"/>
    <ListContainer>
      <ListTitle>Databases</ListTitle>
      <ListParagraph>
        Experience with <br/>
        Mongodb
      </ListParagraph>
    </ListContainer>
    
  </ListItem>
  <ListItem>
    <DiFirebase size="3rem"/>
    <ListContainer>
      <ListTitle>Others</ListTitle>
      <ListParagraph>
        Experience with <br/>
        firebase and Typescript
      </ListParagraph>
    </ListContainer>
    
  </ListItem>
</List>

</Section>
);

export default Technologies;

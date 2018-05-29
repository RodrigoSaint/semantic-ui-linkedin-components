import React from "react";
import { Header, Divider, Label } from "semantic-ui-react";

const SkillSection = props => (
  <div className="divider-space">
    <Header size="medium">Skills</Header>
    <Divider />
    <Label.Group color="blue">
      {props.skills.map(skill => <Label key={skill.name}>{skill.name}</Label>)}
    </Label.Group>
  </div>
);
export default SkillSection;

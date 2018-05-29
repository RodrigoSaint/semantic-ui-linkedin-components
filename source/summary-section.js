import React from "react";
import { Header, Divider } from "semantic-ui-react";

const SummarySection = props => (
  <div className="divider-space">
    <Header>Summary</Header>
    <Divider />
    <p>{props.profile.summary}</p>
  </div>
);

export default SummarySection;

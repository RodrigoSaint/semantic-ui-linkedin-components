import React from "react";
import { Header, Divider } from "semantic-ui-react";
import PositionTimeLineItem from "./position-timeline-item";

const PositionSection = props => {
  return (
    <div className="divider-space">
      <Header size="medium">Positions</Header>
      <Divider />
      <div className="timeline">
        {props.positions.map(position => (
          <PositionTimeLineItem key={position.started_on} position={position} />
        ))}
      </div>
    </div>
  );
};

export default PositionSection;

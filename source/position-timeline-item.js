import React from "react";
import { Card } from "semantic-ui-react";

const PositionTimeLineItem = props => (
  <div className="container">
    <Card fluid>
      <Card.Content>
        <Card.Header content={props.position.title} />
        <Card.Meta content={props.position.company_name} />
      </Card.Content>
      <Card.Content extra>
        <strong>From:</strong> {props.position.started_on}
        <strong> To:</strong> {props.position.finished_on || "Actual"}
      </Card.Content>
    </Card>
  </div>
);

export default PositionTimeLineItem;

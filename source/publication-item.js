import React from "react";
import { List } from "semantic-ui-react";

const PublicationItem = props => (
  <List.Item>
    <List.Icon name="file text" size="large" verticalAlign="middle" />
    <List.Content>
      <List.Header>
        <a target="_blank" href={props.publication.url}>
          {props.publication.name}
        </a>
      </List.Header>
      <List.Description>{props.publication.publication_date}</List.Description>
    </List.Content>
  </List.Item>
);

export default PublicationItem;

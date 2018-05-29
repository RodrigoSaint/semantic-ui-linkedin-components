import React from "react";
import { Header, Divider, Card } from "semantic-ui-react";

const EducationSection = props => (
  <div className="divider-space">
    <Header>Education</Header>
    <Divider />
    <Card.Group>
      {props.education.map(course => (
        <Card key={course.degree_name}>
          <Card.Content>
            <Card.Header>{course.degree_name}</Card.Header>
            <Card.Meta>{course.school_name}</Card.Meta>
          </Card.Content>
          <Card.Content extra>
            From: {course.start_date} To: {course.end_date}
          </Card.Content>
        </Card>
      ))}
    </Card.Group>
  </div>
);

export default EducationSection;

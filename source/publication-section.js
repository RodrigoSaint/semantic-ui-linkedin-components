import React from "react";
import { Button, Header, Divider, List } from "semantic-ui-react";
import PublicationItem from "./publication-item";

export default class PublicationSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMore: false
    };
  }

  get publicationsToDisplay() {
    var publications = this.props.publications.sort((a, b) => {
      let aPublicationDate = new Date(a.publication_date);
      let bPublicationDate = new Date(b.publication_date);

      if (aPublicationDate < bPublicationDate) return 1;
      if (aPublicationDate > bPublicationDate) return -1;
      return 0;
    });

    if (this.state.showMore) return publications;
    return publications.slice(0, 5);
  }

  get displayButton() {
    if (this.state.showMore)
      return (
        <Button negative onClick={() => this.setState({ showMore: false })}>
          Show less
        </Button>
      );
    return (
      <Button positive onClick={() => this.setState({ showMore: true })}>
        Show more
      </Button>
    );
  }

  render() {
    return (
      <div className="divider-space">
        <Header size="medium">Publications</Header>
        <Divider />
        <List divided relaxed>
          {this.publicationsToDisplay.map(publication => (
            <PublicationItem key={publication.url} publication={publication} />
          ))}
        </List>
        {this.displayButton}
      </div>
    );
  }
}

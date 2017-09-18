import React from 'react';
import { Card, Image, Icon } from 'semantic-ui-react';

class MovieList extends React.Component {
  render() {
    return(
      <Card fluid>
        <Image src='./ww.jpeg' />
        <Card.Content>
          <Card.Header>
            Wonder Woman
          </Card.Header>
          <Card.Meta>
            <span className='date'>
              Released May 2017
            </span>
          </Card.Meta>
          <Card.Description>
            She kicks butt
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a>
            <Icon name='user' />
            222000 Likes
          </a>
        </Card.Content>
      </Card>
    )
  }
}

export default MovieList;

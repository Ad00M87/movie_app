import React from 'react';
import { Card, Icon } from 'semantic-ui-react';

class SocialBox extends React.Component {
  render() {
    return(
      <Card fluid style={{ background: 'rgb(218, 218, 218)'}}>
        <Card.Content extra>
          <a>
            <Icon name='facebook square' size='big' />
            13,222,000 Likes
          </a>
          <br />
          <a>
            <Icon name='twitter square' size='big'/>
            5,222,000 Tweets
          </a>
          <br />
          <a>
            <Icon name='snapchat square' size='big'/>
            13,222,000 Snaps
          </a>
        </Card.Content>
      </Card>
    )
  }
}

export default SocialBox;

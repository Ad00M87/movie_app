import React from 'react';
import { Grid, Image } from 'semantic-ui-react';

const Movie = ({ id, title, length, rating, genre, mpa_rating, description, img_url }) => (
      <Grid columns={3} divided>
        <Grid.Row>
          <Grid.Column width={4}>
            { img_url && <Image src={img_url} /> }
          </Grid.Column>
          <Grid.Column width={5}>
            {title}
            {mpa_rating}
            {length}
            {genre}
            {rating}
          </Grid.Column>
          <Grid.Column width={7}>
            {description}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )

export default Movie;

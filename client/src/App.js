import React, { Component } from 'react';
import { Container, Grid } from 'semantic-ui-react';
import NavBar from './components/NavBar';
import Movie from './components/Movie';
import SocialBox from './components/SocialBox';
import MovieForm from './components/MovieForm';

class App extends Component {
  state = { movies: [] }

  addMovie = (movie) => {
    const { movies } = this.state;
    this.setState({ movies: [movie, ...movies] })
  }

  render() {
    const { movies } = this.state;
    const movieList = movies.map( m => <Movie key={m.id} {...m} />);
    return (
      <Container>
        <NavBar />
        <Grid>
          <Grid.Column width={10}>
            { movieList }
          </Grid.Column>
          <Grid.Column width={6}>
            <SocialBox />
            <MovieForm addMovie={this.addMovie}/>
          </Grid.Column>
        </Grid>
      </Container>
    );
  }
}

export default App;

import React from 'react';
import { Form, Button } from 'semantic-ui-react';
import Dropzone from 'react-dropzone';
import axios from 'axios';

class MovieForm extends React.Component {
  state = { title: '', length: '', rating: '', gernre: '', description: '', file: '', mpa_rating: ''}

  onDrop = (files) => {
    this.setState({ file: files[0] })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let data = new FormData();
    const { title, length, rating, genre, description, file, mpa_rating } = this.state;
    data.append('title', title);
    data.append('description', description);
    data.append('rating', rating);
    data.append('genre', genre);
    data.append('img', file);
    data.append('length', length)
    data.append('mpa_rating', mpa_rating);
    axios.post('/api/movies', data)
      .then( res => {
        this.props.addMovie(res.data)
        this.setState({ title: '', length: '', rating: '', gernre: '', description: '', file: '', mpa_rating: '' })
      })
  }

  handleChange = (e) => {
    let { name, value } = e.target;
    this.setState({ [name]: value })
  }

  render() {
    return(
      <div style={{ background: 'rgb(218, 218, 218)', padding: '5px', borderRadius: '10px'}}>
      <h2>Add a movie</h2>
      <Form onSubmit={this.handleSubmit}>
        <Form.Input value={this.state.title} label='Movie Title' placeholder='i.e. Batman' onChange={this.handleChange} />
        <Form.Input value={this.state.length} label='Movie Length' placeholder='112 minutes' onChange={this.handleChange} />
        <Form.Group inline>
          <label>Critic Rating</label>
          <Form.Radio label='1' value='1' />
          <Form.Radio label='2' value='2' />
          <Form.Radio label='3' value='3' />
          <Form.Radio label='4' value='4' />
          <Form.Radio label='5' value='5' />
        </Form.Group>
        <Form.Group>
          <Form.Field value={this.state.gernre} label='Genre' control='select' onChange={this.handleChange}>
            <option value={this.state.gernre}>Action</option>
            <option value={this.state.gernre}>Drauma</option>
            <option value={this.state.gernre}>Romance</option>
            <option value={this.state.gernre}>Thriller</option>
            <option value={this.state.gernre}>Comedy</option>
            <option value={this.state.gernre}>Kids</option>
          </Form.Field>
        </Form.Group>
        <Form.Group>
          <Form.Field value={this.state.mpa_rating} label='MPA Rating' control='select' onChange={this.handleChange}>
            <option value='G'>G</option>
            <option value='PG'>PG</option>
            <option value='PG-13'>PG-13</option>
            <option value='R'>R</option>
            <option value='NC-17'>NC-17</option>
            <option value='R'>R</option>
          </Form.Field>
        </Form.Group>
        <Form.TextArea value={this.state.description} label='Description' placeholder='About the movie...' onChange={this.handleChange} />
        <Dropzone
          style={
            {
            marginBottom: '10px',
                border: 'dashed 1px black',
                width: '100%',
                height: '50px',
                textAlign: 'center'
            }
          }
          onDrop={this.onDrop}
          multiple={false}
          >
            Add a poster imagee...
          </Dropzone>
          <Button type='submit'>Submit</Button>
      </Form>
      </div>
    )
  }
}

export default MovieForm;

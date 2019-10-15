import React from 'react';
import axios from 'axios';
import './App.css';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photoUrl: '',
      firstName: '',
      lastName: '',
      title: '',
      story: '',
      favoriteColor: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange (e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit (e) {
    e.preventDefault();
    const form = this.state;
    axios.post('/new', form)
    .then(res => {
      console.log('Post new teammate', res);
    })
    .catch(err => {
      console.log('Error:', err);
    })
  }

  render() {
    return (
      <form className="form-style" onSubmit={this.handleSubmit}>
        <label>
          Photo Link:
          <input
            type="text"
            name="photoUrl"
            placeholder="photoUrl"
            onChange={this.handleChange}
          />
        </label>
        <label>
          First Name:
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            onChange={this.handleChange}
          />
        </label>
        <label>
          Last Name:
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            onChange={this.handleChange}
          />
        </label>
        <label>
          Title:
          <input
            type="text"
            name="title"
            placeholder="Title"
            onChange={this.handleChange}
          />
        </label>
        <label>
          Story:
          <input
            type="text"
            name="story"
            placeholder="Story"
            onChange={this.handleChange}
          />
        </label>
        <label>
          Favorite Color:
          <input
            type="text"
            name="favoriteColor"
            placeholder="favoriteColor"
            onChange={this.handleChange}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Form;
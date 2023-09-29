import React from 'react';

import axios from 'axios';

export default class PersonList extends React.Component {
  state = {
    persons: []
  }

  componentDidMount() {
    axios.get(`https://rickandmortyapi.com/api/character?page=1`)
      .then(res => {
        const persons = res.data.results;
        this.setState({ persons });
        console.log(res.data)
      })
  }

  render() {
    return (
      <div>
        { this.state.persons.map(person => 
        <div>
          <img src={person.image}/>
          <p>{person.name}</p>
          <p>{person.location.name}</p>
        </div>
        )}
      </div>
    )
  }
}
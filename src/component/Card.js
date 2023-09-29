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
      <div className='carrer'>
        { this.state.persons.map(person => 
        <div className='card'>
          <img className='card-img-top' src={person.image}/>
          <div className='card-body'>
          <h2 className='card-title'>{person.name}</h2>
          <p className='card-text'>{person.location.name}</p>
          <a href='#' className='btn btn-dark'>Détails -></a>
          </div>
        </div>
        )}
      </div>
    )
  }
}
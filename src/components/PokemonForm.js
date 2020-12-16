import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {


  handleFormSubmit = (e) => {
    e.preventDefault()
    fetch('http://localhost:3000/pokemon', {
      method: 'POST',
      headers: {
          'Content-Type' : 'application/json',
          'Accept' : 'application/json'
      },
      body: JSON.stringify({
          name: e.target.querySelector('#name').value,
          hp: e.target.querySelector('#hp').value,
          sprites: {
            front: e.target.querySelector('#front-url').value,
            back: e.target.querySelector('#back-url').value
          }
      })
    })
    .then(resp => resp.json())
    .then(newPoke => this.props.addNewPokemon(newPoke))
  }

  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.handleFormSubmit}>
          <Form.Group widths="equal">
            <Form.Input id='name' fluid label="Name" placeholder="Name" name="name" />
            <Form.Input id='hp' fluid label="hp" placeholder="hp" name="hp" />
            <Form.Input id='front-url' fluid label="Front Image URL" placeholder="url" name="frontUrl" />
            <Form.Input id='back-url' fluid label="Back Image URL" placeholder="url" name="backUrl" />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm

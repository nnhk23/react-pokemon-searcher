import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {

  state={
    pokemons: [],
    searchTerm: ''
  }

  componentDidMount() {
    fetch('http://localhost:3000/pokemon')
    .then(resp => resp.json())
    .then(pokemons => this.setState({pokemons}))
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.setState({searchTerm: e.target.getElementsByClassName('prompt')[0].value})
  }

  addNewPokemon = (pokemon) => {
    this.setState({pokemons: [...this.state.pokemons, pokemon]})
  }

  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm addNewPokemon={this.addNewPokemon}/>
        <br />
        <Search handleSubmit={this.handleSubmit}/>
        <br />
        <PokemonCollection pokemons={this.state.pokemons} searchTerm={this.state.searchTerm}/>
      </Container>
    )
  }
}

export default PokemonPage

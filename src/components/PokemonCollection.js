import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {

  renderPokemonCard = () => {
    let filteredPoke
    if (this.props.searchTerm){
      filteredPoke = this.props.pokemons.filter(pokemon => pokemon.name.includes(this.props.searchTerm))
    } else {
      filteredPoke = this.props.pokemons
    }

    return filteredPoke.map(pokemon => 
      <PokemonCard key ={pokemon.id} pokemon={pokemon} />
    )
  }

  render() {
    return (
      <Card.Group itemsPerRow={6}>
          {this.renderPokemonCard()}
      </Card.Group>
    )
  }
}

export default PokemonCollection

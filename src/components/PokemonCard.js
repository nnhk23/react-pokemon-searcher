import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  state={
    displayFront: true
  }

  displayCardPic = () => {
    this.setState({
      displayFront: !this.state.displayFront
    })
  }

  render() {
    const {name, hp, sprites} = this.props.pokemon
    return (
      <Card onClick={this.displayCardPic}>
        <div>
          <div className="image">
            {this.state.displayFront ? <img alt="oh no!" src={sprites.front} /> : <img alt="oh no!" src={sprites.back} />}
          </div>
          <div className="content">
            <div className="header">{name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {hp}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard

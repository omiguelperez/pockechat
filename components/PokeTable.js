'use strict'

import React from 'react'
import PokeRow from './PokeRow'

class PokeTable extends React.Component {
  render () {
    return <ul>
      {
        this.props.pokemons.map(pokemon => {
          return <PokeRow key={pokemon.number} name={pokemon.name} 
            number={pokemon.number} className="pokerow" />
        })
      }
    </ul>
  }
}

export default PokeTable

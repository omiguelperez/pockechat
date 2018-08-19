'use strict'

import React from 'react'
import uid from 'uid'
import PokeTable from './PokeTable'
import PokeChat from './PokeChat'

class PokeApp extends React.Component {
  constructor (props) {
    super(props)
    this.state = { messages: [] }
    this.onGrowl = this.onGrowl.bind(this)
  }

  onGrowl (name) {
    let text = `${name}, ${name}!`
    this.state.messages.push({ id: uid(), text })
    let messages = this.state.messages
    this.setState({ messages })
  }
  
  render () {
    const pokemons = [
      { number: 1, name: 'Bulbasaur' },
      { number: 2, name: 'Ibysaur' },
      { number: 3, name: 'Venusaur' }
    ]

    return <div className='pokeapp'>
      <PokeTable pokemons={pokemons} onGrowl={this.onGrowl} />
      <PokeChat messages={this.state.messages} />
    </div>
  }
}

export default PokeApp

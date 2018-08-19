'use strict'

import React from 'react'
import uid from 'uid'
import io from 'socket.io-client'
import $ from 'jquery'
import PokeTable from './PokeTable'
import PokeChat from './PokeChat'

class PokeApp extends React.Component {
  constructor (props) {
    super(props)
    this.state = { messages: [], pokemons: [] }
    this.onGrowl = this.onGrowl.bind(this)
    this.user = uid(10)
  }

  componentWillMount () {
    $.get('/pokemons', pokemons => {
      this.setState({ pokemons })
    })
    
    this.socket = io.connect('http://localhost:3000')
    this.socket.on('message', message => {
      this.newMessage(message)
    })
  }

  onGrowl (name) {
    let text = `${name}, ${name}!`
    let message = { id: uid(), text, user: this.user }
    this.newMessage(message)
    this.socket.emit('message', message)
  }

  newMessage (message) {
    this.state.messages.push(message)
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
      <PokeTable pokemons={this.state.pokemons} onGrowl={this.onGrowl} />
      <PokeChat messages={this.state.messages} />
    </div>
  }
}

export default PokeApp

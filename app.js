'use strict'

const pokemons = [
  { number: 1, name: 'Bulbasaur' },
  { number: 2, name: 'Ibysaur' },
  { number: 3, name: 'Venusaur' }
]

const container = document.getElementById('container')

class PokeAvatar extends React.Component {
  render () {
    let url = `http://veekun.com/dex/media/pokemon/main-sprites/x-y/${this.props.number}.png`
    return <img src={url} className='avatar' />
  }
}

class PokeRow extends React.Component {
  render () {    
    return <li>
      <PokeAvatar number={this.props.number} />
      {this.props.name}
    </li>
  }
}

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

let pokemon = pokemons[Math.floor(Math.random() * pokemons.length)]

ReactDOM.render(
  <PokeTable pokemons={pokemons} />,
  container
)

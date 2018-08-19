'use strict'

import React from 'react'

class PokeAvatar extends React.Component {
  render () {
    let url = `http://veekun.com/dex/media/pokemon/main-sprites/x-y/${this.props.number}.png`
    return <img src={url} className='avatar' />
  }
}

export default PokeAvatar

import React, { Component } from 'react'
import ColorBox from './ColorBox'
import './Pallette.css'
import { v4 as uuid } from 'uuid';

export default class Palette extends Component {
  render() {
    let colorBox = this.props.colors.map(color => <ColorBox key={uuid()} color = {color.color} title = {color.name} />)
    return (
      <div className='Palette'>
        {/* NavBar */}
        <div className='Palette-colors'>{colorBox}</div>
        {/* Footer */}
      </div>
    )
  }
}

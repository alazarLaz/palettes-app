import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import MiniPalette from './MiniPalette';
import './PaletteList.css'

export default class PaletteList extends Component {
  render() {
    const { palettes } = this.props;
    const palettesList = palettes.map(
      palette=> 
      <Link to= {`/palettes/${ palette.id }`}>
      <MiniPalette palette = { palette }/>
      </Link>
      )
    return (
      <div className='PalleteList'>
        <div className='PalletesContainer'>
          <div className='PalleteNavBar'>
            <h3>React Colors</h3>
            <span>Create a pallete</span>
          </div>
          <div className='PalletesBox'>
            { palettesList }
          </div>
        </div>
      </div>
    )
  }
}

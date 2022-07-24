import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class PaletteList extends Component {
  render() {
    const { palettes } = this.props;
    return (
      <div>
        <h1>React Colors</h1>
        {palettes.map(
            palette=> 
            <Link to ={`/palettes/${palette.id}`} key={palette.id}>
            <h1>{palette.paletteName}</h1>
            </Link>
            )}
         {/* <Link to ={`/${color.id}`}></Link> */}
      </div>
    )
  }
}

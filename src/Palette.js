import React, { Component } from 'react'
import 'rc-slider/assets/index.css'
import ColorBox from './ColorBox'
import './Pallette.css'
import { v4 as uuid } from 'uuid';
import NavBar from './NavBar';

export default class Palette extends Component {

  constructor(props) {
    super(props)
    this.state = {
       level : 500,
       value : "hex"
    }
    this.changelLevel = this.changelLevel.bind(this)
    this.changeFormat = this.changeFormat.bind(this)
  }

  changelLevel(level)
  {
    this.setState({ level })
  }

  changeFormat(format)
  {
    this.setState({
      value: format
    })
  }
 
  render() {
    const { colors, paletteName, emoji } = this.props.palette;
    const { level, value } = this.state;
    let colorBox = colors[level].map(color =>
       <ColorBox 
       key={ uuid() } 
       color = {color[value]} 
       title = {color.name} />)
    return (
      
        <div className='Palette'>
          {/* NavBar */}
          <NavBar changeFormat = {this.changeFormat} level = {level} changelLevel = {this.changelLevel}></NavBar>
        <div className='Palette-colors'>{colorBox}</div>
        {/* Footer */}
        <div className='Palette-footer'>
          {paletteName}
          <span className='emoji'>{emoji}</span>
        </div>
      </div>
    )
  }
}

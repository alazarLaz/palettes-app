import React, { Component } from 'react'
import ColorBox from './ColorBox'
import './Pallette.css'
import { v4 as uuid } from 'uuid';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css'

export default class Palette extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
       level : 500,
    }
    this.changelLevel = this.changelLevel.bind(this)
  }

  changelLevel(level)
  {
    this.setState({ level })
  }
 
  render() {
    const { colors } = this.props.palette;
    const { level } = this.state;
    let colorBox = colors[level].map(color =>
       <ColorBox 
       key={uuid()} 
       color = {color.hex} 
       title = {color.name} />)
    return (
      <div className='Palette'>
        {/* NavBar */}
        <Slider 
        defaultValue={level} 
        step = {100} min={100} max={900} 
        onAfterChange = {this.changelLevel}>
        </Slider>
        <div className='Palette-colors'>{colorBox}</div>
        {/* Footer */}
      </div>
    )
  }
}

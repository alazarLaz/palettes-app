import React, { Component } from 'react'
import Slider from 'rc-slider';
import MenuItem from '@mui/material/MenuItem'
import './NavBar.css'
import { Select } from '@mui/material';


export default class NavBar extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         value: "hex"
      }
      this.handleChange = this.handleChange.bind(this)
    }

    handleChange(evt)
    {
        this.setState({value: evt.target.value})
        this.props.changeFormat(evt.target.value)
    }
    
  render() {
    const { changelLevel, level } = this.props;
    const { value } = this.state;
    return (
      <div className='Navbar'>
        <div className='Logo'><p>reactcolorpicker</p></div>
        <div>Level: {this.props.level}</div>
        <div className='slider'>
            <Slider 
              defaultValue={ level } 
              step = {100} min={100} max={900} 
              onAfterChange = { changelLevel }>
            </Slider>
          </div>
          <Select value={value} onChange = {this.handleChange}>
                <MenuItem value = "hex">Hex - #ffffff</MenuItem>
                <MenuItem value = "rgb">Rgb - (255,255,255)</MenuItem>
                <MenuItem value = "rgba">Rgba - (255,255,255,1)</MenuItem>
            </Select>
      </div>
    )
  }
}

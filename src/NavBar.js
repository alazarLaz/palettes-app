import React, { Component } from 'react'
import Slider from 'rc-slider';
import MenuItem from '@mui/material/MenuItem'
import './NavBar.css'
import { IconButton, Select, Snackbar } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom'



export default class NavBar extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         value: "hex", open : false
      }
      this.handleChange = this.handleChange.bind(this)
      this.handleSnackBarClose = this.handleSnackBarClose.bind(this)
    }

    handleChange(evt)
    {
        this.setState({value: evt.target.value})
        this.props.changeFormat(evt.target.value)
        this.setState({ open:true })

    }
    handleSnackBarClose(evt)
    {
        this.setState({open:false})
    }
    
  render() {
    const { changelLevel, level } = this.props;
    const { value, open } = this.state;
    return (
      <div className='Navbar'>
        <Link to = "/" className='Logo'>
        <div >
          <p>reactcolorpicker</p></div>
        </Link>
        <div>Level: {this.props.level}</div>
        <div className='slider'>
            <Slider 
              defaultValue={ level } 
              step = {100} min={100} max={900} 
              onAfterChange = { changelLevel }>
            </Slider>
          </div>
          <Select value={value} onChange = {this.handleChange} className = "select-menu">
                <MenuItem value = "hex">Hex - #ffffff</MenuItem>
                <MenuItem value = "rgb">Rgb - (255,255,255)</MenuItem>
                <MenuItem value = "rgba">Rgba - (255,255,255,1)</MenuItem>
            </Select>
            <Snackbar
                open = { open } 
                autoHideDuration = { 6000 }
                onClose = { this.handleSnackBarClose }
                message = {<span>Format changed to : {value.toUpperCase()}</span>}
                action = {[
                <IconButton 
                onClick={this.handleSnackBarClose}
                color = "inherit"
                children = { <CloseIcon/> }
                />
                ]}
                />
      </div>
    )
  }
}

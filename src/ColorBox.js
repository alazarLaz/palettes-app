import React, { Component } from 'react'
import './ColorBox.css'

export default class ColorBox extends Component {
  render() {
    return (
      <div style={{backgroundColor: `${this.props.color}`}} className='ColorBox'>
        <div className='copy-container'>
        <div className='box-content'>
            <span>{this.props.title}</span>
        </div>
        <button className='copy-button'>Copy</button>        
      </div>
      <div className='see-more'>More</div>
    </div>
    )
  }
}

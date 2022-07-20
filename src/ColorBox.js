import React, { Component } from 'react'
import './ColorBox.css'
import CopyToClipboard from 'react-copy-to-clipboard'

export default class ColorBox extends Component {
    constructor(props) {
      super(props)
      this.state = {
        copied:false
      }
      this.copyColor = this.copyColor.bind(this)
      this.handleClick = this.handleClick.bind(this)
    }
    
    handleClick(evt)
    {
        this.copyColor()
    }
    copyColor(){
        // Clipboard.apply
        this.setState({copied:true}
            ,()=>setTimeout(()=>{
            this.setState({
                copied:false
            })
        },1500)
        )
    }


  render() {
    const { copied } = this.state;
    return (
        <CopyToClipboard onCopy = {this.copyColor} text = {this.props.color}>
            <div style={{background: `${this.props.color}`}} className='ColorBox'>
                <div
                    style={{background: `${this.props.color}`}}
                    className={`copy-overlay ${copied?' show':''}`}
                 />
                <div className={`copied ${copied?' show':''}`}>
                        <h1>Copied!</h1>
                        
                        <p>{this.props.color}</p>
                    </div>

                <div className='copy-container'>
                    <div className='box-content'>
                        <span>{this.props.title}</span>
                    </div>
                    <button onClick={this.handleClick} className='copy-button'>Copy</button>        
                </div>
                <span className='see-more'>More</span>
            </div>
    </CopyToClipboard>

    )
  }
}

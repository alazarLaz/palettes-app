import React from 'react'

export default function MiniPalette(props) {
    const { colors, paletteName, emoji } = props.palette
    const miniColors = colors.map(
        color => <div 
        className='MiniPaletteColor' 
        style={{backgroundColor: `${color.color}` }}>
        </div> )
  return (
    <div className='MiniPalette'>
      <div className='MiniPaletteColors'>
        { miniColors }
      </div>
      <div className='MiniPaletteBar'>
        <span >{ paletteName }</span>
        <span>{ emoji }</span>
      </div>
    </div>
  )
}

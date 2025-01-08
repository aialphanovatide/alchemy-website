import React from 'react'
import './titlePage.css'

function TitlePage({title, subtitle}) {
  return (
    <div className='title_container'>
        <h2 className='title_style'>{title}</h2>
        <p className='subtitle_style'>{subtitle}</p>
    </div>
  )
}

export default TitlePage
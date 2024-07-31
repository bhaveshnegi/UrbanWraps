import React from 'react'
import DropList from './DropList'

const Customization = ({ colors, setColors }) => {
  return (
    <div style={{borderStyle:"solid",borderRadius:"20px",width:"400px", height:"400px"}}>
      <h2>Customization</h2>
      <DropList colors={colors} setColors={setColors} />
    </div>
  )
}

export default Customization

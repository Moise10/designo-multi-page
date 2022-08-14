import { Avatar } from '@mui/material'
import React from 'react'

function CountryLocation({name, imgUrl, tag, text}) {
  return (
    <div>
      <Avatar src={imgUrl} />
      
    </div>
  )
}

export default CountryLocation
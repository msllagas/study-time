import { View, Text, Image } from 'react-native';
import logo from '../../assets/imgs/logo3.png';

import React from 'react'

const Logo = ({style, props}) => {
  return (
    <Image
        style={style}
        source={logo}
        {...props}
      />
  )
}

export default Logo
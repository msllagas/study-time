import { StyleSheet, Text, Pressable } from 'react-native'
import React from 'react'

const ButtonLink = ({onPress, title, style}) => {
  return (
    <Pressable onPress={onPress}>
      <Text style={[styles.link, style]}>{title}</Text>
    </Pressable>
  )
}

export default ButtonLink;

const styles = StyleSheet.create({
  link: {
    color: 'blue'
  }
})
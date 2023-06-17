import { StyleSheet,  Pressable } from 'react-native';
import { Text } from 'react-native-paper';
import React from 'react'

const ButtonLink = ({onPress, title, style}) => {
  return (
    <Pressable onPress={onPress}>
      <Text variant='labelLarge' style={[styles.link, style]}>{title}</Text>
    </Pressable>
  )
}

export default ButtonLink;

const styles = StyleSheet.create({
  link: {
    color: 'blue'
  }
})
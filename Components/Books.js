import { View, Text } from 'react-native'
import React from 'react'
import Book from './Book'
import { ScrollView } from 'native-base'

const Books = () => {
  return (
    <View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <Book />
        <Book />
        <Book />
        <Book />
        <Book />

      </ScrollView>
    </View>
  )
}

export default Books
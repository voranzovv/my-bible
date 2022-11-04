import { View, TouchableOpacity, ImageBackground } from 'react-native'
import React from 'react'
import { Box, Center, Image, Text } from 'native-base'
import Img from '../assets/dawki-river.png'

const Book = () => {
  return (
    <View>
      <TouchableOpacity>
        {/* <Image source={Img} h='20' w={20} rounded="lg" m={1} alt="Book" shadow={3}/> */}
        <Box h='20' w={20} m={1} shadow={3} >
          <ImageBackground source={Img} style={{ width: "100%", height: "100%" }} imageStyle={{ borderRadius: 5 }}>
            <View style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center', }}>
              <Text>Centered text</Text>
            </View>
          </ImageBackground>
        </Box>
      </TouchableOpacity>
    </View>
  )
}

export default Book
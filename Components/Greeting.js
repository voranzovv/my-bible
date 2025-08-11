import { View, Text, Image } from 'react-native'
import React from 'react'
import { Box, Center, Heading } from 'native-base'

const Greeting = () => {
    return (
        <Box bg={{
            linearGradient: {
                colors: ["black", "light.500"],
                start: [0, 0],
                end: [1, 0]
            }
        }} p="5" rounded="xl" _text={{
            fontSize: 'md',
            fontWeight: 'medium',
            color: 'warmGray.50',
            textAlign: 'center'
        }}


        >

            <Image size={150} alt="fallback text" borderRadius={100} source={{
                uri: "https://-page-icon.png"
            }} fallbackSource={{
                uri: "https://www.w3schools.com/css/img_lights.jpg"
            }} />
            <Heading color="light.50" >
                Good Morning{" "}
                {/* <Heading color="emerald.400">Voran</Heading> */}
            </Heading>
            <Text pt="3">
                NativeBase is a simple,
            </Text>
        </Box>
    )
}

export default Greeting
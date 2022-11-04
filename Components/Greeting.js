import { View, Text } from 'react-native'
import React from 'react'
import { Box, Center, Heading } from 'native-base'

const Greeting = () => {
    return (
        <Box bg={{
            linearGradient: {
                colors: ["#845EC2", "#fbcfe8"],
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
            <Heading>
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
import { View, Text } from 'react-native'
import React from 'react'
import { Box, Center, HStack } from 'native-base'

const Documentaries = () => {
    return (
        <HStack space={3} justifyContent="space-between" mt={2} mr="3">
            <Box h="20" w="50%" bg="primary.300" rounded="md" shadow={3} />
            <Box h="20" w="50%" bg="primary.500" rounded="md" shadow={3} />
            {/* <Center h="40" w="48%" bg="primary.500" rounded="md" shadow={3} /> */}
        </HStack>
    )
}

export default Documentaries
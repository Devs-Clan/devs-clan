import React from 'react'
import { HStack, Icon, Text } from '@chakra-ui/react'

export default function IconWithText({icon, text}, props) {
    return (
        <HStack spacing="2" {...props}>
            <Icon as={icon} boxSize={6} />
            <Text fontSize="md">{text}</Text>
        </HStack>
    )
}

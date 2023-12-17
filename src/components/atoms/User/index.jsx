import React from 'react'
import { Avatar, Text, Flex, Box } from '@chakra-ui/react'

export default function User({ avatar, name, bio, ...props }) {
   return (
      <Flex mb={4} {...props}>
         <Avatar src={avatar} mr={2} />
         <Box>
            <Text fontWeight="bold">{name}</Text>
            <Text>{bio}</Text>
         </Box>
      </Flex>
   )
}

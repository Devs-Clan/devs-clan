import React from 'react'
import { HStack, Badge } from '@chakra-ui/react'


export default function Tags({ tags }) {
   return (
      <HStack wrap='wrap' justifyContent='center' gap={1}>
         {tags.map((tag, index) => (
            <Badge borderRadius="full" px="2" colorScheme="teal" key={index}>
               {tag}
            </Badge>
         ))}
      </HStack>
   )
}

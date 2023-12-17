import React from 'react'
import { Badge, HStack } from '@chakra-ui/react'


export default function Tags({ tags, ...props }) {
   return (
      <HStack gap={1} wrap="wrap" {...props}>
         {tags.map((tag, index) => (     
            <Badge shadow="sm" borderRadius="full" px="2" colorScheme="teal" key={index}>
               {tag}
            </Badge>
         ))}
      </HStack>
   )
}

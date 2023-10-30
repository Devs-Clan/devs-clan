import { Avatar, Card, Text, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'


export default function ProjectCard({ name, src }) {
    const [scale, setScale] = useState(1);

    return (
        <Card
            w='100%'
            h='100%'
            boxShadow='md'
            rounded='xl'
            style={{ transform: `scale(${scale})`, transition: `all .3s ease-in-out` }}
            onMouseEnter={() => setScale(1.03)}
            onMouseLeave={() => setScale(1)}
        >
            <VStack space={2} margin={5}>
                <Text fontWeight="bold">{name}</Text>
                <Avatar src={src} size='2xl' boxShadow='xs' />
            </VStack>
        </Card>
    )
}

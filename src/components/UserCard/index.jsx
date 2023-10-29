import { Avatar, Card, Text, VStack } from '@chakra-ui/react'
import React from 'react'

export default function UserCard({ username, avatarSrc }) {
    return (
        <Card title={username} w='100%' h='100%'>
            <VStack space={2} margin={5}>
                <Text>{username}</Text>
                <Avatar src={avatarSrc} w={30}/>
            </VStack>
        </Card>
    )
}

import React from 'react'
import { Card, Grid, GridItem, Text, VStack } from '@chakra-ui/react'
import UserCard from '../../components/UserCard'

export default function Homepage() {
  return (
    <Grid
      height='full'
      gap={2.5}
      templateRows='repeat(2, 1fr)'
      templateColumns='repeat(5, 1fr)'>
      <GridItem colSpan={1} rowSpan={2}>
        <VStack spacing={2}>
          <UserCard username="Yechiel"
            avatarSrc="https://avatars.githubusercontent.com/u/51932344?s=96&v=4" />
          <UserCard username="Yechiel"
            avatarSrc="https://avatars.githubusercontent.com/u/51932344?s=96&v=4" />
        </VStack>
      </GridItem>
      <GridItem colSpan={4} rowSpan={3}>
        <Card w='100%' h='100%' alignItems='center'>
          <Text>Explore Projects</Text>
        </Card>
      </GridItem>
    </Grid>
  )
}

import React from 'react'
import { Card, Grid, GridItem, Text, VStack } from '@chakra-ui/react'
import { PreviewCard } from '../../components/cards'

export default function Homepage() {
  return (
    <Grid
      height='full'
      gap={2.5}
      templateRows='repeat(2, 1fr)'
      templateColumns='repeat(5, 1fr)'>
      <GridItem colSpan={1} rowSpan={2} >
        <VStack h='100%'>
          <Text fontSize='2xl'>Today's Project</Text>
          <PreviewCard name="downlaod from google" src="https://github.githubassets.com/images/modules/profile/achievements/quickdraw-default--light-medium.png" />
          <Text fontSize='2xl'>Today's Programmer</Text>
          <PreviewCard name="Yechiel" src="https://avatars.githubusercontent.com/u/51932344?s=96&v=4" />
        </VStack>
      </GridItem>
      <GridItem colSpan={4} rowSpan={3}>
        <Card h='100%' alignItems='center' padding={5} boxShadow='md' rounded='xl'>
          <Text fontSize='2xl'>Explore Projects</Text>
        </Card>
      </GridItem>
    </Grid>
  )
}

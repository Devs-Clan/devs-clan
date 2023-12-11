import React from 'react'
import { Text, VStack, Flex, Grid, Wrap } from '@chakra-ui/react'
import { ProjectCard } from '../../components/cards'

function Users() {
  return (
    <>
      {
        Array.apply(0, Array(10)).map(function (x, i) {
          return <ProjectCard
            imageUrl="https://avatars.githubusercontent.com/u/51932344?s=96&v=4"
            owner='947yechielb'
            tags={['hi', 'test']}
            title='this product'
            key='key' />
        })
      }
    </>
  )
}

function TodayStars() {
  return (
    <VStack w='30%'>
      <Text fontSize='2xl'>Today's Project</Text>
      <ProjectCard
        imageUrl="https://avatars.githubusercontent.com/u/51932344?s=96&v=4"
        owner='947yechielb'
        tags={[]}
        title='this product'
        key='key' />

      <Text fontSize='2xl'>Today's Programmer</Text>
      <ProjectCard
        imageUrl="https://avatars.githubusercontent.com/u/51932344?s=96&v=4"
        owner='947yechielb'
        tags={['hi', 'test']}
        title='this product'
        key='key' />

    </VStack>
  )
}

function ExploreProjects() {
  return (
    <Wrap padding={5} boxShadow='sm' rounded='xl'>
      <Grid templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)', lg: 'repeat(4, 1fr)' }} gap={6}>
        <Users />
      </Grid>
    </Wrap>
  )
}

export default function Homepage() {
  return (
    <Flex
      flexDirection={{ base: 'column', md: 'row' }}
      // height='full'
      gap={2.5}>
      <TodayStars />
      <ExploreProjects />
    </Flex>
  )
}

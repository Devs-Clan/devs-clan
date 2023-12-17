import React from 'react'
import { Text, VStack, Flex, Grid } from '@chakra-ui/react'
import { ProjectCard } from '../../components/cards'
import { Search } from '../../components/atoms'

function Users() {
  return (
    <>
      {
        Array.apply(0, Array(30)).map(function (x, i) {
          return <ProjectCard
            imageUrl="https://avatars.githubusercontent.com/u/51932344?s=96&v=4"
            owner='947yechielb'
            tags={['React', 'Chakra UI', 'Cyber', 'github', 'help']}
            title='this product'
            key={x} />
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
        w='90%'
        imageUrl="https://avatars.githubusercontent.com/u/51932344?s=96&v=4"
        owner='947yechielb'
        tags={['React', 'Chakra UI', 'Cyber', 'github', 'help', 'React', 'Chakra UI', 'Cyber', 'github', 'help']}
        title='this product'
        key='key' />

      <Text fontSize='2xl'>Today's Programmer</Text>
      <ProjectCard
        w='90%'
        imageUrl="https://avatars.githubusercontent.com/u/51932344?s=96&v=4"
        owner='947yechielb'
        tags={['hi', 'test']}
        title='this afsfd'
        key='key' />

    </VStack>
  )
}

function ExploreProjects() {
  return (
    <VStack alignItems='stretch' padding={5} boxShadow='sm' rounded='xl'>
      <Search />
      <Grid templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)', lg: 'repeat(4, 1fr)' }} gap={6}>
        <Users />
      </Grid>
    </VStack>
  )
}

export default function Homepage() {
  return (
    <Flex

      flexDirection={{ base: 'column', md: 'row' }}
      gap={2.5}>
      <TodayStars />
      <ExploreProjects />
    </Flex>
  )
}

import React from 'react';
import { Box, Image, Badge, Text, useColorModeValue, VStack, HStack, useDisclosure } from "@chakra-ui/react";
import ProjectModal from '../../modals/ProjectModal';

const project = {
   title: 'Cool Project Title',
   owner: {
      name: 'John Doe',
      avatar: 'url_to_avatar_image',
      bio: 'Software Developer',
   },
   image: 'https://avatars.githubusercontent.com/u/96751677?s=400&u=30d6aca00d95ac0d11a7835e948adac8a75117d6&v=4',
   tags: ['React', 'Chakra UI'],
   description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
   likes: 42,
   githubLink: 'https://avatars.githubusercontent.com/u/96751677?s=400&u=30d6aca00d95ac0d11a7835e948adac8a75117d6&v=4',
   isOwner: true,
};

export default function ProjectCard({ title, owner, tags, imageUrl }) {
   const bgColor = useColorModeValue("white", "gray.800");
   const textColor = useColorModeValue("black", "white");
   const {
      isOpen: isProjectModalOpen,
      onOpen: onProjectModalOpen,
      onClose: onProjectModalClose
   } = useDisclosure();

   return (
      <>
         <VStack
            onClick={onProjectModalOpen}
            _hover={{
               transform: "scale(1.05)",
               transition: "transform 0.5s"
            }}
            p={2}
            w='90%'
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            bg={bgColor}
            color={textColor}>
            <Image objectFit='fill' src={imageUrl} alt={title} />
            <Box paddingInline={100}>
               <HStack>
                  {tags.map((tag, index) => (
                     <Badge borderRadius="full" px="2" colorScheme="teal" key={index}>
                        {tag}
                     </Badge>
                  ))}
               </HStack>
               <Box
                  mt="1"
                  fontWeight="semibold"
                  as="h4"
                  lineHeight="tight"
                  isTruncated
               >
                  {title}
               </Box>
               <Text mt="2" color="gray.500">
                  {owner}
               </Text>
            </Box>
         </VStack>
         <ProjectModal project={project} isOpen={isProjectModalOpen} onClose={onProjectModalClose} />
      </>
   );
};
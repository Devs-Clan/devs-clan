import React from 'react';
import { Image, Text, Box, HStack } from '@chakra-ui/react';
import { Tags, User } from '../../atoms';
import Footer from './footer'
import BaseModal from '../BaseModal';


export default function ProjectModal({ isOpen, onClose, project }) {
   const { title, owner, image, tags, description } = project;

   return (
      <BaseModal isOpen={isOpen} onClose={onClose} title={title}>
         <HStack>
            <Image rounded='md' src={image} alt={title} mb={4} />
            <Box gap={1}>
               <User avatar={owner.avatar} name={owner.name} bio={owner.bio} />
               <Tags gap={1} tags={tags} />
            </Box>
         </HStack>
         <Text mb={4}>{description}</Text>
         <Footer project={project} />
      </BaseModal>
   );
};

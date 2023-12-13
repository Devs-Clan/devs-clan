import React from 'react';
import { Image, Text, useToast, Box, IconButton, Button, ModalFooter, HStack, VStack } from '@chakra-ui/react';
import { FaGithub, FaEdit, FaHeart } from 'react-icons/fa';
import { Tags, User, IconWithText } from '../../atoms';
import BaseModal from '../BaseModal';


export default function ProjectModal({ isOpen, onClose, project }) {
    const toast = useToast()
    const { title, owner, image, tags, description, likes, githubLink, isOwner } = project;

    return (
        <BaseModal isOpen={isOpen} onClose={onClose} title={title}>
            <HStack>
                <Image rounded='md' src={image} alt={title} mb={4} />
                <VStack gap={1}>
                    <User avatar={owner.avatar} name={owner.name} bio={owner.bio} />
                    <Box m={3}>
                        <Tags tags={tags} />
                    </Box>
                </VStack>
            </HStack>

            <Text mb={4}>{description}</Text>
            <ModalFooter flexDirection='column'>
                <HStack >
                    {isOwner && (
                        <Button
                            leftIcon={<FaEdit />}
                            onClick={() => toast({
                                title: 'Not implemented',
                                description: 'still dont',
                                status: 'warning'
                            })} >
                            Edit
                        </Button>
                    )}
                    <Button leftIcon={<FaHeart />}>
                        {likes} Likes
                    </Button>
                    <Button as="a" href={githubLink} leftIcon={<FaGithub />} target="_blank" rel="noopener noreferrer">
                        Github
                    </Button>
                </HStack>
            </ModalFooter>
        </BaseModal>
    );
};
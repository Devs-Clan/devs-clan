import React from 'react';
import { Box, Image, Badge, Text, useColorModeValue, VStack, HStack } from "@chakra-ui/react";

export default function ProjectCard({ title, owner, tags, imageUrl }) {
    const bgColor = useColorModeValue("white", "gray.800");
    const textColor = useColorModeValue("black", "white");
    return (
        <VStack
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
    );
};
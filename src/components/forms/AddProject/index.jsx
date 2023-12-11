import { useState } from 'react';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Switch,
  useToast,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter
} from "@chakra-ui/react";
import BaseModal from '../BaseModal';

export default function AddProjectForm({ isOpen, onClose }) {
  const toast = useToast();
  const [owner, setOwner] = useState("");
  const [githubLink, setGithubLink] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [description, setDescription] = useState("");
  const [importTags, setImportTags] = useState(true);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!owner || !githubLink) {
      toast({
        title: "Error.",
        description: "Owner and Github link are required.",
        status: "error"
      });
    } else {
      // Submit form
      onClose();
    }
  };

  return (
    <BaseModal isOpen={isOpen} onClose={onClose} title='Add Project'>
      <Box as="form" onSubmit={handleSubmit}>
        <FormControl id="owner" isRequired>
          <FormLabel>Owner</FormLabel>
          <Input type="text" value={owner} onChange={(e) => setOwner(e.target.value)} />
        </FormControl>
        <FormControl id="github-link" isRequired mt="4">
          <FormLabel>Github Link</FormLabel>
          <Input type="url" value={githubLink} onChange={(e) => setGithubLink(e.target.value)} />
        </FormControl>
        <FormControl id="image-url" mt="4">
          <FormLabel>Image URL</FormLabel>
          <Input type="url" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} />
        </FormControl>
        <FormControl id="description" mt="4">
          <FormLabel>Description</FormLabel>
          <Input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
        </FormControl>
        <FormControl display="flex" alignItems="center" mt="4">
          <FormLabel mb="0">Import tags from Github</FormLabel>
          <Switch colorScheme='teal' isChecked={importTags} onChange={(e) => setImportTags(e.target.checked)} />
        </FormControl>
      </Box>
      <ModalFooter gap={2}>
        <Button variant="ghost" onClick={onClose}>Cancel</Button>
        <Button colorScheme="teal" mr={3} onClick={handleSubmit}>
          Add
        </Button>
      </ModalFooter>
    </BaseModal>
  );
};

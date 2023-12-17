import { useToast, Button, ModalFooter, HStack } from '@chakra-ui/react';
import { FaGithub, FaEdit, FaHeart } from 'react-icons/fa';
import { MdMailOutline } from 'react-icons/md'
import { Mailto } from '../../atoms';


export default function Footer({ project }) {
   const toast = useToast()
   const { likes, githubLink, isOwner, owner } = project;
   console.log(project)
   return (
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

            <Mailto email={owner.email}>
               <Button leftIcon={<MdMailOutline />}>Contact</Button>
            </Mailto>
            <Button as="a" href={githubLink} leftIcon={<FaGithub />} target="_blank" rel="noopener noreferrer">
               Github
            </Button>
            <Button leftIcon={<FaHeart />}>
               {likes} Likes
            </Button>
         </HStack>
      </ModalFooter>
   )
}
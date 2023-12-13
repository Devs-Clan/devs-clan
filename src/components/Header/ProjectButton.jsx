import { ChevronDownIcon } from '@chakra-ui/icons';
import {
   Box,
   Button,
   Menu,
   MenuButton,
   MenuList,
   MenuItem,
   useDisclosure
} from '@chakra-ui/react';
import AddProjectModal from '../modals/AddProjectModal'


export default function ProjectButton() {
   const {
      isOpen: isCreateProjectOpen,
      onOpen: onCreateProjectOpen,
      onClose: onCreateProjectClose
   } = useDisclosure();

   return (
      <Box>
         <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
               Projects
            </MenuButton>
            <MenuList>
               <MenuItem>Explore</MenuItem>
               <MenuItem onClick={onCreateProjectOpen}>Add</MenuItem>
            </MenuList>
         </Menu>
         <AddProjectModal isOpen={isCreateProjectOpen} onClose={onCreateProjectClose} />
      </Box>
   );
};
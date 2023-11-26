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
import CreateProject from '../forms/CreateProject'

export default function ProjectButton() {
   const {
      isOpen: isCreateProjectOpen,
      onOpen: onCreateProjectOpen,
      onClose: oCreateProjectClose
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
         <CreateProject isOpen={isCreateProjectOpen} onClose={oCreateProjectClose} />
      </Box>
   );
};
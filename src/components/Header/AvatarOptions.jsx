import { useContext } from 'react';
import { FaSignOutAlt, FaRegSun, FaRegUserCircle, FaSignInAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'
import {
   Avatar,
   Button,
   Menu,
   MenuButton,
   MenuList,
   MenuItem,
   MenuDivider,
   Text,
   useDisclosure,
   HStack
} from '@chakra-ui/react';
import { AuthContext } from "../../App";
import SignInModal from '../modals/SignInModal'

export default function AvatarOptions() {
   const navigate = useNavigate()
   const { state, dispatch } = useContext(AuthContext);
   const {
      isOpen: isSignInOpen,
      onOpen: onSignInOpen,
      onClose: onSignInClose
   } = useDisclosure();

   return (
      <>
         <Menu>
            <MenuButton
               as={Button}
               rounded={'full'}
               variant={'link'}
               cursor={'pointer'}
               minW={0}
            >
               <Avatar ml={3} size={'sm'}/>
            </MenuButton>
            <MenuList>
               <MenuItem onClick={() => navigate('profile')}>
                  <FaRegUserCircle />
                  <Text ml={3} >Profile</Text>
               </MenuItem>
               <MenuItem onClick={() => navigate('settings')}>
                  <FaRegSun />
                  <Text ml={3} >Settings</Text>
               </MenuItem>
               <MenuDivider />
               <MenuItem>
                  {
                     state.isLoggedIn ? (
                        <HStack onClick={() => {
                           dispatch({ type: "LOGOUT" });
                        }}>
                           <FaSignOutAlt />
                           <Text ml={4}>Sign Out</Text>
                        </HStack>
                     ) : (
                        <HStack onClick={onSignInOpen}>
                           <FaSignInAlt />
                           <Text ml={4}>Sign In</Text>
                        </HStack>
                     )
                  }
               </MenuItem>
            </MenuList>
         </Menu>
         <SignInModal isOpen={isSignInOpen} onClose={onSignInClose} />
      </>
   )
}
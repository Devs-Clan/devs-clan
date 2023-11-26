import { FaSignOutAlt, FaRegSun, FaRegUserCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'
import {
    Avatar,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    Text
} from '@chakra-ui/react';

export default function AvatarOptions() {
    const navigate = useNavigate()
    return (
        <Menu>
            <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}
            >
                <Avatar ml={3} size={'sm'} src={''} />
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
                    <FaSignOutAlt />
                    <Text ml={3} >Sign Out</Text>
                </MenuItem>
            </MenuList>
        </Menu>
    )
}
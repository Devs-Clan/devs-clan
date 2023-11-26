import { ChevronDownIcon } from '@chakra-ui/icons';
import {
    Box,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem
} from '@chakra-ui/react';

export default function ProjectButton() {
    return (
        <Box>
            <Menu>
                <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                    Projects
                </MenuButton>
                <MenuList>
                    <MenuItem>Explore</MenuItem>
                    <MenuItem>Add</MenuItem>
                </MenuList>
            </Menu>
        </Box>
    );
};
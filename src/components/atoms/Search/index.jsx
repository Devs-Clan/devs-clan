import { Input, InputGroup, InputLeftElement, Icon, Box, useColorModeValue } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

export default function Search() {
   const borderColor = useColorModeValue("gray.300", "gray.600")

   return (
      <Box>
         <InputGroup>
            <Input type="text" placeholder="Search..." focusBorderColor={borderColor} />
            <InputLeftElement pointerEvents="none" children={<Icon as={SearchIcon} color="gray.300" />} />
         </InputGroup>
      </Box>
   );
};
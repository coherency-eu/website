import {
  Box,
  Flex,
  Heading,
  HStack,
  Image,
  Link as ChakraLink,
  Spacer,
} from '@chakra-ui/react';
import {Link} from 'gatsby';
import React from 'react';
import logo from '../../images/logo_hor_header.png';

const Header: React.FC = () => {
  return (
    <Box padding="6">
      <HStack>
        <Image src={logo} alt="logo" height="80px" />
        <Spacer />
        <ChakraLink>
          <Link to="/">Home</Link>
        </ChakraLink>
        <ChakraLink>
          <Link to="/automotive">Automotive</Link>
        </ChakraLink>
        <ChakraLink>
          <Link to="/iot">IoT</Link>
        </ChakraLink>
        <ChakraLink>
          <Link to="/blog">Blog</Link>
        </ChakraLink>
        <ChakraLink>
          <Link to="/about">About</Link>
        </ChakraLink>
      </HStack>
    </Box>
  );
};

export default Header;

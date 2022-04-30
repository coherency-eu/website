import {
  Box,
  VStack,
  Container,
  Heading,
  Text,
  Spacer,
  Center,
  HStack,
  Square,
  Flex,
} from '@chakra-ui/react';
import * as React from 'react';
import PageLayout from '../layout/PageLayout';
import homeImage from '../images/home.png';

// markup
const IndexPage = () => {
  return (
    <>
      <PageLayout>
        <Box
          bgImage={homeImage}
          bgSize="cover"
          bgPos="center"
          bgRepeat="no-repeat"
          width="100%"
          height="40vh"
        >
          <Container maxW="90%" paddingTop={12} color="white">
            <Spacer />
            <Heading size="2xl">Connecting Things</Heading>
            <Heading size="md" marginTop={8}>
              Technology becomes relevant in everyday lives when it enables
              people achieving more results with less effort
            </Heading>
          </Container>
        </Box>
        <Container maxWidth="90%" padding={12}>
          <Box>
            <Center>
              <Heading> Section title</Heading>
            </Center>
            <Center>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              </Text>
            </Center>
          </Box>
          <Flex>
            <Box
              bg="white"
              width="30%"
              height="150px"
              margin={2}
              border="1px solid"
              borderColor="primary"
            >
              <Square>Box 1</Square>
            </Box>
            <Box
              bg="white"
              width="30%"
              height="150px"
              margin={2}
              border="1px solid"
              borderColor="primary"
            >
              <Square>Box 2</Square>
            </Box>
            <Box
              bg="white"
              width="30%"
              height="150px"
              margin={2}
              border="1px solid"
              borderColor="primary"
            >
              <Square>Box 3</Square>
            </Box>
          </Flex>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Malesuada fames ac turpis egestas sed tempus urna et. Tincidunt
            lobortis feugiat vivamus at augue eget arcu dictum varius. Sed
            viverra tellus in hac habitasse platea dictumst vestibulum. Vitae
            elementum curabitur vitae nunc. Diam vel quam elementum pulvinar
            etiam non quam lacus. Pretium viverra suspendisse potenti nullam.
            Sem fringilla ut morbi tincidunt augue. Amet massa vitae tortor
            condimentum lacinia quis. Eu volutpat odio facilisis mauris sit
            amet. Non sodales neque sodales ut. Mauris ultrices eros in cursus.
            Egestas purus viverra accumsan in nisl nisi scelerisque eu. At augue
            eget arcu dictum varius. Elementum pulvinar etiam non quam lacus
            suspendisse faucibus interdum. Imperdiet dui accumsan sit amet nulla
            facilisi morbi tempus iaculis. Tincidunt eget nullam non nisi est
            sit amet facilisis. Mauris ultrices eros in cursus turpis massa
            tincidunt dui ut. Nulla facilisi cras fermentum odio eu. Imperdiet
            proin fermentum leo vel orci porta. Leo vel orci porta non pulvinar
            neque laoreet suspendisse. Sagittis purus sit amet volutpat
            consequat mauris. Sem nulla pharetra diam sit amet nisl. Sagittis
            orci a scelerisque purus semper eget duis. Sem fringilla ut morbi
            tincidunt. Amet mauris commodo quis imperdiet massa tincidunt. Ante
            metus dictum at tempor commodo ullamcorper a lacus. Scelerisque
            varius morbi enim nunc faucibus a pellentesque. Urna nunc id cursus
            metus. Neque convallis a cras semper auctor neque. Tincidunt dui ut
            ornare lectus sit amet est placerat in. Blandit turpis cursus in hac
            habitasse platea dictumst. Nullam ac tortor vitae purus faucibus
            ornare suspendisse. Id aliquet risus feugiat in ante metus dictum
            at. Vestibulum mattis ullamcorper velit sed ullamcorper morbi
            tincidunt ornare massa.
          </Text>
        </Container>
      </PageLayout>
    </>
  );
};

export default IndexPage;

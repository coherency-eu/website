import {Box, Center, Container, Heading, Spacer} from '@chakra-ui/react';
import React, {FC} from 'react';
import PageLayout from '../layout/PageLayout';

import iotImage from '../images/automotive.png';

const IotPage = () => {
  return (
    <PageLayout>
      <Box
        bgImage={iotImage}
        bgSize="cover"
        bgPos="center"
        bgRepeat="no-repeat"
        width="100%"
        height="40vh"
      >
        <Container maxW="90%" paddingTop={12} color="white">
          <Spacer />
          <Heading size="2xl">Automotive</Heading>
          <Heading size="md" marginTop={8}>
            Technology becomes relevant in everyday lives when it enables people
            achieving more results with less effort
          </Heading>
        </Container>
      </Box>
      <Box>
        <Container maxWidth="90%" padding={12}>
          <Center>
            <Heading> Section description</Heading>
          </Center>
          <Center>
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
            proin fermentum leo vel orci porta. Leo vel or
          </Center>
        </Container>
      </Box>
    </PageLayout>
  );
};

export default IotPage;

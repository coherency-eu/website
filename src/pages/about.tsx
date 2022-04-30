import {Box, Center, Heading} from '@chakra-ui/react';
import React, {FC} from 'react';
import PageLayout from '../layout/PageLayout';

const AboutPage = () => {
  return (
    <PageLayout>
      <Box>
        <Center>
          <Heading> About</Heading>
        </Center>
        <Center></Center>
      </Box>
    </PageLayout>
  );
};

export default AboutPage;

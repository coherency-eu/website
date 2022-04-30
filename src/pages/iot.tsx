import {Box, Center, Heading} from '@chakra-ui/react';
import React, {FC} from 'react';
import PageLayout from '../layout/PageLayout';

const IotPage = () => {
  return (
    <PageLayout>
      <Box>
        <Center>
          <Heading> IoT</Heading>
        </Center>
        <Center></Center>
      </Box>
    </PageLayout>
  );
};

export default IotPage;

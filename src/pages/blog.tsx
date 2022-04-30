import {Box, Center, Heading} from '@chakra-ui/react';
import React, {FC} from 'react';
import PageLayout from '../layout/PageLayout';

const BlogPage = () => {
  return (
    <PageLayout>
      <Box>
        <Center>
          <Heading> Blog</Heading>
        </Center>
        <Center></Center>
      </Box>
    </PageLayout>
  );
};

export default BlogPage;

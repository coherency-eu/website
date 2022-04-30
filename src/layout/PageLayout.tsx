import {Box, Container} from '@chakra-ui/react';
import React, {FC} from 'react';
import Header from '../components/Header';

const PageLayout: FC = ({children}) => {
  return (
    <>
      <Box maxWidth="100%">
        <Header />

        {children}
      </Box>
    </>
  );
};

export default PageLayout;

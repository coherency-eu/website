import {extendTheme} from '@chakra-ui/react';

const Link = {
  baseStyle: {
    color: 'purple.500',
    fontWeight: 'bold',
    paddingLeft: '0.5rem',
  },
};

const theme = {
  colors: {
    primary: 'rebeccapurple',
  },
  fonts: {
    body: 'Helvetica, sans-serif',
  },
  components: {
    Link,
  },
};

export default extendTheme(theme);

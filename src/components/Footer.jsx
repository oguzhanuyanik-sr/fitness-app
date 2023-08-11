import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/images/Logo-1.png';

const Footer = () => {
  return (
    <Box mt='80px' bgcolor='#fff3f4'>
      <Stack
        alignItems='center'
        px='40px'
        sx={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <img src={Logo} alt='logo' width='200px' height='40px' />
        <Typography variant='h5' pb='40px' mt='40px'>
          All rights reserved.
        </Typography>
      </Stack>
    </Box>
  );
};

export default Footer;

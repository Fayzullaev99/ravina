import React from 'react';
import { Typography, Container } from '@mui/material';

const Footer = () => {
  return (
    <footer sx={{ marginTop: 4, padding: 2, backgroundColor: (theme) => theme.palette.grey[200] }}>
      <Container maxWidth="md">
        <Typography variant="body2" color="textSecondary" align="center">
          © {new Date().getFullYear()} My Books. All rights reserved.
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;

import React from 'react';
import '../index.css';
import { AppBar, Toolbar, Typography, Container, Link} from '@mui/material';

const Footer = () => {
    return (
        <AppBar position="static" color="primary" sx={{ mt: 4, py: 2 }}>
        <Container maxWidth="md">
          <Toolbar sx={{ justifyContent: "center" }}>
            <Typography variant="body1" color="inherit">
              &copy; {new Date().getFullYear()} My App. All rights reserved.
            </Typography>
            <Link href="/about" color="inherit" sx={{ ml: 2 }}>
              About
            </Link>
            <Link href="/contact" color="inherit" sx={{ ml: 2 }}>
              Contact
            </Link>
          </Toolbar>
        </Container>
      </AppBar>
    );
};

export default Footer;
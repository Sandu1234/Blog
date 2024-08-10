import React from 'react';
import { AppBar, Toolbar, Button, Box } from '@mui/material';
import LanguageIcon from '@mui/icons-material/Language';

function Navbar() {
  return (
    <AppBar position="static" sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
      <Toolbar sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
        {/* Logo Image */}
        <Box
          component="img"
          src="Images/3.png"
          alt="Logo"
          sx={{
            height: { xs: '80px', md: '150px' }, // Responsive height for logo
          }}
        />

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          {/* Visit My Website Button with Web Icon */}
          <Button
            color="inherit"
            sx={{
              color: '#2F2B29',
              textTransform: 'none',
              display: { xs: 'none', md: 'flex' }, // Hidden on small screens, shown on medium and larger
              alignItems: 'center',
              gap: 1,
              fontSize: '20px',
            }}
            component="a"
            href="https://sandamini-nayanathara.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LanguageIcon /> Visit My Website
          </Button>

          {/* Profile Picture */}
          <Box
            component="img"
            src="/Images/Profile.jpg" // Replace with your profile image path
            alt="Profile"
            sx={{
              width: { xs: '40px', md: '50px' }, // Responsive width
              height: { xs: '40px', md: '50px' }, // Responsive height
              borderRadius: '50%',
              border: '2px solid #2F2B29',
              objectFit: 'cover',
            }}
          />
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;

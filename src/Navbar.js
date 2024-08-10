import React from 'react';
import { AppBar, Toolbar, Button, Box, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import LanguageIcon from '@mui/icons-material/Language'; // Importing the web icon

function Navbar() {
  return (
    <AppBar position="static" sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        {/* Logo Image */}
        <Box component="img" src="Images/3.png" alt="Logo" sx={{ height: '150px' }} />

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          {/* Visit My Website Button with Web Icon */}
          <Button
            color="inherit"
            sx={{ color: '#2F2B29', textTransform: 'none', display: 'flex', alignItems: 'center', gap: 1, fontSize:'20px' }}
            component="a"
            href="https://sandamini-nayanathara.netlify.app/"
            target="_blank" // Open in new tab
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
              width: '50px',
              height: '50px',
              borderRadius: '50%', // Makes the image circular
              border: '2px solid #2F2B29', // Optional: Add a border around the image
              objectFit: 'cover', // Ensures the image covers the box area
            }}
          />

          {/* Mobile Menu Icon */}
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ display: { xs: 'block', md: 'none' }, color: '#2F2B29' }}
          >
            <MenuIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;

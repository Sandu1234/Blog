import React from 'react';
import { Box, Typography, IconButton, Grid } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LanguageIcon from '@mui/icons-material/Language';
import MediumIcon from '@mui/icons-material/ImportContacts'; // Using ImportContacts as a placeholder for Medium
import GitHubIcon from '@mui/icons-material/GitHub';

function Footer() {
  return (
    <Box
      sx={{
        position: 'relative',
        backgroundColor: '#2F2B29',
        color: '#FFFFFF',
        padding: { xs: '20px 10px', md: '40px 20px' },  // Responsive padding
        marginLeft: { xs: '10px', md: '40px' },         // Responsive margins
        marginRight: { xs: '10px', md: '40px' },
        marginBottom: '40px',
      }}
    >
      <Typography
  variant="h4"
  align="center"
  gutterBottom
  sx={{
    fontSize: { xs: '0.8rem', sm: '2rem', md: '2.5rem' }, // Responsive font sizes
    padding: { xs: '10px', sm: '20px' }, // Adjust padding if needed
  }}
>
  Let’s get started on something great
</Typography>

      <Box sx={{ textAlign: 'center', marginBottom: '40px' }}>
      </Box>

      {/* Social Media Icons */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',  // Allow icons to wrap on smaller screens
          marginTop: 4,
          gap: 2,
        }}
      >
        <IconButton
          component="a"
          href="https://www.linkedin.com/in/sandamini-nayanathara/"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ color: '#FFFFFF' }}
        >
          <LinkedInIcon fontSize="large" />
        </IconButton>

        <IconButton
          component="a"
          href="https://web.facebook.com/sandu.nayanathara/"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ color: '#FFFFFF' }}
        >
          <FacebookIcon fontSize="large" />
        </IconButton>

        <IconButton
          component="a"
          href="https://www.instagram.com/hercodejourney99/?next=%2F"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ color: '#FFFFFF' }}
        >
          <InstagramIcon fontSize="large" />
        </IconButton>

        <IconButton
          component="a"
          href="https://sandamini-nayanathara.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ color: '#FFFFFF' }}
        >
          <LanguageIcon fontSize="large" />
        </IconButton>

        <IconButton
          component="a"
          href="https://medium.com/@sandunayanathara99"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ color: '#FFFFFF' }}
        >
          <MediumIcon fontSize="large" />
        </IconButton>

        <IconButton
          component="a"
          href="https://github.com/Sandu1234"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ color: '#FFFFFF' }}
        >
          <GitHubIcon fontSize="large" />
        </IconButton>
      </Box>

      <Box sx={{ textAlign: 'center', marginTop: 4 }}>
        <Typography variant="caption">© 2024 Thought Nexus. All rights reserved.</Typography>
      </Box>

      {/* Background Grid with Transparent Squares */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '90px',
          height: '90px',
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 30px)',
          gridTemplateRows: 'repeat(3, 30px)',
        }}
      >
        {/* Filled Squares */}
        <Box sx={{ backgroundColor: '#F9F7EF' }} />
        <Box sx={{ backgroundColor: '#2F2B29' }} />
        <Box sx={{ backgroundColor: '#F9F7EF' }} />
        <Box sx={{ backgroundColor: '#2F2B29' }} />
        <Box sx={{ backgroundColor: '#F9F7EF' }} />
        <Box sx={{ backgroundColor: '#2F2B29' }} />
        <Box sx={{ backgroundColor: '#2F2B29' }} />
        <Box sx={{ backgroundColor: '#2F2B29' }} />
        <Box sx={{ backgroundColor: '#F9F7EF' }} />
      </Box>
    </Box>
  );
}

export default Footer;

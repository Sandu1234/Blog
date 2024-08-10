import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
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
        padding: '40px 20px',
        marginLeft: '40px',        // Add space on the left
        marginRight: '40px',       // Add space on the right
        marginBottom: '40px',       // Add space on the right
        // borderRadius: '8px',       // Optional: Rounded corners
      }}
    >
      <Typography variant="h4" align="center" gutterBottom>
        Let’s get started on something great
      </Typography>
      <Box sx={{ textAlign: 'center', marginBottom: '40px' }}>
</Box>
      {/* Social Media Icons */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
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
          width: '90px',  // Adjust this based on how wide you want the grid to be
          height: '90px', // Adjust this based on how tall you want the grid to be
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

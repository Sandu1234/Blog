import React from 'react';
import { Box, Typography } from '@mui/material';


function HeroSection() {
  return (
    <Box
      sx={{
        backgroundColor: '#F9F7EF',
        backgroundImage: `
          linear-gradient(to right, #c3c3c3 1px, transparent 1px),
          linear-gradient(to bottom, #c3c3c3 1px, transparent 1px)
        `,
        backgroundSize: '25px 25px',
        padding: '40px 20px', // Adjusted padding for top and bottom
        marginLeft: '40px',   // Add space on the left
        marginRight: '40px',  // Add space on the right
        // marginTop: '30px',
        marginBottom: '60px', // Add space below the section
        textAlign: 'left',    // Align text to the left
      }}
    >
      <Box
        sx={{
          display: 'inline-flex',
          alignItems: 'center',
          padding: '0.5em 1em', // Adjust padding as needed
          border: '1px solid #2F2B29',
          borderRadius: '12px',
          marginBottom: '8px',
          marginTop: '10px',
          marginLeft: '6px',
          height: '25px', // Control the height of the button
          boxSizing: 'border-box',
        }}
      >
        <Typography variant="body1" sx={{ color: '#2F2B29', fontWeight: 'bold', fontSize: '20px' }}>
        Thought Nexus Journal
        </Typography>
      </Box>

      <Typography
      variant="h2"
      sx={{
        fontFamily: '"Playfair Display", serif', // Use the custom font
        color: '#2F2B29',
        fontWeight: 700,
        marginTop: 3,
        fontSize: '60px',
        marginLeft: '6px',
      }}
    >
      The Thought Nexus Journal & Insights
    </Typography>

      <Typography
        variant="subtitle1"
        sx={{ color: '#2F2B29', marginTop: 2, fontSize: '1.05rem', marginLeft: '6px',
        }}
      >
       The Thought Nexus Journal features thoughtfully curated articles and insights from diverse fields, showcasing cutting-edge ideas and meaningful discussions.
      </Typography>
    </Box>
  );
}

export default HeroSection;

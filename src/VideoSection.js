import React from "react";
import { Box, Typography } from "@mui/material";

function ImageSection() {
  return (
    <Box
      sx={{
        position: "relative",
        backgroundColor: "#8EB77B", // Fallback background color
        backgroundImage: `url('Images/5.png')`, // Replace with the actual path to your image
        backgroundSize: "cover", // Ensure the image covers the entire section
        backgroundPosition: "center", // Center the image
        backgroundRepeat: "no-repeat", // Prevent the image from repeating
        color: "#FFFFFF",
        padding: "40px 20px",
        marginLeft: "40px", // Add space on the left
        marginRight: "40px", // Add space on the right
        marginBottom: "40px", // Add space at the bottom
        borderRadius: "10px", // Optional: Rounded corners for the section
        height: "500px", // Adjust the height as needed
        overflow: "hidden", // Ensure the squares don't overflow
      }}
    >
      {/* Light Green Overlay */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(20, 20, 20, 0.6)", // Light green overlay with transparency
          zIndex: 1, // Position this behind the text
        }}
      />

      {/* Main Title */}
      <Typography
        variant="h4"
        sx={{
          position: "absolute",
          bottom: "100px",
          left: "20px",
          fontFamily: '"Playfair Display", serif',
          fontWeight: "bold",
          fontSize: "2.5rem", // Adjusted font size
          zIndex: 2, // Ensure text is above the overlay
        }}
      >
        Inspiring Minds and Sharing Knowledge:
      </Typography>

      <Typography
        variant="h4"
        sx={{
          position: "absolute",
          bottom: "60px",
          left: "20px",
          fontFamily: '"Playfair Display", serif',
          fontSize: "2.5rem", // Adjusted font size
          zIndex: 2, // Ensure text is above the overlay
        }}
      >
        Sandamini Nayanathara on Writing and Creativity
      </Typography>

      {/* Subtitle */}
      <Typography
        variant="body1"
        sx={{
          position: "absolute",
          bottom: "10px",
          left: "20px",
          fontFamily: "Roboto, Arial, sans-serif",
          fontSize: "1rem", // Adjusted font size
          zIndex: 2, // Ensure text is above the overlay
        }}
      >
        I'm a passionate content creator and Software Engineer from Colombo, Sri Lanka.<br></br> I have shared my insights and expertise through a diverse collection of blogs, covering topics from technology trends to personal growth. 
        
      </Typography>

      {/* Additional Info */}
      <Box
        sx={{
          position: "absolute",
          bottom: "10px",
          right: "20px",
          display: "flex",
          gap: "20px",
          zIndex: 2, // Ensure text is above the overlay
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            paddingLeft: "10px", // Add some padding to give space between the text and the line
            borderLeft: "2px solid #FFFFFF", // White vertical line
          }}
        >
          <Typography
            variant="caption"
            sx={{
              fontFamily: "Roboto, Arial, sans-serif",
              fontSize: "0.875rem",
              fontWeight: "bold",
            }}
          >
            Written by
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontFamily: "Roboto, Arial, sans-serif",
              fontSize: "0.875rem",
            }}
          >
            Sandamini Nayanathara
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            paddingLeft: "10px", // Add some padding to give space between the text and the line
            borderLeft: "2px solid #FFFFFF", // White vertical line
          }}
        >
          <Typography
            variant="caption"
            sx={{
              fontFamily: "Roboto, Arial, sans-serif",
              fontSize: "0.875rem",
              fontWeight: "bold",
            }}
          >
            Published on
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontFamily: "Roboto, Arial, sans-serif",
              fontSize: "0.875rem",
            }}
          >
            12 April 2024
          </Typography>
        </Box>
      </Box>

      {/* Grid Overlay for the top right corner */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "90px", // Adjust size based on your grid design
          height: "90px",
          display: "grid",
          gridTemplateColumns: "repeat(3, 30px)",
          gridTemplateRows: "repeat(3, 30px)",
          zIndex: 2, // Ensure grid is above the overlay
        }}
      >
        {/* Individual squares, some transparent, some opaque */}
        <Box sx={{ backgroundColor: "#F9F7EF" }} />
        <Box sx={{ backgroundColor: "transparent" }} />
        <Box sx={{ backgroundColor: "#F9F7EF" }} />
        <Box sx={{ backgroundColor: "transparent" }} />
        <Box sx={{ backgroundColor: "#F9F7EF" }} />
        <Box sx={{ backgroundColor: "transparent" }} />
        <Box sx={{ backgroundColor: "transparent" }} />
        <Box sx={{ backgroundColor: "transparent" }} />
        <Box sx={{ backgroundColor: "#F9F7EF" }} />
      </Box>
    </Box>
  );
}

export default ImageSection;

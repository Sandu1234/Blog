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
        height: { xs: "500px", md: "500px" }, // Set a fixed height
        overflow: "hidden", // Ensure the squares don't overflow
      }}
    >
      {/* Dark Overlay */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(20, 20, 20, 0.6)", // Dark overlay with transparency
          zIndex: 1, // Position this behind the text
        }}
      />

      {/* Main Title */}
      <Box
        sx={{
          position: "absolute",
          bottom: { xs: "auto", md: "100px" }, // Adjust position based on screen size
          left: { xs: "10px", md: "20px" }, // Adjust position based on screen size
          top: { xs: "50px", md: "auto" }, // For mobile, place it towards the top
          padding: { xs: "10px", md: 0 },
          zIndex: 2, // Ensure text is above the overlay
          width: { xs: "calc(100% - 20px)", md: "auto" }, // Ensure it fits within the container on mobile
          display: { xs: "none", md: "block" }, // Hide on mobile, show on tablet and web
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontFamily: '"Playfair Display", serif',
            fontWeight: "bold",
            fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" }, // Responsive font sizes
            marginBottom: { xs: "10px", md: "20px" },
          }}
        >
          Inspiring Minds and Sharing Knowledge:
        </Typography>
        <Typography
          variant="h4"
          sx={{
            fontFamily: '"Playfair Display", serif',
            fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" }, // Responsive font sizes
          }}
        >
          Sandamini Nayanathara on Writing and Creativity
        </Typography>
      </Box>

      {/* Subtitle */}
      <Typography
        variant="body1"
        sx={{
          position: "absolute",
          bottom: { xs: "auto", md: "10px" }, // Adjust position based on screen size
          top: { xs: "auto", md: "auto" },
          left: { xs: "10px", md: "20px" },
          right: { xs: "10px", md: "auto" },
          fontFamily: "Roboto, Arial, sans-serif",
          fontSize: { xs: "0.875rem", sm: "1rem" }, // Responsive font sizes
          zIndex: 2, // Ensure text is above the overlay
          marginBottom: { xs: "20px", md: "0" },
          marginTop: { xs: "20px", md: "0" }, // Add margin for spacing on mobile
          width: { xs: "calc(100% - 20px)", md: "auto" }, // Ensure it fits within the container on mobile
          display: { xs: "none", md: "block" }, // Hide on mobile, show on tablet and web
        }}
      >
        I'm a passionate content creator and Software Engineer from Colombo, Sri Lanka.
        <br />
        I have shared my insights and expertise through a diverse collection of blogs, 
        covering topics from technology trends to personal growth.
      </Typography>

      {/* Additional Info */}
      <Box
        sx={{
          position: { xs: "relative", md: "absolute" }, // Relative positioning on mobile for better layout
          bottom: { xs: "auto", md: "10px" },
          right: { xs: "auto", md: "20px" },
          display: { xs: "none", md: "flex" }, // Hide on mobile, show on tablet and web
          flexDirection: { xs: "column", sm: "row" }, // Stack vertically on small screens
          gap: "10px",
          zIndex: 2, // Ensure text is above the overlay
          marginTop: { xs: "20px", md: "0" }, // Add margin on mobile
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
              fontSize: { xs: "0.5rem", sm: "0.875rem" }, // Responsive font sizes
              fontWeight: "bold",
            }}
          >
            Written by
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontFamily: "Roboto, Arial, sans-serif",
              fontSize: { xs: "0.5rem", sm: "0.875rem" }, // Responsive font sizes
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
              fontSize: { xs: "0.5rem", sm: "0.875rem" }, // Responsive font sizes
              fontWeight: "bold",
            }}
          >
            Published on
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontFamily: "Roboto, Arial, sans-serif",
              fontSize: { xs: "0.5rem", sm: "0.875rem" }, // Responsive font sizes
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
          display: { xs: "none", md: "grid" }, // Hide on mobile, show on tablet and web
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

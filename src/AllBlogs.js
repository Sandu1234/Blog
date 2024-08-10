import React, { useEffect, useState } from 'react';
import { Grid, Card, CardContent, Typography, CardActionArea, Box } from '@mui/material';
import axios from 'axios';

const mediumURL = 'https://medium.com/feed/@sandunayanathara99';
const defaultImageUrl = 'Images/By Sandamini Nayanathara.png'; // Replace with the actual path to your default image
const defaultCategory = 'Insights by Sandamini Nayanathara';

function AllBlogs() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchMediumPosts = async () => {
      try {
        const response = await axios.get(
          `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(mediumURL)}`
        );
        const posts = response.data.items.map((item) => ({
          title: item.title,
          subtitle: item.contentSnippet,
          link: item.link,
          category: item.categories.length > 0 ? item.categories[0] : defaultCategory,
          imageUrl: item.thumbnail || defaultImageUrl,
        }));

        setArticles(posts);
      } catch (error) {
        console.error('Error fetching Medium posts:', error);
      }
    };

    fetchMediumPosts();
  }, []);

  return (
    <Grid
      container
      spacing={4}
      sx={{
        paddingTop: '40px',
        paddingBottom: '40px',
        paddingLeft: '40px',
        paddingRight: '40px',
      }}
    >
      {articles.map((article, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Card sx={{ backgroundColor: '#F9F7EF', borderRadius: '12px', height: '100%', display: 'flex', flexDirection: 'column' }}>
            <CardActionArea href={article.link} target="_blank" rel="noopener noreferrer" sx={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'stretch' }}>
              <Box sx={{ position: 'relative', width: '100%', height: '200px', overflow: 'hidden' }}>
                <Box
                  component="img"
                  src={article.imageUrl}
                  alt={article.title}
                  sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                {/* Light Green Overlay */}
                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    // backgroundColor: "rgba(20, 20, 20, 0.6)",
                    zIndex: 1,
                  }}
                />
              </Box>
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h6" sx={{ color: '#2F2B29', fontWeight: 'bold', marginBottom: 1 }}>
                  {article.title}
                </Typography>
                <Typography variant="body2" sx={{ color: '#2F2B29', marginBottom: 2 }}>
                  {article.subtitle}
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  <Typography
                    variant="caption"
                    sx={{
                      color: '#2F2B29',
                      padding: '4px 8px',
                      border: '1px solid #2F2B29',
                      borderRadius: '16px',
                    }}
                  >
                    {article.category}
                  </Typography>
                </Box>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default AllBlogs;

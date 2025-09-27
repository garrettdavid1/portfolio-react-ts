import React from 'react';
import {
  Box,
  Typography,
  Button,
  Container,
  Grid,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { styled } from '@mui/material/styles';

const HeroSection = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
  color: 'white',
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background:
      'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
  },
}));

const FloatingCard = styled(Box)(({ theme }) => ({
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
  backdropFilter: 'blur(10px)',
  borderRadius: 16,
  padding: theme.spacing(3),
  border: '1px solid rgba(255, 255, 255, 0.2)',
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
}));

const Hero: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <HeroSection>
      <Container maxWidth='lg'>
        <Grid container spacing={4} alignItems='center'>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box sx={{ position: 'relative', zIndex: 1 }}>
              <Typography
                variant='h1'
                component='h1'
                gutterBottom
                sx={{
                  fontSize: isMobile ? '2.5rem' : '3.5rem',
                  fontWeight: 700,
                  lineHeight: 1.2,
                  mb: 2,
                }}
              >
                Full-Stack Developer
              </Typography>
              <Typography
                variant='h4'
                component='h2'
                sx={{
                  fontSize: isMobile ? '1.5rem' : '2rem',
                  fontWeight: 400,
                  mb: 3,
                  opacity: 0.9,
                }}
              >
                Building exceptional web experiences
              </Typography>
              <Typography
                variant='body1'
                sx={{
                  fontSize: '1.125rem',
                  mb: 4,
                  opacity: 0.8,
                  maxWidth: '500px',
                }}
              >
                I specialize in creating modern, scalable web applications using
                React, Node.js, and cutting-edge technologies. Let's bring your
                ideas to life.
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                <Button
                  variant='contained'
                  size='large'
                  onClick={() => scrollToSection('projects')}
                  sx={{
                    backgroundColor: 'white',
                    color: 'primary.main',
                    fontWeight: 600,
                    px: 4,
                    py: 1.5,
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.9)',
                    },
                  }}
                >
                  View My Work
                </Button>
                <Button
                  variant='outlined'
                  size='large'
                  onClick={() => scrollToSection('contact')}
                  sx={{
                    borderColor: 'white',
                    color: 'white',
                    fontWeight: 600,
                    px: 4,
                    py: 1.5,
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      borderColor: 'white',
                    },
                  }}
                >
                  Get In Touch
                </Button>
              </Box>
            </Box>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <FloatingCard>
                <Box sx={{ textAlign: 'center' }}>
                  <Typography variant='h6' sx={{ mb: 2, fontWeight: 600 }}>
                    Technologies I Work With
                  </Typography>
                  <Box
                    sx={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: 1,
                      justifyContent: 'center',
                    }}
                  >
                    {[
                      'React',
                      'TypeScript',
                      'Node.js',
                      'MongoDB',
                      'Express.js',
                      'Material-UI',
                      'GraphQL',
                      'Jest',
                    ].map((tech) => (
                      <Box
                        key={tech}
                        sx={{
                          backgroundColor: 'rgba(255, 255, 255, 0.2)',
                          borderRadius: 2,
                          px: 2,
                          py: 1,
                          fontSize: '0.875rem',
                          fontWeight: 500,
                        }}
                      >
                        {tech}
                      </Box>
                    ))}
                  </Box>
                </Box>
              </FloatingCard>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </HeroSection>
  );
};

export { Hero };

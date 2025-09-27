import React from 'react';
import {
  Box,
  Typography,
  Container,
  Grid,
  Link,
  IconButton,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

const FooterSection = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: 'white',
  padding: theme.spacing(4, 0),
}));

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <LinkedInIcon />,
      url: 'https://linkedin.com/in/yourprofile',
      label: 'LinkedIn',
    },
    {
      icon: <GitHubIcon />,
      url: 'https://github.com/yourusername',
      label: 'GitHub',
    },
    {
      icon: <EmailIcon />,
      url: 'mailto:hello@versadev.com',
      label: 'Email',
    },
  ];

  const quickLinks = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Services', href: '#services' },
    { label: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <FooterSection>
      <Container maxWidth='lg'>
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box sx={{ mb: 3 }}>
              <Typography
                variant='h5'
                component='h3'
                sx={{ fontWeight: 700, mb: 2 }}
              >
                Portfolio
              </Typography>
              <Typography
                variant='body1'
                sx={{ opacity: 0.9, lineHeight: 1.6, maxWidth: '400px' }}
              >
                Full-stack developer passionate about creating exceptional
                digital experiences. Let's work together to bring your ideas to
                life.
              </Typography>
            </Box>

            <Box sx={{ display: 'flex', gap: 1, mb: 3 }}>
              {socialLinks.map((social) => (
                <IconButton
                  key={social.label}
                  href={social.url}
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label={social.label}
                  sx={{
                    color: 'white',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.2)',
                    },
                  }}
                >
                  {social.icon}
                </IconButton>
              ))}
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Box sx={{ mb: 3 }}>
              <Typography
                variant='h6'
                component='h4'
                sx={{ fontWeight: 600, mb: 2 }}
              >
                Quick Links
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                {quickLinks.map((link) => (
                  <Link
                    key={link.label}
                    component='button'
                    onClick={() => scrollToSection(link.href.replace('#', ''))}
                    sx={{
                      color: 'white',
                      textDecoration: 'none',
                      textAlign: 'left',
                      opacity: 0.9,
                      '&:hover': {
                        opacity: 1,
                        textDecoration: 'underline',
                      },
                      fontSize: '0.9rem',
                    }}
                  >
                    {link.label}
                  </Link>
                ))}
              </Box>
            </Box>

            <Box>
              <Typography
                variant='h6'
                component='h4'
                sx={{ fontWeight: 600, mb: 2 }}
              >
                Contact Info
              </Typography>
              <Typography variant='body2' sx={{ opacity: 0.9, mb: 1 }}>
                📧 hello@versadev.com
              </Typography>
              <Typography variant='body2' sx={{ opacity: 0.9, mb: 1 }}>
                📱 +1 (555) 123-4567
              </Typography>
              <Typography variant='body2' sx={{ opacity: 0.9 }}>
                📍 Atlanta, GA
              </Typography>
            </Box>
          </Grid>
        </Grid>

        <Box
          sx={{
            borderTop: '1px solid rgba(255, 255, 255, 0.2)',
            mt: 4,
            pt: 3,
            textAlign: 'center',
          }}
        >
          <Typography variant='body2' sx={{ opacity: 0.8 }}>
            © {currentYear} Portfolio. All rights reserved. Built with React &
            Material-UI.
          </Typography>
        </Box>
      </Container>
    </FooterSection>
  );
};

export { Footer };

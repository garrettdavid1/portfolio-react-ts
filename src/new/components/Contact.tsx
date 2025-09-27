import React, { useState } from 'react';
import {
  Box,
  Typography,
  Container,
  Grid,
  TextField,
  Button,
  Card,
  CardContent,
  useTheme,
  useMediaQuery,
  Snackbar,
  Alert,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const ContactSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 0),
  backgroundColor: theme.palette.background.default,
}));

const ContactCard = styled(Card)(({ theme }) => ({
  height: '100%',
  backgroundColor: theme.palette.primary.main,
  color: 'white',
}));

const Contact: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setSnackbarOpen(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: <EmailIcon sx={{ fontSize: '2rem' }} />,
      title: 'Email',
      value: 'hello@versadev.com',
      description: 'Send me an email anytime',
    },
    {
      icon: <PhoneIcon sx={{ fontSize: '2rem' }} />,
      title: 'Phone',
      value: '+1 (555) 123-4567',
      description: 'Call me for urgent matters',
    },
    {
      icon: <LocationOnIcon sx={{ fontSize: '2rem' }} />,
      title: 'Location',
      value: 'Atlanta, GA',
      description: 'Available for remote work',
    },
  ];

  const socialLinks = [
    {
      icon: <LinkedInIcon sx={{ fontSize: '2rem' }} />,
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/yourprofile',
    },
    {
      icon: <GitHubIcon sx={{ fontSize: '2rem' }} />,
      name: 'GitHub',
      url: 'https://github.com/yourusername',
    },
  ];

  return (
    <ContactSection id='contact'>
      <Container maxWidth='lg'>
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography
            variant='h2'
            component='h2'
            gutterBottom
            sx={{
              fontSize: isMobile ? '2rem' : '2.5rem',
              fontWeight: 600,
              color: 'text.primary',
            }}
          >
            Get In Touch
          </Typography>
          <Typography
            variant='body1'
            sx={{
              fontSize: '1.125rem',
              color: 'text.secondary',
              maxWidth: '600px',
              mx: 'auto',
            }}
          >
            Have a project in mind? Let's discuss how we can work together to
            bring your ideas to life.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box sx={{ mb: 4 }}>
              <Typography
                variant='h4'
                component='h3'
                gutterBottom
                sx={{ fontWeight: 600, mb: 3 }}
              >
                Send me a message
              </Typography>
              <form onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField
                      fullWidth
                      label='Your Name'
                      name='name'
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      variant='outlined'
                    />
                  </Grid>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField
                      fullWidth
                      label='Email Address'
                      name='email'
                      type='email'
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      variant='outlined'
                    />
                  </Grid>
                  <Grid size={{ xs: 12 }}>
                    <TextField
                      fullWidth
                      label='Subject'
                      name='subject'
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      variant='outlined'
                    />
                  </Grid>
                  <Grid size={{ xs: 12 }}>
                    <TextField
                      fullWidth
                      label='Message'
                      name='message'
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      multiline
                      rows={5}
                      variant='outlined'
                    />
                  </Grid>
                  <Grid size={{ xs: 12 }}>
                    <Button
                      type='submit'
                      variant='contained'
                      size='large'
                      sx={{
                        px: 4,
                        py: 1.5,
                        fontWeight: 600,
                        fontSize: '1rem',
                      }}
                    >
                      Send Message
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Box sx={{ mb: 4 }}>
              <Typography
                variant='h4'
                component='h3'
                gutterBottom
                sx={{ fontWeight: 600, mb: 3 }}
              >
                Contact Information
              </Typography>
              <Grid container spacing={3}>
                {contactInfo.map((info) => (
                  <Grid size={{ xs: 12 }} key={info.title}>
                    <ContactCard>
                      <CardContent sx={{ p: 3 }}>
                        <Box
                          sx={{ display: 'flex', alignItems: 'center', mb: 2 }}
                        >
                          <Box sx={{ mr: 2 }}>{info.icon}</Box>
                          <Box>
                            <Typography
                              variant='h6'
                              sx={{ fontWeight: 600, mb: 0.5 }}
                            >
                              {info.title}
                            </Typography>
                            <Typography
                              variant='body1'
                              sx={{ fontWeight: 500, mb: 0.5 }}
                            >
                              {info.value}
                            </Typography>
                            <Typography variant='body2' sx={{ opacity: 0.8 }}>
                              {info.description}
                            </Typography>
                          </Box>
                        </Box>
                      </CardContent>
                    </ContactCard>
                  </Grid>
                ))}
              </Grid>
            </Box>

            <Box>
              <Typography
                variant='h5'
                component='h4'
                gutterBottom
                sx={{ fontWeight: 600, mb: 3 }}
              >
                Connect with me
              </Typography>
              <Box sx={{ display: 'flex', gap: 2 }}>
                {socialLinks.map((social) => (
                  <Button
                    key={social.name}
                    variant='outlined'
                    startIcon={social.icon}
                    href={social.url}
                    target='_blank'
                    rel='noopener noreferrer'
                    sx={{
                      borderColor: 'primary.main',
                      color: 'primary.main',
                      fontWeight: 600,
                      '&:hover': {
                        backgroundColor: 'primary.light',
                        color: 'white',
                        borderColor: 'primary.light',
                      },
                    }}
                  >
                    {social.name}
                  </Button>
                ))}
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Snackbar
          open={snackbarOpen}
          autoHideDuration={6000}
          onClose={() => setSnackbarOpen(false)}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        >
          <Alert
            onClose={() => setSnackbarOpen(false)}
            severity='success'
            sx={{ width: '100%' }}
          >
            Thank you for your message! I'll get back to you soon.
          </Alert>
        </Snackbar>
      </Container>
    </ContactSection>
  );
};

export { Contact };

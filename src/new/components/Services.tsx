import React from 'react';
import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import CodeIcon from '@mui/icons-material/Code';
import SchoolIcon from '@mui/icons-material/School';
import BugReportIcon from '@mui/icons-material/BugReport';

const ServicesSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 0),
  backgroundColor: theme.palette.background.paper,
}));

const ServiceCard = styled(Card)(({ theme }) => ({
  height: '100%',
  textAlign: 'center',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: theme.shadows[8],
  },
}));

const ServiceIcon = styled(Box)(({ theme }) => ({
  width: 80,
  height: 80,
  borderRadius: '50%',
  backgroundColor: theme.palette.primary.main,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto 24px',
  color: 'white',
  fontSize: '2rem',
}));

const Services: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const services = [
    {
      title: 'Web Development',
      icon: <CodeIcon sx={{ fontSize: '2.5rem' }} />,
      description:
        'From simple, static websites to full-fledged, interactive web apps, I build it all. Using your brilliant ideas and needs, I will lay out a detailed development plan, execute on it meticulously, and help you launch your next app into the online world.',
      features: [
        'Custom web applications',
        'Responsive design',
        'Performance optimization',
        'Cross-browser compatibility',
        'Modern frameworks & libraries',
      ],
    },
    {
      title: 'Mentoring & Training',
      icon: <SchoolIcon sx={{ fontSize: '2.5rem' }} />,
      description:
        'Learning to code can be a challenge, especially on your own. I offer my knowledge, time, and experience teaching, training, and recruiting to help emerging developers through one-on-one sessions and personalized guidance.',
      features: [
        'One-on-one coding sessions',
        'Career guidance',
        'Skill assessment',
        'Learning path development',
        'Interview preparation',
      ],
    },
    {
      title: 'Bug Fixing & Maintenance',
      icon: <BugReportIcon sx={{ fontSize: '2.5rem' }} />,
      description:
        'When bugs appear in your app, nobody is happy. I investigate, perform root cause analysis, and promptly eliminate issues from your worries. I have years of experience in identifying and fixing problems in highly complex applications.',
      features: [
        'Bug investigation & analysis',
        'Performance debugging',
        'Code refactoring',
        'Security vulnerability fixes',
        'Ongoing maintenance support',
      ],
    },
  ];

  return (
    <ServicesSection id='services'>
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
            Services I Offer
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
            Comprehensive development solutions tailored to your specific needs
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {services.map((service) => (
            <Grid size={{ xs: 12, md: 4 }} key={service.title}>
              <ServiceCard>
                <CardContent sx={{ p: 4 }}>
                  <ServiceIcon>{service.icon}</ServiceIcon>

                  <Typography
                    variant='h5'
                    component='h3'
                    gutterBottom
                    sx={{ fontWeight: 600, color: 'primary.main', mb: 3 }}
                  >
                    {service.title}
                  </Typography>

                  <Typography
                    variant='body1'
                    sx={{
                      mb: 3,
                      lineHeight: 1.6,
                      color: 'text.primary',
                    }}
                  >
                    {service.description}
                  </Typography>

                  <Box sx={{ textAlign: 'left' }}>
                    <Typography
                      variant='h6'
                      sx={{
                        fontWeight: 600,
                        mb: 2,
                        color: 'text.primary',
                        fontSize: '1rem',
                      }}
                    >
                      What's Included:
                    </Typography>
                    {service.features.map((feature) => (
                      <Box
                        key={feature}
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          mb: 1,
                        }}
                      >
                        <Box
                          sx={{
                            width: 6,
                            height: 6,
                            borderRadius: '50%',
                            backgroundColor: 'primary.main',
                            mr: 2,
                            flexShrink: 0,
                          }}
                        />
                        <Typography
                          variant='body2'
                          sx={{ color: 'text.secondary' }}
                        >
                          {feature}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </CardContent>
              </ServiceCard>
            </Grid>
          ))}
        </Grid>

        <Box
          sx={{
            mt: 8,
            p: 4,
            backgroundColor: 'primary.main',
            borderRadius: 3,
            color: 'white',
            textAlign: 'center',
          }}
        >
          <Typography
            variant='h4'
            component='h3'
            gutterBottom
            sx={{ fontWeight: 600, mb: 2 }}
          >
            Ready to Get Started?
          </Typography>
          <Typography
            variant='body1'
            sx={{ mb: 3, opacity: 0.9, maxWidth: '600px', mx: 'auto' }}
          >
            Whether you need a new web application, help with an existing
            project, or guidance in your development journey, I'm here to help
            you succeed.
          </Typography>
          <Typography variant='h6' sx={{ fontWeight: 500 }}>
            Let's discuss your project and make it happen!
          </Typography>
        </Box>
      </Container>
    </ServicesSection>
  );
};

export { Services };

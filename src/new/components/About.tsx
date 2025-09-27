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

const AboutSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 0),
  backgroundColor: theme.palette.background.paper,
}));

const SkillCard = styled(Card)(({ theme }) => ({
  height: '100%',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: theme.shadows[8],
  },
}));

const About: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const skills = [
    {
      title: 'Frontend Development',
      description:
        'Creating responsive, interactive user interfaces with React, TypeScript, and modern CSS frameworks.',
      technologies: ['React', 'TypeScript', 'Material-UI', 'CSS3', 'HTML5'],
    },
    {
      title: 'Backend Development',
      description:
        'Building robust server-side applications and APIs using Node.js and various databases.',
      technologies: ['Node.js', 'Express.js', 'MongoDB', 'SQL', 'GraphQL'],
    },
    {
      title: 'Full-Stack Solutions',
      description:
        'End-to-end development from concept to deployment, ensuring seamless integration.',
      technologies: ['MERN Stack', 'REST APIs', 'Authentication', 'Deployment'],
    },
  ];

  return (
    <AboutSection id='about'>
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
            About Me
          </Typography>
          <Typography
            variant='body1'
            sx={{
              fontSize: '1.125rem',
              color: 'text.secondary',
              maxWidth: '600px',
              mx: 'auto',
              lineHeight: 1.7,
            }}
          >
            A naturally curious and determined developer with a passion for
            creating exceptional digital experiences. I take a holistic approach
            to every project, ensuring both technical excellence and user
            satisfaction.
          </Typography>
        </Box>

        <Grid container spacing={4} sx={{ mb: 6 }}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography
              variant='h4'
              component='h3'
              gutterBottom
              sx={{ fontWeight: 600, mb: 3 }}
            >
              My Journey
            </Typography>
            <Typography variant='body1' sx={{ mb: 3, lineHeight: 1.7 }}>
              Starting as a self-taught developer, I've built a diverse skill
              set through hands-on experience across various industries. From
              teaching and mentoring to developing complex web applications,
              I've learned that great software comes from understanding both the
              technical requirements and the human needs.
            </Typography>
            <Typography variant='body1' sx={{ lineHeight: 1.7 }}>
              Today, I specialize in full-stack development, helping businesses
              transform their ideas into powerful digital solutions. Whether
              it's a simple website or a complex enterprise application, I
              approach each project with the same level of dedication and
              attention to detail.
            </Typography>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              sx={{
                backgroundColor: 'primary.main',
                borderRadius: 2,
                p: 4,
                color: 'white',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              <Typography
                variant='h5'
                component='h3'
                gutterBottom
                sx={{ fontWeight: 600 }}
              >
                What I Bring
              </Typography>
              <Box sx={{ mb: 2 }}>
                <Typography variant='body1' sx={{ mb: 1 }}>
                  ✓ Deep technical expertise across the full stack
                </Typography>
                <Typography variant='body1' sx={{ mb: 1 }}>
                  ✓ Strong problem-solving and analytical skills
                </Typography>
                <Typography variant='body1' sx={{ mb: 1 }}>
                  ✓ Experience mentoring and teaching others
                </Typography>
                <Typography variant='body1' sx={{ mb: 1 }}>
                  ✓ Commitment to clean, maintainable code
                </Typography>
                <Typography variant='body1'>
                  ✓ Focus on delivering real business value
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Typography
          variant='h4'
          component='h3'
          sx={{
            textAlign: 'center',
            fontWeight: 600,
            mb: 4,
            fontSize: isMobile ? '1.5rem' : '2rem',
          }}
        >
          Core Competencies
        </Typography>

        <Grid container spacing={3}>
          {skills.map((skill) => (
            <Grid size={{ xs: 12, md: 4 }} key={skill.title}>
              <SkillCard>
                <CardContent sx={{ p: 3 }}>
                  <Typography
                    variant='h6'
                    component='h4'
                    gutterBottom
                    sx={{ fontWeight: 600, color: 'primary.main' }}
                  >
                    {skill.title}
                  </Typography>
                  <Typography
                    variant='body2'
                    sx={{ mb: 3, color: 'text.secondary', lineHeight: 1.6 }}
                  >
                    {skill.description}
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {skill.technologies.map((tech) => (
                      <Box
                        key={tech}
                        sx={{
                          backgroundColor: 'primary.light',
                          color: 'white',
                          borderRadius: 1,
                          px: 2,
                          py: 0.5,
                          fontSize: '0.75rem',
                          fontWeight: 500,
                        }}
                      >
                        {tech}
                      </Box>
                    ))}
                  </Box>
                </CardContent>
              </SkillCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </AboutSection>
  );
};

export { About };

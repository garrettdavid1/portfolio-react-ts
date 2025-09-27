import React from 'react';
import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  Chip,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { styled } from '@mui/material/styles';

const ProjectsSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 0),
  backgroundColor: theme.palette.background.default,
}));

const ProjectCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: theme.shadows[8],
  },
}));

const Projects: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const projects = [
    {
      title: 'PreDiscover Criminal Background Search',
      company: 'Versatile Development, LLC',
      description:
        'Greenfield Web App & Chrome Extension for the Criminal Background Search Industry. Automates searches that previously took hours, now completed in minutes with active, paying clients.',
      technologies: [
        'React',
        'TypeScript',
        'MongoDB',
        'Node.js',
        'Express.js',
        'Chrome Extension',
      ],
      featured: true,
    },
    {
      title: 'BoardStudio',
      company: 'Juvare',
      description:
        'Greenfield web app allowing users to build complex applications integrating with WebEOC ecosystem. Features drag-and-drop capabilities with GrapesJS and Monaco Editor.',
      technologies: [
        'React',
        'TypeScript',
        'Redux',
        '.NET Web API',
        'GrapesJS',
        'Monaco Editor',
        'Jest',
      ],
      featured: true,
    },
    {
      title: 'Modzy MLOps Web App',
      company: 'Modzy',
      description:
        'Machine Learning Operations web app featuring data visualization of large datasets, pixel-perfect UI components, and comprehensive component documentation.',
      technologies: [
        'React',
        'TypeScript',
        'D3.js',
        'CSS3',
        'Data Visualization',
      ],
      featured: false,
    },
    {
      title: 'MDL Dispatch Master Rewrite',
      company: 'MDL autoMation',
      description:
        'Complete rewrite of Silverlight Dispatch web app using modern technologies. Tool for car dealership valet and service staff to communicate about vehicle location and retrieval.',
      technologies: [
        'KnockoutJS',
        '.NET Web API',
        'SignalR',
        'MongoDB',
        'JavaScript',
      ],
      featured: false,
    },
    {
      title: 'MDL Mobile',
      company: 'MDL autoMation',
      description:
        'Mobile app providing workday management tools for service and sales managers of car dealerships.',
      technologies: ['React Native', 'Expo.io', '.NET Web API', 'MongoDB'],
      featured: false,
    },
    {
      title: 'WeatherStrike',
      company: 'VersaDev, LLC',
      description:
        'Contract web app providing weather reporting data to various industries interfacing with the commercial and residential real estate insurance market.',
      technologies: ['PHP', 'Laravel', 'MongoDB', 'jQuery', 'JavaScript'],
      featured: false,
    },
  ];

  const featuredProjects = projects.filter((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

  return (
    <ProjectsSection id='projects'>
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
            Featured Projects
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
            A selection of projects that showcase my technical skills and
            problem-solving abilities
          </Typography>
        </Box>

        <Grid container spacing={4} sx={{ mb: 8 }}>
          {featuredProjects.map((project) => (
            <Grid size={{ xs: 12, lg: 6 }} key={project.title}>
              <ProjectCard>
                <CardContent sx={{ flexGrow: 1, p: 3 }}>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'flex-start',
                      mb: 2,
                    }}
                  >
                    <Typography
                      variant='h5'
                      component='h3'
                      sx={{
                        fontWeight: 600,
                        color: 'primary.main',
                        flexGrow: 1,
                      }}
                    >
                      {project.title}
                    </Typography>
                    <Chip
                      label='Featured'
                      size='small'
                      sx={{
                        backgroundColor: 'primary.light',
                        color: 'white',
                        fontWeight: 600,
                      }}
                    />
                  </Box>
                  <Typography
                    variant='body2'
                    sx={{ color: 'text.secondary', mb: 2, fontWeight: 500 }}
                  >
                    {project.company}
                  </Typography>
                  <Typography
                    variant='body1'
                    sx={{ mb: 3, lineHeight: 1.6, color: 'text.primary' }}
                  >
                    {project.description}
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {project.technologies.map((tech) => (
                      <Chip
                        key={tech}
                        label={tech}
                        size='small'
                        variant='outlined'
                        sx={{
                          borderColor: 'primary.main',
                          color: 'primary.main',
                          '&:hover': {
                            backgroundColor: 'primary.light',
                            color: 'white',
                          },
                        }}
                      />
                    ))}
                  </Box>
                </CardContent>
                <CardActions sx={{ p: 3, pt: 0 }}>
                  <Button
                    variant='outlined'
                    size='small'
                    sx={{
                      borderColor: 'primary.main',
                      color: 'primary.main',
                      fontWeight: 600,
                    }}
                  >
                    Learn More
                  </Button>
                </CardActions>
              </ProjectCard>
            </Grid>
          ))}
        </Grid>

        <Typography
          variant='h3'
          component='h3'
          sx={{
            textAlign: 'center',
            fontWeight: 600,
            mb: 4,
            fontSize: isMobile ? '1.5rem' : '2rem',
          }}
        >
          Other Projects
        </Typography>

        <Grid container spacing={3}>
          {otherProjects.map((project) => (
            <Grid size={{ xs: 12, md: 6, lg: 4 }} key={project.title}>
              <ProjectCard>
                <CardContent sx={{ flexGrow: 1, p: 3 }}>
                  <Typography
                    variant='h6'
                    component='h4'
                    sx={{ fontWeight: 600, color: 'primary.main', mb: 1 }}
                  >
                    {project.title}
                  </Typography>
                  <Typography
                    variant='body2'
                    sx={{ color: 'text.secondary', mb: 2, fontWeight: 500 }}
                  >
                    {project.company}
                  </Typography>
                  <Typography
                    variant='body2'
                    sx={{ mb: 3, lineHeight: 1.6, color: 'text.primary' }}
                  >
                    {project.description}
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                    {project.technologies.slice(0, 4).map((tech) => (
                      <Chip
                        key={tech}
                        label={tech}
                        size='small'
                        variant='outlined'
                        sx={{
                          fontSize: '0.7rem',
                          height: 24,
                          borderColor: 'secondary.main',
                          color: 'secondary.main',
                        }}
                      />
                    ))}
                    {project.technologies.length > 4 && (
                      <Chip
                        label={`+${project.technologies.length - 4} more`}
                        size='small'
                        variant='outlined'
                        sx={{
                          fontSize: '0.7rem',
                          height: 24,
                          borderColor: 'secondary.main',
                          color: 'secondary.main',
                        }}
                      />
                    )}
                  </Box>
                </CardContent>
              </ProjectCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </ProjectsSection>
  );
};

export { Projects };

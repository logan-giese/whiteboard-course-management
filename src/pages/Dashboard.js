import { Helmet } from 'react-helmet';
import {
  Box,
  Container,
  Grid
} from '@material-ui/core';
import LatestCourses from 'src/components/dashboard/LatestCourse';
import CoursesByFaculty from 'src/components/dashboard/CoursesByFaculty';

const Dashboard = () => (
  <>
    <Helmet>
      <title>Dashboard </title>
    </Helmet>
    <Box
      sx={{
        backgroundColor: 'background.default',
        minHeight: '100%',
        py: 3
      }}
    >
      <Container maxWidth={false}>
        <Grid
          container
          spacing={3}
        >
          <Grid
            item
            lg={12}
            md={6}
            xl={3}
            xs={12}
          >
            <CoursesByFaculty sx={{ height: '100%' }} />
          </Grid>
          <Grid
            item
            lg={12}
            md={6}
            xl={3}
            xs={12}
          >
            <LatestCourses sx={{ height: '100%' }} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
);

export default Dashboard;

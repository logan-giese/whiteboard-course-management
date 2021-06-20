import { Helmet } from 'react-helmet';
import {
  Box,
  Container,
  Grid,
  Pagination
} from '@material-ui/core';
import CourseListToolbar from 'src/components/course/CourseListToolbar';
import CourseCard from 'src/components/course/CourseCard';
import courses from 'src/__mocks__/course';

const CourseList = () => (
  <>
    <Helmet>
      <title>Subjects</title>
    </Helmet>
    <Box
      sx={{
        backgroundColor: 'background.default',
        minHeight: '100%',
        py: 3
      }}
    >
      <Container maxWidth={false}>
        <CourseListToolbar />
        <Box sx={{ pt: 3 }}>
          <Grid
            container
            spacing={3}
          >
            {courses.map((course) => (
              <Grid
                item
                key={course.id}
                lg={4}
                md={6}
                xs={12}
              >
                <CourseCard course={course} />
              </Grid>
            ))}
          </Grid>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            pt: 3
          }}
        >
          <Pagination
            color="primary"
            count={3}
            size="small"
          />
        </Box>
      </Container>
    </Box>
  </>
);

export default CourseList;

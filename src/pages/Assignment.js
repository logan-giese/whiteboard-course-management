import { Helmet } from 'react-helmet';
import {
  Box,
  Container,
  Grid
} from '@material-ui/core';
// import AssignmentProfile from 'src/components/assignment/AssignmentProfile';
import AssignmentProfileDetails from 'src/components/assignment/AssignmentProfileDetails';

const Assignment = () => (
  <>
    <Helmet>
      <title>Assignment</title>
    </Helmet>
    <Box
      sx={{
        backgroundColor: 'background.default',
        minHeight: '100%',
        py: 3
      }}
    >
      <Container maxWidth="lg">
        <Grid
          container
          spacing={3}
        >
          {/* <Grid
            item
            lg={12}
            md={6}
            xs={12}
          >
            <AccountProfile />
          </Grid> */}
          <Grid
            item
            lg={12}
            md={6}
            xs={12}
          >
            <AssignmentProfileDetails />
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
);

export default Assignment;

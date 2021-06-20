import { Helmet } from 'react-helmet';
import { Box, Container } from '@material-ui/core';
import GradeListResults from 'src/components/grade/GradeListResults';
import GradeListToolbar from 'src/components/grade/GradeListToolbar';
import grades from 'src/__mocks__/grades';

const GradeList = () => (
  <>
    <Helmet>
      <title> Grade </title>
    </Helmet>
    <Box
      sx={{
        backgroundColor: 'background.default',
        minHeight: '100%',
        py: 3
      }}
    >
      <Container maxWidth={false}>
        <GradeListToolbar />
        <Box sx={{ pt: 3 }}>
          <GradeListResults grades={grades} />
        </Box>
      </Container>
    </Box>
  </>
);
export default GradeList;

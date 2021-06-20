import { useState } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Avatar,
  Box,
  Card,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography
} from '@material-ui/core';
import getInitials from 'src/utils/getInitials';

const GradeListResults = ({ grades, ...rest }) => {
  const [selectedGradeIds, setSelectedGradeIds] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);

  const handleSelectAll = (event) => {
    let newSelectedGradeIds;
    if (event.target.checked) {
      newSelectedGradeIds = grades.map((grade) => grade.id);
    } else {
      newSelectedGradeIds = [];
    }

    setSelectedGradeIds(newSelectedGradeIds);
  };

  const handleSelectOne = (event, id) => {
    const selectedIndex = selectedGradeIds.indexOf(id);
    let newSelectedGradeIds = [];

    if (selectedIndex === -1) {
      newSelectedGradeIds = newSelectedGradeIds.concat(selectedGradeIds, id);
    } else if (selectedIndex === 0) {
      newSelectedGradeIds = newSelectedGradeIds.concat(selectedGradeIds.slice(1));
    } else if (selectedIndex === selectedGradeIds.length - 1) {
      newSelectedGradeIds = newSelectedGradeIds.concat(selectedGradeIds.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelectedGradeIds = newSelectedGradeIds.concat(
        selectedGradeIds.slice(0, selectedIndex),
        selectedGradeIds.slice(selectedIndex + 1)
      );
    }

    setSelectedGradeIds(newSelectedGradeIds);
  };

  const handleLimitChange = (event) => {
    setLimit(event.target.value);
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <Card {...rest}>
      <PerfectScrollbar>
        <Box sx={{ minWidth: 1050 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox">
                  <Checkbox
                    checked={selectedGradeIds.length === grades.length}
                    color="primary"
                    indeterminate={
                      selectedGradeIds.length > 0
                      && selectedGradeIds.length < grades.length
                    }
                    onChange={handleSelectAll}
                  />
                </TableCell>
                <TableCell>
                  Course Title
                </TableCell>
                <TableCell>
                  Contact Email
                </TableCell>
                <TableCell>
                  Term
                </TableCell>
                <TableCell>
                  Grade Number
                </TableCell>
                <TableCell>
                  Result Published date
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {grades.slice(0, limit).map((grade) => (
                <TableRow
                  hover
                  key={grade.id}
                  selected={selectedGradeIds.indexOf(grade.id) !== -1}
                >
                  <TableCell padding="checkbox">
                    <Checkbox
                      checked={selectedGradeIds.indexOf(grade.id) !== -1}
                      onChange={(event) => handleSelectOne(event, grade.id)}
                      value="true"
                    />
                  </TableCell>
                  <TableCell>
                    <Box
                      sx={{
                        alignItems: 'center',
                        display: 'flex'
                      }}
                    >
                      <Avatar
                        src={grade.avatarUrl}
                        sx={{ mr: 2 }}
                      >
                        {getInitials(grade.subject)}
                      </Avatar>
                      <Typography
                        color="textPrimary"
                        variant="body1"
                      >
                        {grade.subject}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    {grade.email}
                  </TableCell>
                  <TableCell>
                    {`${grade.term.year}, ${grade.term.month}, ${grade.term.semester}`}
                  </TableCell>
                  <TableCell>
                    {grade.score}
                  </TableCell>
                  <TableCell>
                    {moment(grade.createdAt).format('DD/MM/YYYY')}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
      <TablePagination
        component="div"
        count={grades.length}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleLimitChange}
        page={page}
        rowsPerPage={limit}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Card>
  );
};

GradeListResults.propTypes = {
  grades: PropTypes.array.isRequired
};

export default GradeListResults;

import { TablePagination } from "@material-ui/core";

function PaginationView(props) {
  return (
    <TablePagination
      component="div"
      count={100}
      page={props.page}
      onChangePage={props.handleChangePage}
      rowsPerPage={props.rowsPerPage}
      onChangeRowsPerPage={props.handleChangeRowsPerPage}
    />
  );
}

export default PaginationView;

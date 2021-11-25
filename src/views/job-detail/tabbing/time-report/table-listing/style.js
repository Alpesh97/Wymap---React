import { makeStyles } from "@material-ui/core/styles";
import { colors } from "@utils/constant";

const tableStyles = makeStyles({
  tableWrapper: {
    boxShadow: "0 3px 8px 0 rgba(97, 97, 97, 0.08)",
    backgroundColor: colors.white,
    borderRadius: "6px",
    marginTop: 25,
    border: "1px solid #ebeef6",
  },
  customTable: {
    maxHeight: 680,
    boxShadow: "none",
    "& .MuiTable-root": {
      minWidth: 1200,
      tableLayout: "fixed",
      "& .MuiTableCell-root": {
        fontWeight: 500,
        color: colors.black,
        border: "none",
        wordBreak: "break-all",
      },
      "& .MuiTableHead-root": {
        boxShadow: "0 3px 8px 0 rgba(97, 97, 97, 0.08)",
        backgroundColor: colors.white,
        "& .MuiTableCell-root": {
          color: "rgba(33, 33, 33, 0.7)",
          padding: "30px 25px",
          backgroundColor: colors.white,
          borderBottom: "1px solid #f4f4f4",
          "&:first-child": {
            paddingLeft: "30px",
          },
          "&:last-child": {
            paddingRight: "30px",
          },
        },
      },
      "& .MuiTableBody-root, & .MuiTableFooter-root": {
        "& .MuiTableCell-root": {
          padding: "22px 25px",
          "&:first-child": {
            paddingLeft: "30px",
          },
          "&:last-child": {
            paddingRight: "30px",
          },
        },
      },
      "& .status": {
        width: "200px",
      },
      "& .time": {
        width: "150px",
      },
      "& .location": {
        width: "400px",
      },
      "& .duration": {
        width: "100px",
      },
      "& .date": {
        width: "90px",
      },
      "& .MuiTableCell-footer": {
        fontSize: "16px",
        fontWeight: "600",
      },
    },
  },
});

export { tableStyles };

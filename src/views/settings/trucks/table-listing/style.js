import { makeStyles } from "@material-ui/core/styles";
import { colors } from "@utils/constant";

const tableStyles = makeStyles({
  tableWrapper: {
    boxShadow: "0 3px 8px 0 rgba(97, 97, 97, 0.08)",
    backgroundColor: colors.white,
    borderRadius: "6px",
    border: "1px solid #ebeef6",
  },
  customTable: {
    maxHeight: 680,
    boxShadow: "none",
    "& .MuiTable-root": {
      minWidth: 820,
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
      "& .MuiTableBody-root": {
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
      "& .edit-link": {
        width: "100px",
        "& a": {
          color: colors.orange,
          textTransform: "capitalize",
        },
      },
      "& .delete-link": {
        width: "110px",
        "& a": {
          color: colors.red,
          textTransform: "capitalize",
        },
      },
      "& .truck": {
        width: "250px",
      },
      "& .rego-number": {
        width: "180px",
      },
      "& .dedicated": {
        width: "150px",
      },
    },
  },
});

export { tableStyles };

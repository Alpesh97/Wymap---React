import { makeStyles } from "@material-ui/core/styles";
import { colors } from "@utils/constant";

const tableStyles = makeStyles({
  tableWrapper: {
    backgroundColor: colors.white,
    borderRadius: "6px",
    marginTop: 25,
  },
  moreLinkWrapper: {
    "& .more-link-block": {
      textAlign: "right",
      "& .more-link": {
        display: "block",
        lineHeight: "0",
        cursor: "pointer",
        "& svg": {
          fill: colors.black,
        },
      },
    },
  },
  customTable: {
    maxHeight: 300,
    boxShadow: "none",
    "& .MuiTable-root": {
      minWidth: 1170,
      tableLayout: "fixed",
      "& .MuiTableCell-root": {
        fontWeight: 500,
        color: colors.black2,
        border: "none",
        wordBreak: "break-all",
      },
      "& .MuiTableHead-root": {
        backgroundColor: colors.gray5,
        "& .MuiTableCell-root": {
          color: colors.black2,
          padding: "16px 20px",
          backgroundColor: colors.gray5,
          "&:first-child": {
            borderRadius: "6px 0 0 6px",
          },
          "&:last-child": {
            borderRadius: "0 6px 6px 0",
          },
        },
      },
      "& .MuiTableBody-root": {
        "& .MuiTableCell-root": {
          padding: "16px 20px",
          borderBottom: "1px solid #ebebeb",
        },
        "& .MuiTableRow-root": {
          "&:last-child": {
            "& .MuiTableCell-root": {
              border: "none",
            },
          },
        },
      },
      "& .AWB": {
        width: "180px",
      },
      "& .pieces": {
        width: "150px",
      },
      "& .weight": {
        width: "180px",
      },
      "& .notes": {
        width: "320px",
      },
      "& .charge": {
        width: "220px",
      },
      "& .mare": {
        width: "50px",
      },
    },
  },
});

export { tableStyles };

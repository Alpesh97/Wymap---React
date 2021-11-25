import { makeStyles } from "@material-ui/core/styles";
import { colors } from "@utils/constant";

const tableStyles = makeStyles({
  tableWrapper: {
    boxShadow: "0 3px 8px 0 rgba(97, 97, 97, 0.08)",
    backgroundColor: colors.white,
    borderRadius: "6px",
  },
  customTable: {
    marginTop: 25,
    maxHeight: 680,
    boxShadow: "none",
    "& .MuiTable-root": {
      minWidth: 1400,
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
      "& .driverName": {
        width: "220px",
      },
      "& .contact": {
        width: "200px",
      },
      "& .employeeNumber": {
        width: "220px",
      },
      "& .workingTimeToday": {
        width: "250px",
      },
      "& .status": {
        width: "220px",
        "&.last-active": {
          color: colors.gray3,
        },
        "&.active": {
          position: "relative",
          paddingLeft: 20,
          display: "block",
          "&:before": {
            content: '""',
            position: "absolute",
            backgroundColor: colors.green,
            height: 10,
            width: 10,
            borderRadius: "50%",
            left: 0,
            top: 28,
          },
          "& a": {
            color: colors.skyblue,
          },
        },
      },
      "& .continiousWorkingTime": {
        width: "280px",
        "& span": {
          "& svg": {
            display: "none",
          },
        },
        "&.maxTime": {
          "& span": {
            display: "flex",
            color: colors.darkRed1,
            alignItems: "center",
            "& svg": {
              fill: colors.darkRed1,
              marginRight: "5px",
              display: "block",
            },
          },
        },
      },
    },
  },
});

export { tableStyles };

import { makeStyles } from "@material-ui/core/styles";
import { colors } from "@utils/constant";

const tableStyles = makeStyles({
  tableWrapper: {
    boxShadow: "0 3px 8px 0 rgba(97, 97, 97, 0.08)",
    backgroundColor: colors.white,
  },
  customTable: {
    marginTop: 25,
    maxHeight: 680,
    boxShadow: "none",
    "& .MuiTable-root": {
      minWidth: 1860,
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
          "&.status": {
            "& span": {
              position: "relative",
              paddingLeft: 20,
              display: "block",
              "&:before": {
                content: '""',
                position: "absolute",
                backgroundColor: colors.black,
                height: 10,
                width: 10,
                borderRadius: "50%",
                left: 0,
                top: 7,
              },
            },
            "&.not-assigned": {
              "& span": {
                color: colors.yellow,
                "&:before": {
                  backgroundColor: colors.yellow,
                },
              },
            },
            "&.rejected": {
              "& span": {
                color: colors.darkRed1,
                "&:before": {
                  backgroundColor: colors.darkRed1,
                },
              },
            },
            "&.in-progress": {
              "& span": {
                color: colors.green,
                "&:before": {
                  backgroundColor: colors.green,
                },
              },
            },
            "&.completed": {
              "& span": {
                color: colors.gray2,
                "&:before": {
                  backgroundColor: colors.gray2,
                },
              },
            },
          },
        },
      },
      "& .jobId": {
        width: "90px",
      },
      "& .customerName": {
        width: "110px",
      },
      "& .fromTo": {
        width: "175px",
      },
      "& .airWarBill": {
        width: "152px",
      },
      "& .date": {
        width: "90px",
      },
      "& .truck-rego": {
        width: "100px",
      },
      "& .driver": {
        width: "97px",
        "&.assign-driver": {
          "& button": {
            backgroundColor: "rgba(0, 174, 239, 0.1)",
            color: colors.skyblue,
          },
        },
        "&.re-assign": {
          "& button": {
            border: "1px solid #e2e2e2",
            color: colors.black,
            backgroundColor: "transparent",
          },
        },
        "& button": {
          width: "100%",
          borderRadius: "4px",
          fontWeight: "500",
        },
      },
      "& .status": {
        width: "100px",
      },
    },
  },
});

export { tableStyles };

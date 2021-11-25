import { makeStyles } from "@material-ui/core";
import { colors } from "@utils/constant";

const dashboardStyle = makeStyles({
  dashboardWrapper: {
    "& .chart-block-wrapper": {
      display: "flex",
      flexWrap: "wrap",
      margin: "0 -15px",
      "& .left-block, & .right-block": {
        maxWidth: "50%",
        flex: "0 0 50%",
        padding: "0 15px",
        "@media(max-width: 1299px)": {
          maxWidth: "100%",
          flex: "0 0 100%",
        },
      },
      "& .left-block": {
        "@media(max-width: 1299px)": {
          marginBottom: "30px",
        },
        "& .white-card": {
          height: "100%",
          padding: "30px",
          display: "flex",
          flexWrap: "wrap",
          "@media(max-width: 767px)": {
            padding: "20px 15px",
          },
          "& .chart-content-wrapper": {
            padding: "0 30px",
            flex: "1",
            "@media(max-width: 1499px)": {
              padding: "0 0 0 15px",
            },
            "@media(max-width: 1359px)": {
              padding: "0 0 0 15px",
            },
            "@media(max-width: 767px)": {
              maxWidth: "100%",
              flex: "0 0 100%",
              padding: "0",
            },
          },
          "& .chart-wrapper": {
            padding: "0",
            maxWidth: "300px",
            flex: "0 0 300px",
            "@media(max-width: 1499px)": {
              padding: "0 15px",
            },
            "@media(max-width: 1359px)": {
              padding: "0 15px 0 0",
            },
            "@media(max-width: 767px)": {
              maxWidth: "100%",
              flex: "0 0 100%",
              marginBottom: "20px",
              textAlign: "center",
              padding: "0",
            },
          },
        },
      },
      "& .right-block": {
        "& .hours-wrapper": {
          display: "flex",
          flexWrap: "wrap",
          margin: "0 -15px",
          "@media(max-width: 767px)": {
            margin: "0 -10px",
          },
          "& .hours-inner-wrapper": {
            padding: "0 15px",
            marginBottom: "30px",
            maxWidth: "50%",
            flex: "0 0 50%",
            "@media(max-width: 767px)": {
              padding: "0 10px",
              marginBottom: "20px",
              maxWidth: "100%",
              flex: "0 0 100%",
            },
            "&:nth-last-child(-n + 2)": {
              margin: 0,
              "@media(max-width: 767px)": {
                marginBottom: "20px",
                "&:last-child": {
                  marginBottom: "0",
                },
              },
            },
            "& .white-card": {
              padding: "35px 30px",
              height: "100%",
              "@media(max-width: 767px)": {
                padding: "20px 15px",
              },
              "& .hours": {
                fontSize: "24px",
                fontWeight: "600",
                color: colors.orange,
                display: "block",
                marginBottom: "1px",
              },
            },
          },
        },
      },
    },
    "& .chart-info": {
      borderTop: "1px solid #e7e4f1",
      paddingTop: "20px",
      marginTop: "12px",
      "& li": {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        "& + li": {
          marginTop: "10px",
        },
        "& .text": {
          fontSize: "14px",
          fontWeight: "500",
          color: colors.gray1,
        },
        "& .chart-info-dot": {
          fontSize: "14px",
          paddingLeft: "17px",
          position: "relative",
          "@media (max-width: 1399px)": {
            paddingRight: "7px",
            paddingLeft: "13px",
          },
          "@media (max-width: 1280px)": {
            fontSize: "12px",
          },
          "&::after": {
            position: "absolute",
            content: '" "',
            height: "12px",
            width: "12px",
            borderRadius: "50%",
            backgroundColor: colors.black,
            display: "block",
            left: "0",
            top: "3px",
            "@media (max-width: 1399px)": {
              height: "8px",
              width: "8px",
              top: "5px",
            },
          },
          "&.yellow-text": {
            color: colors.yellow,
            "&::after": {
              backgroundColor: colors.yellow,
            },
          },
          "&.green-text": {
            color: colors.green,
            "&::after": {
              backgroundColor: colors.green,
            },
          },
          "&.primary-color-text": {
            color: colors.primary,
            "&::after": {
              backgroundColor: colors.primary,
            },
          },
        },
      },
    },
  },
});

export { dashboardStyle };

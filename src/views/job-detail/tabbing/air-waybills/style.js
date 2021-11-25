import { makeStyles } from "@material-ui/core";
import { colors } from "@utils/constant";

const airWayBillStyle = makeStyles({
  airWayBillWrapper: {},
  tabHeadingRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  searchWrapper: {
    maxWidth: "360px",
    flex: "0 0 360px",
    "@media (max-width: 767px)": {
      maxWidth: "270px",
      flex: "0 0 270px",
    },
    "@media (max-width: 574px)": {
      flex: "0 0 100%",
      maxWidth: "100%",
      margin: "0 0 20px 0",
    },
    "& .form-gourp": {
      "& .MuiOutlinedInput-adornedEnd": {
        padding: "0",
        position: "relative",
        "& img": {
          position: "absolute",
          top: "50%",
          transform: "translateY(-50%)",
          right: "15px",
        },
      },
      "& input": {
        border: "solid 1px #e3e3e3",
        color: colors.light_black,
        letterSpacing: 0,
        backgroundColor: colors.white,
        padding: "0 35px 0 15px !important",
        height: "48px",
        lineHeight: "48px",
        "&::placeholder": {
          opacity: "0.5",
          color: colors.light_black,
        },
      },
    },
  },
  modalWrapper: {
    "@media (max-width: 574px)": {
      flex: "0 0 100%",
      maxWidth: "100%",
    },
    "& button.primary-btn": {
      height: "50px",
      lineHeight: "50px",
      fontSize: "16px",
      fontWeight: "600",
      minWidth: "208px",
      textTransform: "uppercase",
      "@media (max-width: 574px)": {
        width: "100%",
      },
    },
  },
  customCardWrapper: {
    marginTop: "20px",
    "& .custom-card": {
      borderRadius: "4px",
      border: "solid 1px #e3e3e3",
      overflow: "hidden",
      backgroundColor: colors.white,
      "& + .custom-card": {
        marginTop: "20px",
      },
      "& .card-body": {
        padding: "15px 20px",
        "@media(max-width:767px)": {
          padding: "15px",
        },
        "& ul ": {
          "& li": {
            display: "flex",
            "@media(max-width:424px)": {
              flexWrap: "wrap",
            },
            "& + li": {
              marginTop: "10px",
            },
            "& .value-block": {
              flex: "1",
              paddingLeft: "10px",
              "@media(max-width:424px)": {
                paddingLeft: "0",
                flex: "0 0 100%",
                maxWidth: "100%",
              },
              "& p": {
                fontWeight: "600",
                color: colors.black1,
              },
            },
            "& h6": {
              color: colors.gray3,
              maxWidth: "82px",
              flex: "0 0 82px",
              "@media(max-width:424px)": {
                flex: "0 0 100%",
                maxWidth: "100%",
              },
            },
          },
        },
      },
      "& .card-header": {
        backgroundColor: colors.gray5,
        padding: "16px 20px",
        borderBottom: "solid 1px #e3e3e3",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        "@media(max-width:767px)": {
          padding: "15px",
        },
        "& .heading-title": {
          fontSize: "18px",
          fontWeight: "600",
          color: colors.black2,
          paddingRight: "10px",
        },
      },
    },
  },
  moreLinkWrapper: {
    maxWidth: "28px",
    flex: "0 0 28px",
    marginRight: "-10px",
    "& .more-link-block": {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
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
});

export { airWayBillStyle };

import { makeStyles } from "@material-ui/core";
import { colors } from "@utils/constant";

const consignmentsStyle = makeStyles({
  consignmentsWrapper: {},
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
        "& $moreLinkWrapper": {
          maxWidth: "200px",
          flex: "0 0 200px",
          "@media(max-width:574px)": {
            maxWidth: "152px",
            flex: "0 0 152px",
          },
          "@media(max-width:374px)": {
            maxWidth: "100px",
            flex: "0 0 100px",
          },
        },
        "& .heading-title": {
          fontSize: "18px",
          fontWeight: "600",
          color: colors.black2,
          paddingRight: "10px",
          "@media(max-width: 574px)": {
            fontSize: "16px",
          },
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
  NewItemRowWrapper: {
    paddingLeft: "25px",
    "@media(max-width: 767px)": {
      paddingLeft: "15px",
    },
    "& .new-item-row": {
      display: "flex",
      alignItems: "center",
      flexWrap: "wrap",
      justifyContent: "space-between",
      "& + .new-item-row": {
        paddingTop: "15px",
        marginTop: "15px",
        borderTop: "1px solid #e3e3e3",
      },
      "& .item-content-block": {
        paddingRight: "10px",
        flex: "1",
        "& .inner-heading-title": {
          fontSize: "16px",
          fontWeight: "600",
          display: "block",
          lineHeight: "1.5",
          color: colors.black2,
          "@media(max-width: 574px)": {
            fontSize: "14px",
          },
        },
        "& ul": {
          "& li": {
            color: colors.gray3,
            display: "inline-block",
            marginRight: "10px",
            "@media(max-width: 574px)": {
              fontSize: "14px",
            },
          },
        },
      },
    },
  },
});

export { consignmentsStyle };

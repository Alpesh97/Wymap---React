import { makeStyles } from "@material-ui/core";
import { colors } from "@utils/constant";

const CustomerListingStyle = makeStyles({
  CustomerListingWrapper: {},
  innerPageTopBlock: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    "@media (max-width: 991px)": {
      flexWrap: "wrap",
    },
    "& h1": {
      fontSize: "30px",
      color: colors.black,
      textTransform: "capitalize",
      margin: "0 20px 0 0",
      "@media (max-width: 991px)": {
        margin: "0 0 20px 0",
      },
    },
    "& .right-block": {
      flex: "1",
      "@media (max-width: 991px)": {
        flex: "0 0 100%",
        maxWidth: "100%",
      },
      "& .right-block-inner": {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        "@media (max-width: 767px)": {
          flexWrap: "wrap",
          justifyContent: "center",
        },
        "& .modal-wrapper": {
          marginLeft: "15px",
          "@media (max-width: 767px)": {
            margin: "0",
            flex: "0 0 100%",
            maxWidth: "100%",
          },
          "& .primary-btn": {
            fontSize: "16px",
            fontWeight: "600",
            minWidth: "160px",
            lineHeight: "50px",
            textTransform: "uppercase",
            height: "50px",
            "@media (max-width: 767px)": {
              width: "100%",
            },
          },
        },
        "& .dropdown_wrapper": {
          maxWidth: "200px",
          flex: "0 0 200px",
          margin: "0 0 0 15px",
          "@media (max-width: 767px)": {
            flex: "0 0 100%",
            maxWidth: "100%",
            margin: "0 0 20px 0",
          },
          "& .MuiSelect-selectMenu": {
            backgroundColor: colors.white,
            color: colors.light_black,
            boxShadow: "0 3px 8px 0 rgb(97 97 97 / 5%)",
          },
          "& .MuiOutlinedInput-notchedOutline": {
            border: "none",
          },
          "& .MuiSvgIcon-root": {
            color: colors.gray4,
          },
        },
        "& .search-wrapper": {
          maxWidth: "360px",
          flex: "0 0 360px",
          "@media (max-width: 1199px)": {
            maxWidth: "270px",
            flex: "0 0 270px",
          },
          "@media (max-width: 767px)": {
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
              boxShadow: "0 3px 8px 0 rgba(97, 97, 97, 0.05)",
              border: "0",
              color: colors.light_black,
              letterSpacing: 0,
              backgroundColor: colors.white,
              padding: "0 35px 0 15px !important",
              "&::placeholder": {
                opacity: "0.5",
                color: colors.light_black,
              },
            },
          },
        },
      },
    },
    "& .left-block": {
      paddingRight: "10px",
      "@media (max-width: 991px)": {
        flex: "0 0 100%",
        maxWidth: "100%",
      },
    },
  },
});

export { CustomerListingStyle };

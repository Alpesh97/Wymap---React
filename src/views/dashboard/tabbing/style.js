import { makeStyles } from "@material-ui/core";
import { colors } from "@utils/constant";

const tabbingStyle = makeStyles({
  tabbingWrapper: {
    overflow: "hidden",
    marginTop: "30px",
    "& .MuiTab-textColorPrimary": {
      color: colors.darkGray,
      borderRadius: "6px 6px 0 0",
      minWidth: "87px",
      fontSize: "16px",
      fontWeight: "400",
      padding: "11px 20px",
      textTransform: "capitalize",
      backgroundColor: colors.white,
      marginLeft: "1px",
      "@media (max-width:1199px)": {
        padding: "11px 15px",
      },
      "@media (max-width:767px)": {
        borderRadius: "6px",
      },
    },
    "& .MuiTab-textColorPrimary.Mui-selected": {
      backgroundColor: colors.skyblue,
      color: colors.white,
      border: "none",
      fontWeight: "600",
    },
    "& .MuiTabs-flexContainer": {
      alignItems: "center",
      "& .plus-tab": {
        cursor: "pointer",
        paddingLeft: "15px",
      },
    },
    "& .tab-pannel-wrapper": {
      marginTop: "25px",
    },
    "& .MuiTabs-scrollButtonsDesktop": {
      display: "flex !important",
      boxShadow: "0px 0px 15px 0 rgb(0 0 0 / 15%)",
      zIndex: "1",
      backgroundColor: colors.white,
      width: "30px",
    },
    "& .MuiTabs-indicator": {
      display: "none",
    },
  },
});

export { tabbingStyle };

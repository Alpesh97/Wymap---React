import { makeStyles } from "@material-ui/core/styles";
import { colors } from "./constant";

const materialCommonStyles = makeStyles((theme) => ({
  customSelect: {
    "& .MuiSvgIcon-root": {
      position: "absolute",
      right: "7px",
      top: "calc(50% - 12px)",
      pointerEvents: "none",
      cursor: "text",
    },
    "& li": {
      fontSize: "16px",
      padding: "10px 15px",
      "&.MuiListItem-root.Mui-focusVisible:hover": {
        backgroundColor: "rgba(247, 146, 57, 0.2)",
      },
      "&.MuiListItem-root.Mui-focusVisible": {
        backgroundColor: "transparent",
      },
      "&.Mui-disabled": {
        display: "none",
      },
      "&:hover": {
        color: colors.orange,
        backgroundColor: "rgba(247, 146, 57, 0.2)",
      },
      "&.Mui-selected, &.Mui-selected:hover": {
        backgroundColor: colors.orange + "!important",
        color: colors.white,
        fontWeight: "600",
        opacity: "1 !important",
      },
      "& .MuiListItemText-root .MuiTypography-body1": {
        fontSize: "16px",
        lineHeight: "1.3",
      },
    },
  },
}));

export { materialCommonStyles };

import { makeStyles } from "@material-ui/core";
import { colors } from "@utils/constant";

const SettingPageStyle = makeStyles((theme) => ({
  settingPageWrapper: {
    "& .setting-page": {
      "& h1": {
        color: colors.darkBlack,
        textTransform: "none",
      },
      "& .right-content": {
        "& .right-content-inner": {
          padding: "30px",
          "@media (max-width: 767px)": {
            padding: "20px",
          },
        },
      },
      "& .form-outer": {
        "& .form-row": {
          display: "flex",
          margin: "0 -15px",
          "@media (max-width: 767px)": {
            flexWrap: "wrap",
          },
          "& .form-group": {
            marginBottom: "25px",
          },
          "& .two-column": {
            flex: "0 0 50%",
            maxWidth: "50%",
            padding: "0 15px",
            "@media (max-width: 767px)": {
              flex: "0 0 100%",
              maxWidth: "100%",
            },
          },
        },
      },
    },
  },
}));

export { SettingPageStyle };

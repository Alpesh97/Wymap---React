import { makeStyles } from "@material-ui/core";
import { colors } from "@utils/constant";

const EditBlockStyle = makeStyles({
  EditBlockWrapper: {
    "& .edit-block": {
      padding: "30px",
      "@media(max-width:1279px)": {
        padding: "25px",
      },
      "@media(max-width:767px)": {
        padding: "15px",
      },
      "& .edit-block-header": {
        display: "flex",
        justifyContent: "space-between",
        paddingBottom: "20px",
        borderBottom: "1px solid #e3e3e3",
        marginBottom: "20px",
        "& .link-block": {
          "& a": {
            color: colors.orange,
            fontWeight: "600",
            display: "flex",
            alignItems: "center",
            "& em": {
              lineHeight: "0",
              display: "inline-block",
              marginRight: "5px",
            },
          },
        },
        "& .inner-heading": {
          marginRight: "10px",
          "& span": {
            fontSize: "24px",
            lineHeight: "1",
            fontWeight: "700",
            color: colors.black2,
          },
          "& p": {
            fontSize: "16px",
            color: colors.black1,
            lineHeight: "1",
            marginBottom: "6px",
          },
        },
      },
      "& .edit-block-list ": {
        "& ul ": {
          "& li": {
            display: "flex",
            justifyContent: "space-between",
            "@media(max-width:424px)": {
              flexWrap: "wrap",
            },
            "& + li": {
              marginTop: "10px",
            },
            "& .value-block": {
              flex: "1",
              paddingLeft: "10px",
              textAlign: "right",
              "@media(max-width:424px)": {
                textAlign: "left",
                paddingLeft: "0",
                flex: "0 0 100%",
                maxWidth: "100%",
              },
              "& a": {
                fontWeight: "600",
                color: colors.skyblue,
              },
              "& p": {
                fontWeight: "600",
                color: colors.black1,
              },
            },
            "& h6": {
              color: colors.gray3,
              maxWidth: "95px",
              flex: "0 0 95px",
              "@media(max-width:424px)": {
                paddingLeft: "0",
                flex: "0 0 100%",
                maxWidth: "100%",
              },
            },
          },
        },
      },
      "& .edit-block-content": {
        paddingBottom: "20px",
        borderBottom: "1px solid #e3e3e3",
        marginBottom: "20px",
        "& p": {
          fontSize: "14px",
          lineHeight: "1.71",
        },
        "& h6": {
          fontSize: "14px",
          lineHeight: "1",
          color: colors.gray3,
          marginBottom: "6px",
        },
      },
    },
  },
});

export { EditBlockStyle };

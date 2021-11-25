import React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent,
  DialogContentText,
  Link,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";

import logOutRed from "@assets/images/logout-red.svg";
import Warning from "@assets/images/warning.svg";
import { logOutStyle } from "./style";
import { removeToken } from "@utils/commonFunctions";
import { routes } from "@utils/constant";

function Logout() {
  const history = useHistory();
  const classes = logOutStyle();

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleLogout = () => {
    setOpen(false);
    removeToken();
    history.push(routes.login);
  };

  const [scroll] = React.useState("body");
  return (
    <div className={classes.logOutWrapper}>
      <Link onClick={handleClickOpen}>
        <em>
          <img src={logOutRed} alt="Logout" />
        </em>
        Logout
      </Link>
      <Dialog
        open={open}
        scroll={scroll}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        className={classes.customModal}
      >
        <DialogTitle id="alert-dialog-title">
          <img src={Warning} alt="Warning" />
          Logout
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure want to logout from wymap portal?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleClose}
            color="primary"
            className="primary-btn gray-border-btn"
          >
            Cancel
          </Button>
          <Button
            onClick={handleLogout}
            color="primary"
            className="orange-btn primary-btn"
          >
            YES, LOGOUT
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
export default Logout;

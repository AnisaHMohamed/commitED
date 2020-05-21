import React, { useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Slide from "@material-ui/core/Slide";
import IconButton from "@material-ui/core/IconButton";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";

// @material-ui/icons
import Close from "@material-ui/icons/Close";
import RegisterForm from "../RegisterForm/RegisterForm";
import Button from "../CustomButtons/Button";
// core components
import GridContainer from "../Grid/GridContainer.js";
import GridItem from "../Grid/GridItem.js";
// import Button from "../CustomButtons/Button";
import LoginForm from "../LoginForm/LoginForm";
import styles from "../../assets/jss/material-kit-react/views/componentsSections/javascriptStyles";

const useStyles = makeStyles(styles);

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

Transition.displayName = "Transition";

//holds logic for which form to display
const PopUpLogin = (props) => {
  const classes = useStyles();
  //state for form display logic default to login
  const [mode, setMode] = useState("LOGIN");


  return (
    <div width="25%" height="50%">
      <GridContainer>
        <GridItem xs={12} sm={12} md={6} lg={4}>
          <Dialog
            classes={{
              root: classes.center,
              paper: classes.modal,
            }}
            open={props.classicModal}
            TransitionComponent={Transition}
            keepMounted
            onClose={() => props.setClassicModal(false)}
            aria-labelledby="classic-modal-slide-title"
            aria-describedby="classic-modal-slide-description"
          >
            <DialogTitle
              id="classic-modal-slide-title"
              disableTypography
              className={classes.modalHeader}
            >
              <IconButton
                className={classes.modalCloseButton}
                key="close"
                aria-label="Close"
                color="inherit"
                onClick={() => props.setClassicModal(false)}
              >
                <Close className={classes.modalClose} />
              </IconButton>
              <h4 className={classes.modalTitle}>Login/Register</h4>
            </DialogTitle>
            <DialogContent
              id="classic-modal-slide-description"
              className={classes.modalBody}
            >
              <div>
                <div>
                  <Button color="info" block onClick={() => setMode("LOGIN")}>
                    Login
                  </Button>
                  <Button
                    color="success"
                    block
                    onClick={() => setMode("REGISTER")}
                  >
                    Register
                  </Button>
                </div>
                {mode === "LOGIN" && (
                  <LoginForm
                    error={props.error}
                    setError={props.setError}
                    user={props.user}
                    setUser={props.setUser}
                  />
                )}

                {mode === "REGISTER" && (
                  <RegisterForm
                    error={props.error}
                    setError={props.setError}
                    user={props.user}
                    setUser={props.setUser}
                  />
                )}
              </div>
            </DialogContent>
          </Dialog>
        </GridItem>
      </GridContainer>
    </div>
  );
};
export default PopUpLogin;

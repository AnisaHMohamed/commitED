import React, { useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
// core components
import Button from "../CustomButtons/Button";
import Card from "../Card/Card";
import CardBody from "../Card/CardBody";
import CardFooter from "../Card/CardFooter";
import CustomInput from "../CustomInput/CustomInput";
import axios from "axios";
import qs from "qs";

import styles from "../../assets/jss/material-kit-react/views/loginPage";

const useStyles = makeStyles(styles);

const LoginPage = (props) => {
  const [cardAnimaton, setCardAnimation] = useState("cardHidden");
  setTimeout(function () {
    setCardAnimation("");
  }, 700);
  const classes = useStyles();
  const [show, setShow] = useState(true);
  //On Submit handler
  const handleSubmit = (e) => {
    e.preventDefault();
    // POST LOGIN
    axios
      .post(
        "/api/login",
        qs.stringify({
          email: e.target.email.value,
          password: e.target.pass.value,
        })
      )
      .then((response) => {
        localStorage.setItem("user", JSON.stringify(response.data.user));
        props.setUser(response.data.user);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <CardBody>
          <CustomInput
            labelText="Email..."
            id="email"
            formControlProps={{
              fullWidth: true,
            }}
            inputProps={{
              type: "email",
              endAdornment: (
                <InputAdornment position="end">
                  <Email className={classes.inputIconsColor} />
                </InputAdornment>
              ),
            }}
          />
          <CustomInput
            labelText="Password"
            id="pass"
            formControlProps={{
              fullWidth: true,
            }}
            inputProps={{
              type: "password",
              endAdornment: (
                <InputAdornment position="end">
                  <Icon className={classes.inputIconsColor}>
                    {/* lock_outline */}
                  </Icon>
                </InputAdornment>
              ),
              autoComplete: "off",
            }}
          />
        </CardBody>
        <CardFooter className={classes.cardFooter}>
          <Button
            type="submit"
            simple
            color="primary"
            size="lg"
            block
            onClick={show}
          >
            Submit
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
};
export default LoginPage;

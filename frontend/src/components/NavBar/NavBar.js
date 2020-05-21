import React from "react";
import Header from "../Header/Header";
import Button from "../CustomButtons/Button";

const NavBar = (props) => {

  const handleLogout = () => {
    props.setUser(null);
    localStorage.removeItem("user");
  };

  //logout and login buttons
  const rightLinks = [
    <div key={0}>
      <Button color="danger" block onClick={() => handleLogout()}>
        Logout
      </Button>
    </div>,
    <div key={1}>
      <Button color="success" block onClick={() => props.setClassicModal(true)}>
        Login/Register
      </Button>
    </div>,
  ];

  let linkToUse;

  //Login and Logout Button Logic
  props.user ? (linkToUse = rightLinks[0]) : (linkToUse = rightLinks[1]);
  return (
    <div>
      <div>
        <Header color="primary" rightLinks={linkToUse} />
      </div>
    </div>
  );
};
export default NavBar;

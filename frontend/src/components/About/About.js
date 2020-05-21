import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Roboto from "../../assets/jss/material-kit-react/components/typographyStyle";
import GridContainer from "../Grid/GridContainer";
import GridItem from "../Grid/GridItem";
import NavPills from "../NavPills/NavPills";
import AccessibilityIcon from "@material-ui/icons/Accessibility";
import PanToolIcon from "@material-ui/icons/PanTool";
import AssignmentIcon from "@material-ui/icons/Assignment";
import styles from "../../assets/jss/material-kit-react/views/componentsSections/pillsStyle";
import "../../assets/jss/material-kit-react";

const useStyles = makeStyles(styles);

const About = () => {
  const classes = useStyles();
  return (
    <GridContainer className={classes.container}>
      <GridItem>
        <NavPills
          color="primary"
          tabs={[
            {
              tabButton: "About Us",
              tabIcon: AccessibilityIcon,
              tabContent: (
                <span style={{ fontFamily: Roboto, fontSize: 19 }}>
                  <p>
                    Committed is a platform that connects both
                    volunteers and organizations in simple and intuitive way.
                  </p>
                  <p>
                    Our mission originates from the need to have a simple and
                    straightforward access to the volunteers by the
                    organizations and from the volunteers to find a meaningful
                    opportunity to contribute.
                  </p>
                </span>
              ),
            },
            {
              tabButton: "Apply",
              tabIcon: PanToolIcon,
              tabContent: (
                <span style={{ fontFamily: Roboto, fontSize: 19 }}>
                  <p>
                    After registering, you will be able to see the opportunities
                    around you. Click on the opportunity to read its description
                    and click on the apply button to have your information sent
                    to the opportunity provider.
                  </p>
                  <p>
                    Opportunity provider will receive an email
                    with your details and interest. Just wait for the
                    Organization to contact you back confirming the match.
                  </p>
                </span>
              ),
            },
            {
              tabButton: "Offer Opportunities",
              tabIcon: AssignmentIcon,
              tabContent: (
                <span style={{ fontFamily: Roboto, fontSize: 19 }}>
                  <p>
                    Organizations can offer opportunities to volunteers where they can recieve expression of interest from potenyial volunteers!
                  </p>
                </span>
              ),
            },
          ]}
        />
      </GridItem>
    </GridContainer>
  );
};
export default About;

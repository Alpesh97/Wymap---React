import React from "react";
import { tabbingStyle } from "./style";
import { Tabs, Tab } from "@material-ui/core";
import CurrentActivity from "./current-activity";
import Invoices from "./invoices";
import Jobs from "./jobs";

export default function Tabbing() {
  const classes = tabbingStyle();
  const [value, setValue] = React.useState(0);
  const handleChangeTab = (event, newValue) => {
    setValue(newValue);
  };

  function TabPanel(props) {
    const { children, value, index } = props;
    return (
      value === index && <div className="tab-pannel-wrapper"> {children} </div>
    );
  }

  return (
    <div className={classes.tabbingWrapper}>
      <div className="white-card tabbing-wrapper">
        <Tabs
          value={value}
          onChange={handleChangeTab}
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
        >
          <Tab label="Current activity" />
          <Tab label="Invoices" />
          <Tab label="Jobs" />
        </Tabs>
        <TabPanel value={value} index={0}>
          <CurrentActivity />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Invoices />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Jobs />
        </TabPanel>
      </div>
    </div>
  );
}

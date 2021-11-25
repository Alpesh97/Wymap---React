import React, { useState } from "react";
import { Tabs, Tab } from "@material-ui/core";

import { tabbingStyle } from "./style";
import TimeReport from "./time-report";
import Jobs from "./jobs";

function Tabbing() {
  const classes = tabbingStyle();
  const [value, setValue] = useState(0);
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
          <Tab label="Jobs" />
          <Tab label="Time Reports" />
        </Tabs>
        <TabPanel value={value} index={0}>
          <Jobs />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <TimeReport />
        </TabPanel>
      </div>
    </div>
  );
}
export default Tabbing;

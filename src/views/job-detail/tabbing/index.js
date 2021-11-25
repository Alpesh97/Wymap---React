import React from "react";
import { tabbingStyle } from "./style";
import { Tabs, Tab } from "@material-ui/core";
import AirWayBill from "./air-waybills";
import TimeReport from "./time-report";
import Consignments from "./consignments";
import Timesheet from "./timesheet";

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
          <Tab label="Air waybills (5)" />
          <Tab label="Consignments (5)" />
          <Tab label="Time report (6)" />
          <Tab label="Timesheet" />
        </Tabs>
        <TabPanel value={value} index={0}>
          <AirWayBill />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Consignments />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <TimeReport />
        </TabPanel>
        <TabPanel value={value} index={3}>
          <Timesheet />
        </TabPanel>
      </div>
    </div>
  );
}

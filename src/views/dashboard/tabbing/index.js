import React from "react";
import { Tabs, Tab } from "@material-ui/core";

import TableDisplay from "./table";
import { tabbingStyle } from "./style";

function Tabbing(props) {
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
      <Tabs
        value={value}
        onChange={handleChangeTab}
        textColor="primary"
        variant="scrollable"
        scrollButtons="auto"
      >
        <Tab label="Not Allocated (07)" />
        <Tab label="Duration over 3 hours (05)" />
      </Tabs>
      <TabPanel value={value} index={0}>
        <TableDisplay data={props.data} heading={props.heading} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <TableDisplay data={props.data} heading={props.heading} />
      </TabPanel>
    </div>
  );
}

export default Tabbing;

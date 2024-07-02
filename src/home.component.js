import React, {useEffect, useState} from 'react';
import {
  Content,
  SideNav,
  SideNavItems, SideNavLink,
} from "@carbon/react";
import "@carbon/charts/styles.css";
import {DataShare, Microscope, ShareKnowledge, Tour} from "@carbon/icons-react";
import CoverageComponent from "./components/nav-Items/coverage";

const HomeComponent = () => {
  const [data, setData] = useState([]);
  const currentDate = new Date();
  const [dateArray, setDateArray] = useState([currentDate, currentDate]);
  const [switchName, setSwitchName] = useState("ugandaemr");
  const [navItem, setNavItem] = useState("coverage");
  const handleSwitchChange = ({ name }) => {
    setSwitchName(name);
  }

  const handleOnChangeRange = (dates) => {
    setDateArray(dates);
  };

  const handleOnClickItem = (navItem) => {
    setNavItem(navItem);
    console.log(navItem);
  };

  return (
    <>
      <header className="metrics-header">
        <div className="header-label"> EMR Metrics</div>
      </header>
      <Content className="metrics-body">
        <SideNav aria-label="Side navigation">
          <SideNavItems>
            <SideNavLink renderIcon={Tour} large onClick={() => handleOnClickItem("coverage")}> EMR
              Coverage </SideNavLink>

            <SideNavLink renderIcon={ShareKnowledge} large onClick={() => handleOnClickItem("poc")}> POC
              Stats </SideNavLink>

            <SideNavLink renderIcon={Microscope} large onClick={() =>handleOnClickItem("vl")}> VL
              Exchange </SideNavLink>

            <SideNavLink renderIcon={DataShare} large onClick={() => handleOnClickItem("ehmis")}> eHMIS
              Exchange </SideNavLink>
          </SideNavItems>

          <footer className="footer">
            <div className="rights-panel">© 2024 All rights reserved</div>
            <div> Monitoring & Evaluation Technical Support (METS)</div>
          </footer>
        </SideNav>
        <section className="section-wrapper">
          {navItem === "coverage" && (<CoverageComponent emr={switchName}/>)}
        </section>
      </Content>
    </>
  );
};

export default HomeComponent;

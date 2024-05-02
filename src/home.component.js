import React, {useEffect, useState} from 'react';
import "./components/ugemr-metrics/Metrics.css";
import {Content, ContentSwitcher, Switch} from "@carbon/react";
import "@carbon/charts/styles.css";
import Metrics from "./components/ugemr-metrics/Metrics";
import {DateFilterInput} from "./components/date-picker/date-picker";
import ClinicMasterMetrics
  from "./components/clinic-master-metrics/Clinic.master.metrics";
import EafyaMetrics from "./components/eafya-metrics/Eafya.metrics";

const HomeComponent = () => {
  const [data, setData] = useState([]);
  const currentDate = new Date();
  const startOfWeek = new Date(currentDate);
  startOfWeek.setDate(currentDate.getDate() - currentDate.getDay());
  const endOfWeek = new Date(currentDate);
  endOfWeek.setDate(currentDate.getDate() + (6 - currentDate.getDay()));
  const [dateArray, setDateArray] = useState([startOfWeek, endOfWeek]);
  const [switchName, setSwitchName] = useState("ugandaemr");
  const handleSwitchChange = ({ name }) => {
    setSwitchName(name);
  }

  const handleOnChangeRange = (dates) => {
    setDateArray(dates);
  };

  const updateDashboardMetrics = () => {
    console.log("Updating Dashboard EafyaMetrics")
  };

  const fetchData = async () => {
    try {
      const response = await fetch(`https://ugisl.mets.or.ug/metrics?and=(daterun.gte.2024-05-02,daterun.lte.2024-05-02)`);
      if (!response.ok) {
        console.error('Network response was not ok');
      }
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <header className="metrics-header">
        <div className="header-label"> EMR Metrics</div>
      </header>
      <Content className="metrics-body">
        <div className="switcher-date-container">
          <div className="switcher-container-width">
            <ContentSwitcher onChange={handleSwitchChange}>
              <Switch
                name="ugandaemr"
                text="UgandaEMR"
              />
              <Switch
                name="clinicmaster"
                text="Clinic Master"
              />
              <Switch
                name="eafya"
                text="eAFYA"
              />
            </ContentSwitcher>
          </div>
          <div className="date-container-width date-input-container">
            <DateFilterInput
              handleOnChangeRange={handleOnChangeRange}
              updateDashboard={updateDashboardMetrics}
              dateValue={dateArray}
            />
          </div>
        </div>
        { switchName === "ugandaemr" && (<Metrics metricsData={data} />)}
        { switchName === "clinicmaster" && (<ClinicMasterMetrics/>)}
        { switchName === "eafya" && (<EafyaMetrics/>)}
      </Content>
      <footer className="footer">
        <div className="rights-panel">© 2024 All rights reserved</div>
        <div> Monitoring & Evaluation Technical Support (METS)</div>
      </footer>
    </>
  );
};

export default HomeComponent;

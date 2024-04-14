import React from 'react';
import "./Metrics.css";
import { Content } from "@carbon/react";
import { CheckmarkOutline, Store, DevicesApps, GroupPresentation, UserMultiple } from "@carbon/react/icons"
import { StackedBarChart } from "@carbon/charts-react";
import {  data, options } from "./mock.data";
import "@carbon/charts/styles.css";
import {DataTableComponent} from "./components/data-table.component";

const Metrics = () => {
    return (
        <>
            <header className="metrics-header">
                <div className="header-label"> UgandaEMR Metrics</div>
            </header>
            <Content className="metrics-body">
              <div className="tile-container">
                <div className="tile tile-margin">
                  <div className="tile-header">
                    <div className="tile-items-container">
                      <div className="tile-icon"><DevicesApps size={50}/></div>
                      <div> UgandaEMR</div>
                    </div>
                  </div>
                  <div className="emr-details-table">
                    <table>
                      <tbody>
                      <tr>
                        <td className="">Version:</td>
                        {" "}
                        <td className="">
                          4.0.0-SNAPSHOT <CheckmarkOutline size={15}/>
                        </td>
                      </tr>
                      <tr>
                        <td className="">Tools:</td>
                        {" "}
                        <td className="">
                          8
                        </td>
                      </tr>

                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="tile tile-margin">
                  <div className="tile-header">
                    <div className="tile-items-container">
                      <div className="tile-icon"><Store size={50}/></div>
                      <div> Health Facilities</div>
                    </div>
                    <div className="tile-item-value"> 5</div>
                  </div>
                </div>
                <div className="tile tile-margin">
                  <div className="tile-header">
                    <div className="tile-items-container">
                      <div className="tile-icon"><GroupPresentation size={50}/>
                      </div>
                      <div>Patient Served</div>
                    </div>
                    <div className="tile-item-value"> 300</div>
                  </div>
                </div>
                <div className="tile">
                  <div className="tile-header">
                    <div className="tile-items-container">
                      <div className="tile-icon"><UserMultiple size={50}/></div>
                      <div> Data Entry Statistics</div>
                    </div>
                    <div className="tile-item-value"> 280</div>
                  </div>
                </div>
              </div>

              <div className="item-chart-container">
                <div className="item-chart item-chart-left">
                  <DataTableComponent/>
                </div>
                <div className="item-chart">
                  <StackedBarChart data={data} options={options}/>
                </div>
              </div>
            </Content>
          <footer className="footer">
            <div className="rights-panel">© 2024 All rights reserved</div>
            <div> Monitoring & Evaluation Technical Support (METS)</div>
          </footer>
        </>
    );
};

export default Metrics;

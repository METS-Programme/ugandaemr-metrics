import React from 'react';
import "./Metrics.css";
import { CheckmarkOutline, Store, DevicesApps, GroupPresentation, UserMultiple } from "@carbon/react/icons"
import { StackedBarChart } from "@carbon/charts-react";
import {  data, options } from "../../mock.data";
import "@carbon/charts/styles.css";
import {DataTableComponent} from "../data-table.component";
import ViewButton from "../view-button";

const Metrics = () => {
    return (
        <>
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
                    <td>Version:</td>
                    <td className="emr-version"> 4.0.0-SNAPSHOT <CheckmarkOutline size={15}/></td>
                  </tr>
                  <tr>
                    <td>Tools:</td>
                    <td> 8 </td>
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
                <div className="tile-bottom-style">
                  <div className="tile-item-value"> 6</div>
                  <ViewButton/>
                </div>
              </div>
            </div>
            <div className="tile tile-margin">
              <div className="tile-header">
                <div className="tile-items-container">
                  <div className="tile-icon"><GroupPresentation size={50}/>
                  </div>
                  <div>Patient Served</div>
                </div>
                <div className="tile-bottom-style">
                  <div className="tile-item-value"> 300</div>
                  <ViewButton/>
                </div>
              </div>
            </div>
            <div className="tile">
              <div className="tile-header">
                <div className="tile-items-container">
                  <div className="tile-icon"><UserMultiple size={50}/></div>
                  <div> Data Entry Statistics</div>
                </div>
                <div className="tile-bottom-style">
                  <div className="tile-item-value"> 280</div>
                  <ViewButton/>
                </div>
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
        </>
    );
};

export default Metrics;

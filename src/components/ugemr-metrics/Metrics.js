import React from 'react';
import "./Metrics.css";
import { CheckmarkOutline, Store, DevicesApps, GroupPresentation, UserMultiple } from "@carbon/react/icons"
import { StackedBarChart } from "@carbon/charts-react";
import {  data, options } from "../../mock.data";
import "@carbon/charts/styles.css";
import {DataTableComponent} from "../data-table.component";
import ViewButton from "../view-button";
import { headers } from "../../constants";

const Metrics = (props) => {
  const { metricsData } = props;
  const recordsCaptured = () => {
    let count = 0;
    metricsData?.forEach((record) => {
      const recordCount = record?.value?.length;
      const latestValue = recordCount > 1 ? recordCount - 1 : recordCount;
        record?.value[latestValue]?.dataentry?.forEach((item) => {
            count += item?.numberOfEntries;
        });
    });

    return count;
  }

  const facilityDetails = () => {
    const facility = [];
    metricsData?.forEach((record, index) => {
      let count = 0;
      const recordCount = record?.value?.length;
      const latestValue = recordCount > 1 ? recordCount - 1 : recordCount;
      record?.value[latestValue]?.dataentry?.forEach((item) => {
        count += item?.numberOfEntries;
      });

      facility.push({
        id: `${index++}`,
        facility: record?.facilityname,
        served: count,
        records: count,
        status: 'Active',

      })
    });

    return facility;
  }
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
                    <td className="emr-version"> {metricsData?.length > 0 ? metricsData[0]?.emrversion : '4.0.0'} <CheckmarkOutline size={15}/></td>
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
                  <div className="tile-item-value"> {metricsData?.length }</div>
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
                  <div className="tile-item-value"> {recordsCaptured()} </div>
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
                  <div className="tile-item-value"> {recordsCaptured()} </div>
                  <ViewButton/>
                </div>
              </div>
            </div>
          </div>

          <div className="item-chart-container">
            <div className="item-chart item-chart-left">
            <DataTableComponent
             rows={facilityDetails()}
             headers={headers}
            />
            </div>
            <div className="item-chart">
              <StackedBarChart data={data} options={options}/>
            </div>
          </div>
        </>
    );
};

export default Metrics;

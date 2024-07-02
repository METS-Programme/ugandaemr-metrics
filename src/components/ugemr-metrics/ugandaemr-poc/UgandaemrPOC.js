import React from 'react';
import "./MetricsMMM.css";
import { CheckmarkOutline, Store, DevicesApps, GroupPresentation, UserMultiple } from "@carbon/react/icons"
import "@carbon/charts/styles.css";
import {DataTableComponent} from "../../data-table/data-table.component";
import ViewButton from "../../view-button";
import {
  donutEMRCoverageOptions, donutVLCoverageOptions,
  fourXheaders,
  threeXHeaders
} from "../../../constants";
import dayjs from "dayjs";
import {DonutChart} from "@carbon/charts-react";

const UgandaemrPOC = (props) => {
  const { metricsData, dates } = props;
  const recordsCaptured = () => {
    let count = 0;
    metricsData?.forEach((record) => {
      const triage = record?.value?.dataentry?.[0]?.['Triage'] ?? 0;
      const clinician = record?.value?.dataentry?.[0]?.['Clinician'] ?? 0;
      const lab = record?.value?.dataentry?.[0]?.['Lab'] ?? 0;
      const pharmacy = record?.value?.dataentry?.[0]?.['Pharmacy'] ?? 0;

      count += (triage + clinician + lab + pharmacy);
    });

    return count;
  }

  const vlExchange = () => {
    let count = 0;
    metricsData?.forEach((record) => {
      const vlSent = record?.value?.dataentry?.[0]?.['VL exchange send sample'] ?? 0
      const vlReceived = record?.value?.dataentry?.[0]?.['VL exchange receive'] ?? 0
      if (vlSent > 0 || vlReceived > 0) {
        count += 1;
      }
    });

    return count;
  }

  const facilityDetails = () => {
    const facility = [];
    let count = 0;
    metricsData?.forEach((record, index) => {
      if (record?.emrversion !== "4.0.0-SNAPSHOT") {
        const latestRecord = record?.value?.poc_service_metrics;
        facility.push({
          id: `${index++}`,
          facility: record?.facilityname,
          version: record?.emrversion,
          triage: latestRecord?.triage,
          clinician: latestRecord?.clinician,
          lab: latestRecord?.lab,
          pharmacy: latestRecord?.pharmacy,
          counselor:latestRecord?.counselor
        })
        count += latestRecord?.triage ?? 0;
      }
    });

    return {
      facility: facility,
      dataEntryCount:  count
    };
  }
  const facilityDetailsPlus = () => {
    const facility = [];
    let count = 0;
    metricsData?.forEach((record, index) => {
      if (record?.emrversion === "4.0.0-SNAPSHOT") {
        facility.push({
          id: `${index++}`,
          facility: record?.facilityname,
          triage: record?.value?.dataentry?.[0]?.['Triage'] ?? 0,
          clinician: record?.value?.dataentry?.[0]?.['Clinician'] ?? 0,
          lab: record?.value?.dataentry?.[0]?.['Lab'] ?? 0,
          pharmacy: record?.value?.dataentry?.[0]?.['Pharmacy'] ?? 0,
          vlSent: record?.value?.dataentry?.[0]?.['VL exchange send sample'] ?? 0,
          vlReceived: record?.value?.dataentry?.[0]?.['VL exchange receive'] ?? 0
        })

        count += 1;
      }
    });

    return { facility,count };
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
                  <td className="emr-version"> {'4.0.0-SNAPSHOT'}
                    <CheckmarkOutline size={15}/></td>
                </tr>
                <tr>
                  <td>Tools:</td>
                  <td> 8</td>
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
                <div className="tile-item-value"> {facilityDetailsPlus().count}</div>
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
                <div
                  className="tile-item-value"> {recordsCaptured() + facilityDetails().dataEntryCount} </div>
                <ViewButton/>
              </div>
            </div>
          </div>
        </div>

        <div className="item-chart-container">
          <div className="item-chart item-chart-left">
            <div className="cds--cc--title">
              <p className="title" role="heading" aria-level="2">
                UgandaEMR+
                ({dayjs(dates[0]).format("DD/MMM/YYYY")} - {dayjs(dates[1]).format("DD/MMM/YYYY")})
              </p>
            </div>
            <DataTableComponent rows={facilityDetailsPlus().facility}
                                headers={fourXheaders}/>
          </div>
          <div className="item-chart switcher-date-container">
            <div className="item-chart-donut item-chart-left">
              <DonutChart
                data={[{group: "UgandaEMR+", value: facilityDetailsPlus().count ?? 0}, {
                  group: "UgandaEMR",
                  value: 1700 - (facilityDetailsPlus().count ?? 0)
                }]}
                options={donutEMRCoverageOptions}
              />
            </div>
            <div className="item-chart-donut">
              <DonutChart
                data={[{group: "No VL Exchange", value: (1700 - vlExchange())}, {
                  group: "VL Exchange",
                  value: vlExchange()
                }]}
                options={donutVLCoverageOptions}
              />
            </div>
          </div>
        </div>
      </>
    );
};

export default UgandaemrPOC;

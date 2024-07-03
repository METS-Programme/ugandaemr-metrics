import React, {useEffect, useState} from 'react';
import "./UgandaemrCoverage.css";
import { CheckmarkOutline, ScreenOff, DevicesApps, IbmCloudLogging } from "@carbon/react/icons"
import "@carbon/charts/styles.css";
import {DataTableComponent} from "../../data-table/data-table.component";
import ViewButton from "../../view-button";
import {
  donutEMRCoverageOptions, facilityHeaders,
  fourXheaders,
} from "../../../constants";
import dayjs from "dayjs";
import {DonutChart} from "@carbon/charts-react";

const UgandaemrCoverage = (props) => {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    const date = dayjs(new Date()).format("YYYY-MM-DD")
    try {
      const response = await fetch(`https://ugisl.mets.or.ug/stats?and=(emrversion.eq.4.0.0-SNAPSHOT)`);
      if (!response.ok) {
        console.error('Network response was not ok');
      }
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const facilityDetailsPlus = () => {
    const facility = [];
    let count = 0;
    data?.forEach((record, index) => {
      facility.push({
        id: `${index++}`,
        no: `${index++}`,
        facility: record?.facilityname
      });

      count += 1;
    });

    return { facility,count };
  };

  useEffect(() => {
    fetchData();
  }, []);

    return (
      <>
        <div className="tile-container">
          <div className="tile tile-margin">
            <div className="tile-header">
              <div className="tile-items-container">
                <div className="tile-icon"><DevicesApps size={50}/></div>
                <div> Latest Version</div>
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
                <div className="tile-icon"><IbmCloudLogging size={50}/></div>
                <div>UgandaEMR+ Facilities</div>
              </div>
              <div className="tile-bottom-style">
                <div className="tile-item-value"> {facilityDetailsPlus().count}</div>
                <ViewButton/>
              </div>
            </div>
          </div>
          <div className="tile">
            <div className="tile-header">
              <div className="tile-items-container">
                <div className="tile-icon"><ScreenOff size={50}/>
                </div>
                <div>UgandaEMR (3.x)</div>
              </div>
              <div className="tile-bottom-style">
                <div className="tile-item-value"> {1700 - facilityDetailsPlus().count} </div>
                <ViewButton/>
              </div>
            </div>
          </div>
        </div>

        <div className="item-chart-container">
          <div className="item-chart item-chart-left">
            <div className="cds--cc--title">
              <p className="title" role="heading" aria-level="2">
                UgandaEMR+ Facilities as per Today ({dayjs(new Date()).format("DD/MMM/YYYY")})
              </p>
            </div>
            <DataTableComponent rows={facilityDetailsPlus().facility}
                                headers={facilityHeaders} indicator={false}/>
          </div>
          <div className="item-chart">
            <div className="item-chart-donut">
              <DonutChart
                data={[{group: "UgandaEMR+", value: facilityDetailsPlus().count ?? 0}, {
                  group: "UgandaEMR",
                  value: 1700 - (facilityDetailsPlus().count ?? 0)
                }]}
                options={donutEMRCoverageOptions}
              />
            </div>
          </div>
        </div>
      </>
    );
};

export default UgandaemrCoverage;

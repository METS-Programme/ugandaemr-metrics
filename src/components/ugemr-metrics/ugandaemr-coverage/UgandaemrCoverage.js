import React, {useEffect, useState} from 'react';
import "./UgandaemrCoverage.css";
import {
  CheckmarkOutline,
  ScreenOff,
  DevicesApps,
  IbmCloudLogging,
  CloudLogging
} from "@carbon/react/icons"
import "@carbon/charts/styles.css";
import {DataTableComponent} from "../../data-table/data-table.component";
import {
  facilityHeaders, pieChartLevelsRDEPOCOptions,
  pieChartRDEPOCOptions,
  stackedChartByCDCPartners, stackedChartByLevel,
  stackedChartByUSAIDPartners,
} from "../../../constants";
import dayjs from "dayjs";
import {PieChart, StackedBarChart} from "@carbon/charts-react";
import {
  coverageByLevel,
  coverageByPartner, facilityByFunctionality,
  facilityDetailsPlus
} from "./functions";

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

  useEffect(() => {
    fetchData();
  }, []);

    return (
      <>
        <div className="tile-container-ug-coverage">
          <div className="tile-ug-coverage tile-margin-ug-coverage">
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

          <div className="tile-ug-coverage tile-margin-ug-coverage">
            <div className="tile-header">
              <div className="tile-items-container">
                <div className="tile-icon"><IbmCloudLogging size={50}/></div>
                <div>UgandaEMR+ Coverage</div>
              </div>
              <div className="tile-bottom-style">
                <div
                  className="tile-item-value"> {((facilityDetailsPlus(data).count / 1700) * 100).toFixed(1)}%
                  <span className="level-text"> &nbsp;({facilityDetailsPlus(data).count} / 1700)</span>
                </div>
                <div
                  className="tile-item-value"> {facilityDetailsPlus(data).count}</div>
              </div>
            </div>
          </div>

          <div className="tile-ug-coverage tile-margin-ug-coverage">
            <div className="tile-header">
              <div className="tile-items-container">
                <div className="tile-icon"><CloudLogging size={50}/></div>
                <div>Coverage By Level</div>
              </div>
              <div className="level-style">
                {coverageByLevel(data)?.pieData?.map((level,index) => (
                  <>
                    <span key={index}>
                      {level?.group}
                    </span>
                    <span> - </span>
                    <span className="level-value-style">
                       {level?.value}
                    </span>
                  </>
                ))}
              </div>
            </div>
          </div>

          <div className="tile-ug-coverage">
            <div className="tile-header">
              <div className="tile-items-container">
                <div className="tile-icon"><ScreenOff size={50}/>
                </div>
                <div>POC Vs Retrospective</div>
              </div>
              <div className="tile-bottom-style">
                <div className="tile-item-value">
                  {((facilityByFunctionality(data).POC / facilityDetailsPlus(data).count) * 100).toFixed(1)}%
                  <span className="level-text">
                    &nbsp; ({facilityByFunctionality(data).POC} / {facilityDetailsPlus(data).count})
                  </span>
                </div>
                <div className="tile-item-value">
                  {((facilityByFunctionality(data).RDE / facilityDetailsPlus(data).count) * 100).toFixed(1)}%
                  <span className="level-text">
                    &nbsp; ({facilityByFunctionality(data).RDE} / {facilityDetailsPlus(data).count})
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div className="tile-container">
          <div className="tile tile-margin">
            <div className="tile-header">
              <div className="tile-items-container">
                <PieChart options={pieChartRDEPOCOptions}
                          data={[{group: "POC", value: facilityByFunctionality(data).POC}, {
                            group: "Retrospective",
                            value: facilityByFunctionality(data).RDE
                          }]}/>
              </div>
            </div>
          </div>

          <div className="tile-coverage  tile-margin">
            <StackedBarChart options={stackedChartByLevel}
                             data={coverageByLevel(data).stackedData}/>
          </div>

          <div className="tile tile-margin">
            <div className="tile-header">
              <div className="tile-items-container">
                <PieChart options={pieChartLevelsRDEPOCOptions}
                          data={coverageByLevel(data)?.pieData}/>
              </div>
            </div>
          </div>
        </div>

        <div className="tile-container">
          <div className="tile-coverage tile-margin">
            <StackedBarChart options={stackedChartByCDCPartners}
                             data={coverageByPartner(data, "CDC")}/>
          </div>
          <div className="tile-coverage tile-margin">
            <StackedBarChart options={stackedChartByUSAIDPartners}
                             data={coverageByPartner(data, "USAID")}/>
          </div>
        </div>

        <div className="item-chart-container">
          <div className="item-chart">
            <div className="cds--cc--title">
              <p className="title" role="heading" aria-level="2">
                UgandaEMR+ Facilities as per Today
                ({dayjs(new Date()).format("DD/MMM/YYYY")})
              </p>
            </div>
            <DataTableComponent rows={facilityDetailsPlus(data).facility}
                                headers={facilityHeaders} indicator={false}
                                showDownload={facilityDetailsPlus(data).facility.length > 0}/>
          </div>
        </div>
      </>
    );
};

export default UgandaemrCoverage;

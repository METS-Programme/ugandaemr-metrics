import React, {useEffect, useState} from 'react';
import "./UgandaemrCoverage.css";
import {
  EventsAlt,
  Tour,
  GroupPresentation,
  CloudServiceManagement
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
import ViewButton from "../../home/view-button";
import MapComponent from "../../maps/map";

const UgandaemrCoverage = (props) => {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    const date = dayjs(new Date()).format("YYYY-MM-DD")
    try {
      const response = await fetch(`https://ugisl.mets.or.ug/stats?and=(emrversion.in.("4.0.3","4.0.2","4.0.0-SNAPSHOT"))`);
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
          <div className="tile-wrapper-one">
            <div className="tile-ug-coverage tile-margin-ug-coverage">
              <div className="tile-header tile-header-style">
                <div className="tile-items-container">
                  <div className="tile-icon"><Tour size={50}/></div>
                  <div className="header-text-color">Coverage</div>
                </div>
              </div>
              <div className="tile-bottom-style">
                <div className="emr-details-table">
                  <table>
                    <tbody>
                    <tr>
                      <td className="td-text-align">Version:</td>
                      <td
                        className="td-details-value"> &nbsp; {'4.0.3'}</td>
                    </tr>
                    <tr>
                      <td className="td-text-align">% of sites:</td>
                      <td className="td-details-value">
                        &nbsp;{((facilityDetailsPlus(data).count / 1700) * 100).toFixed(1)}%
                        of 1700

                      </td>
                    </tr>
                    </tbody>
                  </table>
                </div>
                <div
                  className="tile-item-coverage"> {facilityDetailsPlus(data).count}</div>
              </div>
            </div>

            <div className="tile-ug-coverage tile-margin-ug-coverage">
              <div className="tile-header">
                <div className="tile-items-container">
                  <div className="tile-icon"><GroupPresentation size={50}/>
                  </div>
                  <div className="header-text-color">POC Vs RDE</div>
                </div>
              </div>
              <div className="emr-details-table">
                <table>
                  <tbody>
                  <tr>
                    <td className="td-text-align">No. of POC:</td>
                    <td className="td-details-value">
                      <span className="level-text">
                       &nbsp; {facilityByFunctionality(data).POC} of {facilityDetailsPlus(data).count}
                      </span>
                      &nbsp; ({((facilityByFunctionality(data).POC / facilityDetailsPlus(data).count) * 100).toFixed(1)}%)
                    </td>
                  </tr>
                  <tr>
                    <td className="td-text-align">No. of Retrospective:</td>
                    <td className="td-details-value">
                      <span className="level-text">
                        &nbsp; {facilityByFunctionality(data).RDE} of {facilityDetailsPlus(data).count}
                      </span>
                      &nbsp; ({((facilityByFunctionality(data).RDE / facilityDetailsPlus(data).count) * 100).toFixed(1)}%)
                    </td>
                  </tr>
                  <tr>
                    <td className="td-text-align">Cumm Patient No:</td>
                    <td className="td-details-value">&nbsp; TBA</td>
                  </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="tile-wrapper-two">
            <div className="tile-ug-coverage tile-margin-ug-coverage">
              <div className="tile-header">
                <div className="tile-items-container">
                  <div className="tile-icon"><CloudServiceManagement size={50}/>
                  </div>
                  <div className="header-text-color">Mechanism</div>
                </div>
              </div>

              <div className="emr-details-table">
                <table>
                  <tbody>
                  <tr>
                    <td className="td-text-align">CDC:</td>
                    <td className="td-details-value">
                      &nbsp; {((coverageByPartner(data, "CDC").totalCount / facilityDetailsPlus(data).count) * 100).toFixed(1)}%
                      &nbsp; ({coverageByPartner(data, "CDC").totalCount} / {facilityDetailsPlus(data).count})
                    </td>
                  </tr>
                  <tr>
                    <td className="td-text-align">USAID:</td>
                    <td className="td-details-value">
                      &nbsp; {((coverageByPartner(data, "USAID").totalCount / facilityDetailsPlus(data).count) * 100).toFixed(1)}%
                      &nbsp; ({coverageByPartner(data, "USAID").totalCount} / {facilityDetailsPlus(data).count})
                    </td>
                  </tr>
                  <tr>
                    <td className="td-text-align">DOD:</td>
                    <td className="td-details-value">
                      &nbsp; {((coverageByPartner(data, "DOD").totalCount / facilityDetailsPlus(data).count) * 100).toFixed(1)}%
                      &nbsp; ({coverageByPartner(data, "DOD").totalCount} / {facilityDetailsPlus(data).count})
                    </td>
                  </tr>
                  <tr>
                    <td className="td-text-align">Others:</td>
                    <td className="td-details-value">
                      &nbsp; {((1 / facilityDetailsPlus(data).count) * 100).toFixed(1)}%
                      &nbsp; (1 / {facilityDetailsPlus(data).count})
                    </td>
                  </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="tile-ug-coverage tile-margin-ug-coverage">
              <div className="tile-header">
                <div className="tile-items-container">
                  <div className="tile-icon"><EventsAlt size={50}/>
                  </div>
                  <div className="header-text-color">Data Clerks</div>
                </div>
              </div>
              <div className="emr-details-table">
                <table>
                  <tbody>
                  <tr>
                    <td className="td-text-align">Gov't:</td>
                    <td className="td-details-value">&nbsp; TBA</td>
                  </tr>
                  <tr>
                    <td className="td-text-align">IP:</td>
                    <td className="td-details-value">&nbsp; TBA</td>
                  </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="tile-container">
          <div className="tile tile-margin">
            <div className="tile-header">
              <div className="tile-items-container">
                <PieChart options={pieChartRDEPOCOptions}
                          data={[{
                            group: "POC",
                            value: facilityByFunctionality(data).POC
                          }, {
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
        <div className="item-chart-container">
          <div className="item-chart">
            <div className="cds--cc--title">
              <p className="title" role="heading" aria-level="2">
                UgandaEMR+ Facilities across the country as of
                ({dayjs(new Date()).format("DD/MMM/YYYY")})
              </p>
            </div>
            <MapComponent facilityArray={facilityDetailsPlus(data).facility}/>
          </div>
        </div>
        <div className="tile-container">
          <div className="tile-coverage tile-margin">
            <StackedBarChart options={stackedChartByCDCPartners}
                             data={coverageByPartner(data, "CDC").facilities}/>
          </div>
          <div className="tile-coverage tile-margin">
            <StackedBarChart options={stackedChartByUSAIDPartners}
                             data={coverageByPartner(data, "USAID").facilities}/>
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

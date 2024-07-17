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
                <div className="tile-icon"><Tour size={50}/></div>
                <div> UgEMR+ Coverage</div>
              </div>
            </div>
            <div className="emr-details-table">
              <table>
                <tbody>
                <tr>
                  <td className="td-text-align">Version:</td>
                  <td className="td-details-value"> &nbsp; {'4.0.0-SNAPSHOT'}</td>
                </tr>
                <tr>
                  <td className="td-text-align">Sites:</td>
                  <td className="td-details-value">
                    &nbsp;{facilityDetailsPlus(data).count}
                    &nbsp;({((facilityDetailsPlus(data).count / 1700) * 100).toFixed(1)}%)
                  </td>
                </tr>
                </tbody>
              </table>
              <div className="level">
                {coverageByLevel(data)?.pieData?.map((level, index) => (
                  <>
                  <span>
                      {level?.group === "General Hospital"
                        ? "GH"
                        : level?.group === "Special Clinic"
                          ? "SC"
                          : level?.group === "HC IV"
                            ? "HCIV"
                            : level?.group === "HC III"
                              ? "HCIII"
                              : level?.group
                      } </span> - <span className="td-details-value"> {level?.value} </span> &nbsp;
                  </>
                ))}
              </div>
            </div>
          </div>

          <div className="tile-ug-coverage tile-margin-ug-coverage">
            <div className="tile-header">
              <div className="tile-items-container">
                <div className="tile-icon"><GroupPresentation size={50}/></div>
                <div>POC Vs RDE</div>
              </div>
            </div>
            <div className="emr-details-table">
              <table>
                <tbody>
                <tr>
                  <td className="td-text-align">POC:</td>
                  <td className="td-details-value">
                    &nbsp; {((facilityByFunctionality(data).POC / facilityDetailsPlus(data).count) * 100).toFixed(1)}%
                    <span className="level-text">
                      &nbsp; ({facilityByFunctionality(data).POC} / {facilityDetailsPlus(data).count})
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="td-text-align">Retrospective:</td>
                  <td className="td-details-value">
                    &nbsp; {((facilityByFunctionality(data).RDE / facilityDetailsPlus(data).count) * 100).toFixed(1)}%
                    <span className="level-text">
                      &nbsp; ({facilityByFunctionality(data).RDE} / {facilityDetailsPlus(data).count})
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="td-text-align">Cumm Patient No:</td>
                  <td>&nbsp; ###</td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="tile-ug-coverage tile-margin-ug-coverage">
            <div className="tile-header">
              <div className="tile-items-container">
                <div className="tile-icon"><CloudServiceManagement size={50}/></div>
                <div>UgEMR+ IM</div>
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
                  <td className="td-details-value">&nbsp; 0</td>
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
                <div>UgEMR+ HWs</div>
              </div>
            </div>
            <div className="emr-details-table">
              <table>
                <tbody>
                <tr>
                  <td className="td-text-align">Gov't:</td>
                  <td>&nbsp; ###</td>
                </tr>
                <tr>
                  <td className="td-text-align">IP:</td>
                  <td>&nbsp; ###</td>
                </tr>
                </tbody>
              </table>
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

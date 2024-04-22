import React from 'react';
import "./Clinic.master.css";
import { Store, DevicesApps, GroupPresentation, UserMultiple } from "@carbon/react/icons"
import "@carbon/charts/styles.css";
import ViewButton from "../view-button";

const ClinicMasterMetrics = () => {
    return (
        <>
          <div className="tile-container">
            <div className="tile tile-margin">
              <div className="tile-header">
                <div className="tile-items-container">
                  <div className="tile-icon"><DevicesApps size={50}/></div>
                  <div> Clinic Master</div>
                </div>
              </div>
              <div className="emr-details-table">

              </div>
            </div>
            <div className="tile tile-margin">
              <div className="tile-header">
                <div className="tile-items-container">
                  <div className="tile-icon"><Store size={50}/></div>
                  <div> Health Facilities</div>
                </div>
                <div className="tile-bottom-style">
                  <div className="tile-item-value"> 0</div>
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
                  <div className="tile-item-value"> 0</div>
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
                  <div className="tile-item-value"> 0</div>
                  <ViewButton/>
                </div>
              </div>
            </div>
          </div>

          <div className="item-chart-container">
            <div className="item-chart item-chart-left">

            </div>
            <div className="item-chart">

            </div>
          </div>
        </>
    );
};

export default ClinicMasterMetrics;

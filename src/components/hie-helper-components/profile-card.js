import React from "react";
import { ClickableTile } from "@carbon/react";
import { ArrowUp, ArrowDown } from "@carbon/react/icons";
import "./profile-card.css";
import {
  facilityByFunctionality,
  facilityDetailsPlus
} from "../ugemr-metrics/ugandaemr-coverage/functions";

export const ProfileCard = ({ profile }) => {
  return (
    <ClickableTile
      className={`card-tile`}
      id={profile.uuid}
    >
      <>
        <div className="card-wrapper">
          <div>
            {profile.icon}
            {
              profile?.name === 'CUMULATIVE' ?

                <div className="tile-bottom-style">
                  <div className="card-table-details">
                    <table>
                      <tbody>
                      <tr>
                        <td className="td-text-align">High Volume:</td>
                        <td
                          className="td-details-value"> &nbsp; {profile?.highVol}</td>
                      </tr>
                      <tr>
                        <td className="td-text-align">Low Volume:</td>
                        <td className="td-details-value">
                          &nbsp;{profile?.lowVol}
                        </td>
                      </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                // <div className="">
                //   <div>High Volume </div>
                //   <div>Low Volume {profile?.lowVol}</div>
                // </div>
                : null}

          </div>
          <div className="">
            <div className="first-item">
              {/*<div>{profile?.incoming?.total}</div>*/}
              <div className="profile-name"> {profile.name} </div>
              {/*<ArrowDown size={15} className="in-coming-arrow"/>*/}
            </div>
            <div className="second-item">
              {/*<div>{profile?.outgoing?.total}</div>*/}
              {/*  <ArrowUp size={15} className="out-going-arrow" />*/}
              <div className="cumulative-text"> {profile?.total} </div>
            </div>
          </div>
        </div>
      </>
    </ClickableTile>
  );
};

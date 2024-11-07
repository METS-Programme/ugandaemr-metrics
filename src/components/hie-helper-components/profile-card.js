import React from "react";
import { ClickableTile } from "@carbon/react";
import { ArrowUp, ArrowDown } from "@carbon/react/icons";
import "./profile-card.css";

export const ProfileCard = ({ profile, onClickHandler, selectedClass }) => {
  return (
    <ClickableTile
      onClick={() => onClickHandler(profile)}
      className={`card-tile ${selectedClass}`}
      id={profile.uuid}
    >
      <>
        <div className="card-wrapper">
          <div>
            {profile.icon}
            <div className="profile-name">{profile.name}</div>
          </div>
          <div className="">
            <div className="first-item">
              <div>{profile?.incoming?.total}</div>
              <ArrowDown size={15} className="in-coming-arrow" />
            </div>
            <div className="second-item">
              <div>{profile?.outgoing?.total}</div>
              <ArrowUp size={15} className="out-going-arrow" />
            </div>
          </div>
        </div>
      </>
    </ClickableTile>
  );
};

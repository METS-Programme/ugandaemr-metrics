import React, { useState } from 'react';
import {
  Layer,
  Tile,
} from "@carbon/react";
import "@carbon/charts/styles.css";
import './empty-state.css';
import EmptyStateIllustration from "./empty-state-illustration";

const EmptyStateComponent = () => {

  return (
    <>
      <Layer className="empty-state-layer">
        <Tile className="empty-state-title">
          <EmptyStateIllustration />
          <p className="empty-state-content">No data to display</p>
          <p className="empty-state-explainer">
            Use the report filters above to build your reports
          </p>
        </Tile>
      </Layer>

    </>
  );
};

export default EmptyStateComponent;

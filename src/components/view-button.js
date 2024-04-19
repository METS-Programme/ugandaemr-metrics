import React from 'react';
import "../Metrics.css";
import { ArrowRight } from "@carbon/react/icons"
import {Button} from "@carbon/react";

const ViewButton = () => {
  return (
    <Button
      className="view-button"
      kind="ghost"
      renderIcon={() => (
        <ArrowRight size={16} className="arrow-icon" />
      )}
      iconDescription="View"
    >
      View
    </Button>
  );
};

export default ViewButton;


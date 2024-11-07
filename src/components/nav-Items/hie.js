import React from 'react';
import EmptyStateComponent from "../empty-state/empty-state";
import UgandaemrHIE from "../ugemr-metrics/ugandaemr-hie/UgandaemrHIE";

const HIEComponent = (props) => {
  const { emr } = props;

  return (
    <>
      {emr === "ugandaemr" && (<UgandaemrHIE />)}
      {emr === "eafya" && (<EmptyStateComponent />)}
      {emr === "clinicmaster" && (<EmptyStateComponent />)}
    </>
  );
};

export default HIEComponent;

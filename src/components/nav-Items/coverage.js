import React from 'react';
import UgandaemrCoverage from "../ugemr-metrics/ugandaemr-coverage/UgandaemrCoverage";
import EmptyStateComponent from "../empty-state/empty-state";

const CoverageComponent = (props) => {
  const { emr } = props;

  return (
    <>
      {emr === "ugandaemr" && (<UgandaemrCoverage />)}
      {emr === "eafya" && (<EmptyStateComponent />)}
      {emr === "clinicmaster" && (<EmptyStateComponent />)}
    </>
  );
};

export default CoverageComponent;

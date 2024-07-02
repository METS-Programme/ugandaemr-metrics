import React from 'react';
import UgandaemrCoverage from "../ugemr-metrics/ugandaemr-coverage/UgandaemrCoverage";

const CoverageComponent = (props) => {
  const { emr } = props;

  return (
    <>
      {emr === "ugandaemr" && (<UgandaemrCoverage />)}

    </>
  );
};

export default CoverageComponent;

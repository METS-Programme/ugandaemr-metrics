import React from 'react';
import UgandaemrPOC from "../ugemr-metrics/ugandaemr-poc/UgandaemrPOC";

const PocComponent = (props) => {
  const { emr } = props;

  return (
    <>
      {emr === "ugandaemr" && (<UgandaemrPOC />)}

    </>
  );
};

export default PocComponent;

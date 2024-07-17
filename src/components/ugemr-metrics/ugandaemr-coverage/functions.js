export const facilityDetailsPlus = (data) => {
  const facility = [];
  let count = 0;
  data?.forEach((record, index) => {
    facility.push({
      id: `${index++}`,
      no: `${index++}`,
      facility_id: record?.sourceid,
      facility: record?.facilityname,
      level: record?.sourceid === "aUoqX6lBNFA" ? "HC II" : record?.ftype,
      district: record?.sourceid === "aUoqX6lBNFA" ? "Kampala District" : record?.district,
      ip: record?.ip,
      agency: record?.agency,
      functionality: record?.poc_active === 1 ? "POC" : "Retrospective",
      active: record?.off_last_3_days === 0 ? "Yes" : "No",
    });

    count += 1;
  });

  return { facility,count };
};

export const coverageByPartner = (data, agency) => {
  const facilities = data?.filter((item) => item?.agency === agency);
  const uniqueIPs = getUniqueIP(facilities);
  const coverageByAgency = [];

  uniqueIPs?.map((selectedIP) => {
    const POCFacilities = facilities?.filter((item) => item?.ip === selectedIP?.ip && item?.poc_active === 1);
    const RDEFacilities = facilities?.filter((item) => item?.ip === selectedIP?.ip && item?.poc_active === 0);
    coverageByAgency.push({
      group: "POC",
      key: selectedIP?.ip,
      value: POCFacilities?.length ?? 0
    });

    coverageByAgency.push({
      group: "Retrospective",
      key: selectedIP?.ip,
      value: RDEFacilities?.length ?? 0
    });
  });

  return coverageByAgency;
}

export const coverageByLevel = (data) => {
  const uniqueFacilityLevels = getUniqueLevels(data);
  const coverageLevelStacked = [];
  const coverageLevelPie = [];

  uniqueFacilityLevels?.map((selectedFacility) => {
    const POCFacilities = data?.filter((item) => item?.ftype === selectedFacility?.ftype && item?.poc_active === 1);
    const RDEFacilities = data?.filter((item) => item?.ftype === selectedFacility?.ftype && item?.poc_active === 0);
    coverageLevelStacked.push({
      group: "POC",
      key: selectedFacility?.ftype,
      value: POCFacilities?.length ?? 0
    });

    coverageLevelStacked.push({
      group: "Retrospective",
      key: selectedFacility?.ftype,
      value: RDEFacilities?.length ?? 0
    });

    coverageLevelPie.push({
      group: selectedFacility.ftype,
      value: data?.filter((item) => item?.ftype === selectedFacility.ftype)?.length ?? 0
    })
  });

  return {
    stackedData: coverageLevelStacked,
    pieData:coverageLevelPie
  };
}


export function getUniqueIP(IPCategoryArray){
  const uniqueIPCategory = new Set(
    IPCategoryArray?.map((IPCategory) => IPCategory?.ip).filter((ip) => ip !==null)
  );

  const newIPCategoryArray = Array.from(
    uniqueIPCategory
  ).map((ip) => {
      return IPCategoryArray?.find((item) => item.ip === ip);
    })
    .filter((item) => !!item);

  return newIPCategoryArray;
}

export function getUniqueLevels(facilityArray){
  const uniqueFacilityLevel = new Set(
    facilityArray?.map((facility) => facility?.ftype).filter((ftype) => ftype !== null)
  );

  const newFacilityLevel = Array.from(
    uniqueFacilityLevel
  ).map((ftype) => {
    return facilityArray?.find((item) => item.ftype === ftype);
  }).filter((item) => !!item);

  return newFacilityLevel;
}


export function facilityByFunctionality(data) {
  const facilities = facilityDetailsPlus(data).facility;
  const POCFacilities = facilities.filter((facility) => facility?.functionality === "POC");
  const RDEFacilities = facilities.filter((facility) => facility?.functionality === "Retrospective");

  return {
    POC: POCFacilities?.length,
    RDE: RDEFacilities?.length
  }
}

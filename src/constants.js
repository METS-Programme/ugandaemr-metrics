export const fourXheaders = [
  {
    key: 'facility',
    header: 'Facility',
  },
  {
    key: 'triage',
    header: 'Triage',
  },
  {
    key: 'clinician',
    header: 'Clinician',
  },
  {
    key: 'lab',
    header: 'Lab',
  },
  {
    key: 'pharmacy',
    header: 'Pharmacy',
  },
  {
    key: 'vlSent',
    header: 'VL Sent',
  },
  {
    key: 'vlReceived',
    header: 'VL Results',
  }
];

export const threeXHeaders = [
  {
    key: 'facility',
    header: 'Facility',
  },
  {
    key: 'version',
    header: 'EMR Version',
  },
  {
    key: 'triage',
    header: 'Triage',
  },
  {
    key: 'clinician',
    header: 'Clinician',
  },
  {
    key: 'lab',
    header: 'Lab',
  },
  {
    key: 'pharmacy',
    header: 'Pharmacy',
  },
];

export const facilityHeaders = [
  {
    key: 'no',
    header: 'No',
  },
  {
    key: 'facility_id',
    header: 'Facility ID',
  },
  {
    key: 'facility',
    header: 'Facility Name',
  },
  {
    key: 'level',
    header: 'Level',
  },
  {
    key: 'district',
    header: 'District',
  },
  {
    key: 'ip',
    header: 'IP',
  },
  {
    key: 'agency',
    header: 'Agency',
  },
  {
    key: 'functionality',
    header: '(POC / RDE)',
  },
  {
    key: 'active',
    header: 'Active (Past 3 days)',
  },
];

export const donutEMRCoverageOptions = {
  title: "UgandaEMR+ Coverage",
  resizable: true,
  donut: {
    center: {
      label: "Facilities",
    },
  },
  height: "450px",
};

export const donutVLCoverageOptions = {
  title: "Viral Load Coverage",
  resizable: true,
  donut: {
    center: {
      label: "Total Facilities",
    },
  },
  color: {
    pairing: {
      option: 3
    }
  },
  height: "400px",
};


export const pieChartRDEPOCOptions = {
  title: "POC Vs Retrospective",
  resizable: true,
  height: "400px",
  color: {
    scale: {
      POC: "#009d9a",
      Retrospective: "#9f1853"
    }
  },
}

export const pieChartLevelsRDEPOCOptions = {
  title: "Coverage by Level (Pie)",
  resizable: true,
  height: "400px",
}

export const stackedChartByCDCPartners = {
  title: "Coverage By IP - CDC",
  axes: {
    left: {
      scaleType: "labels"
    },
    bottom: {
      stacked: true
    },
  },
  color: {
    scale: {
      POC: "#198038",
      Retrospective: "#ff832b"
    }
  },
  height: "500px"
};

export const stackedChartByUSAIDPartners = {
  title: "Coverage By IP - USAID",
  axes: {
    left: {
      scaleType: "labels",
    },
    bottom: {
      stacked: true
    },
  },
  height: "500px",
  color: {
    scale: {
      POC: "#005d5d",
      Retrospective: "#9f1853"
    }
  },
};

export const stackedChartByLevel = {
  title: "Coverage By Level (Stacked)",
  axes: {
    left: {
      scaleType: "labels"
    },
    bottom: {
      stacked: true
    }
  },
  height: "400px"
};

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

export const donutEMRCoverageOptions = {
  title: "UgandaEMR+ Coverage",
  resizable: true,
  donut: {
    center: {
      label: "Facilities",
    },
  },
  height: "400px",
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

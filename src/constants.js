import {
  BuildingInsights_2,
  Chat,
  Collaborate,
  DataCenter,
  Datastore,
  Db2Database,
  GroupAccess,
  IbmMq,
  LoadBalancerPool,
  LogicalPartition,
  Microscope,
  Product,
  Rss,
} from "@carbon/react/icons";
export const fourXheaders = [
  {
    key: 'no',
    header: 'No',
  },
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

export const exchangeHeaders = [
  {
    key: 'no',
    header: 'No',
  },
  {
    key: 'created',
    header: 'DATE',
  },
  {
    key: 'tx_curr',
    header: 'TX_CURR',
  },
  {
    key: 'region',
    header: 'REGION',
  },
  {
    key: 'agency',
    header: 'AGENCY',
  },
  {
    key: 'fname',
    header: 'FACILITY NAME',
  },
  {
    key: 'mechanism',
    header: 'MECHANISM',
  },
  {
    key: 'is_hvol',
    header: 'HIGH VOLUME',
  },
  {
    key: 'hie_vl_program',
    header: 'VL',
  },
  {
    key: 'hie_cbs',
    header: 'DATA REPLICATION',
  },
  {
    key: 'hie_mortality',
    header: 'MORTALITY',
  },
  {
    key: 'hie_recency',
    header: 'RECENCY',
  },
  {
    key: 'hie_pirs',
    header: 'PIRS',
  },
  {
    key: 'hie_mpox',
    header: 'MPOX',
  },
  {
    key: 'emr_poc',
    header: 'EMR PoC',
  },
  {
    key: 'hie_ehmis',
    header: 'eHMIS',
  },
  {
    key: 'hie_art_access',
    header: 'ART ACCESS',
  },
  {
    key: 'his_emr_modules',
    header: 'HIS_EMR_MODULES',
  },
  {
    key: 'his_poc_data',
    header: 'HIS_POC_DATA',
  },
  {
    key: 'his_internet',
    header: 'HIS_INTERNET',
  },
  {
    key: 'his_hmis_emr',
    header: 'HIS_HMIS_EMR',
  }
];


export function getProfiles() {
  const profiles = [
    {
      uuid: "6aab2c93-0517-4aa0-82e8-dec9065f3f26", // Generated to uniquely identify the profile
      name: "VIRAL LOAD",
      type: "fhirProfile",
      icon: <LoadBalancerPool size={35} />,
      className: "first-carousel-item",
      hieName: ["VL_PROGRAM_SEND","VL_REQUEST","VL_SEND"],
      incoming: {
        url: "3396dcf0-2106-4e73-9b90-c63978c3a8b4",
        total: 0,
        success: 0,
        failure: 0,
        type: "syncTask",
      },
      outgoing: {
        url: "3551ca84-06c0-432b-9064-fcfeefd6f4ec",
        total: 0,
        success: 0,
        failure: 0,
        type: "syncTask",
      },
    },

    {
      uuid: "3e2de79f-1145-44db-ac4b-bcfb630f429a",
      name: "MORTALITY",
      type: "fhirProfile",
      icon: <Product size={35} />,
      hieName: ["MORTALITY"],
      incoming: {
        url: "5426f5e3-4232-43e8-b10f-07b7093927b8-PR",
        total: 0,
        success: 0,
        failure: 0,
        type: "fhirProfile",
      },
      outgoing: {
        url: "0c672b6e-2eec-4a4e-91e2-e2b93624f8a5",
        total: 0,
        success: 0,
        failure: 0,
        type: "fhirProfile",
      },
    },
    {
      uuid: "3eec4bbc-702e-4669-9edb-412194021c44",
      name: "DATA REPLICATION",
      type: "fhirProfile",
      icon: <Rss size={35} />,
      hieName: ["CBS"],
      incoming: {
        url: "a3b6a8e2-6369-4bdc-b67f-fa7855f062b2",
        total: 0,
        success: 0,
        failure: 0,
        type: "fhirProfile",
      },
      outgoing: {
        url: "6511be5a-72f2-4638-a60b-78e31c3e2b28",
        total: 0,
        success: 0,
        failure: 0,
        type: "fhirProfile",
      },
    },
    {
      uuid: "acfe0df4-8c9c-44af-8b3b-f80b960eb7c8",
      name: "RECENCY",
      type: "syncTask",
      icon: <Chat size={35} />,
      hieName: ["RECENCY"],
      className: "fourth-carousel-item",
      incoming: {
        url: "eaee46e4-5cd1-49ce-85c2-a950781dc050",
        total: 0,
        success: 0,
        failure: 0,
        type: "fhirProfile",
      },
      outgoing: {
        url: "08c5be38-1b79-4e27-b9ca-5da709aef5fe",
        total: 0,
        success: 0,
        failure: 0,
        type: "syncTask",
      },
    },
    {
      uuid: "7c65ca72-343e-4e7b-9fd7-aa1d4d72bb0a", // Generated to uniquely identify the profile
      name: "ART ACCESS",
      type: "fhirProfile",
      icon: <GroupAccess size={35} />,
      hieName: ["CRPDDP_SEND"],
      className: "fifth-carousel-item",
      incoming: {
        url: "4c4e9551-d9d6-4882-93bd-e61a42e2f755",
        total: 0,
        success: 0,
        failure: 0,
        type: "syncTask",
      },
      outgoing: {
        url: "0a7fff77-6ac7-416c-831e-4e3f1f2c853b",
        total: 0,
        success: 0,
        failure: 0,
        type: "fhirProfile",
      },
    },
    {
      uuid: "cdec473b-90e0-4155-8b9d-677016f39dac",
      name: "PIRS",
      type: "fhirProfile",
      icon: <LogicalPartition size={35} />,
      hieName: [""],
      incoming: {
        url: "e5e41e4c-fb2d-4b9a-8e70-5f6ee85ae304",
        total: 0,
        success: 0,
        failure: 0,
        type: "fhirProfile",
      },
      outgoing: {
        url: "6ebd85c8-127b-4c88-8a40-27defef367a9",
        total: 0,
        success: 0,
        failure: 0,
        type: "fhirProfile",
      },
    },
    {
      uuid: "47bb67f3-9acc-4e86-8400-b2a7b681f5f3",
      name: "eHMIS",
      type: "fhirProfile",
      icon: <DataCenter size={35} />,
      hieName: ["eHMIS"],
      incoming: {
        url: "8098d7ee-47a5-4f49-9540-c3d2c81a0bfe",
        total: 0,
        success: 0,
        failure: 0,
        type: "fhirProfile",
      },
      outgoing: {
        url: "c5f00f18-c0f6-4917-b973-2b7c1d2d4a81",
        total: 0,
        success: 0,
        failure: 0,
        type: "fhirProfile",
      },
    },
    {
      uuid: "dab00e39-9ac4-483e-b57e-421033293ebd",
      name: "eCBSS",
      type: "fhirProfile",
      icon: <IbmMq size={35} />,
      hieName: ["eCBSS"],
      incoming: {
        url: "9e358825-ae42-4837-9d8f-0fc77c3e6598",
        total: 0,
        success: 0,
        failure: 0,
        type: "fhirProfile",
      },
      outgoing: {
        url: "99c4d715-4fcf-4d95-a946-257c6de05cf7",
        total: 0,
        success: 0,
        failure: 0,
        type: "fhirProfile",
      },
    },
  ];

  let maxIndex;
  if (profiles.length > 0) {
    const index = profiles.length / 6;
    const mod = profiles.length % 6;
    if (mod >= 1 && mod <= 5) {
      maxIndex = 1;
    } else {
      maxIndex = 6 - 1;
    }
  }

  return {
    exchangeProfiles: profiles,
    maxPosition: maxIndex,
  };
}

export const allHIEExchange = ["VL_PROGRAM_SEND","VL_REQUEST","VL_SEND","CRPDDP_SEND","MORTALITY","CBS","eHMIS","eCBSS","RECENCY"];

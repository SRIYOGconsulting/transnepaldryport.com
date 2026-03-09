export const ICD_KAKARBHITTA = {
  freightEntryCharges: [
    {
      sn: 1,
      activities: "Truck / Tanker / Tractor / Trailer",
      unit: "Per Entry Per Trip",
      fy82_83: 285.33,
      fy83_85: 313.86,
      fy85_87: 345.25,
      fy87_88: 379.78
    },
    {
      sn: 2,
      activities: "Light Vehicles / Bullock Cart (Up to 5 Ton)",
      unit: "Per Entry Per Trip",
      fy82_83: 142.66,
      fy83_85: 156.93,
      fy85_87: 172.62,
      fy87_88: 189.88
    },
    {
      sn: 3,
      activities: "Hand Trolley",
      unit: "Per Entry Per Trip",
      fy82_83: 42.83,
      fy83_85: 47.11,
      fy85_87: 51.82,
      fy87_88: 57.0
    },
    {
      sn: 4,
      activities: "Container Truck (Fixed Container Vehicle)",
      unit: "Per Entry Per Trip",
      fy82_83: 427.97,
      fy83_85: 470.77,
      fy85_87: 517.85,
      fy87_88: 569.64
    },
    {
      sn: 5,
      activities: "TEU",
      unit: "Per Entry Per Trip",
      fy82_83: 570.61,
      fy83_85: 627.67,
      fy85_87: 690.44,
      fy87_88: 759.48
    },
    {
      sn: 6,
      activities: "FEU",
      unit: "Per Entry Per Trip",
      fy82_83: 855.94,
      fy83_85: 941.53,
      fy85_87: 1035.68,
      fy87_88: 1139.25
    }
  ],

  cargoHandlingCharges: [
    {
      sn: 1,
      activities: "TEU",
      unit: "Per Vehicle",
      fy82_83: 2853.13,
      fy83_85: 3138.44,
      fy85_87: 3452.28,
      fy87_88: 3797.51
    },
    {
      sn: 2,
      activities: "FEU",
      unit: "Per Vehicle",
      fy82_83: 5135.61,
      fy83_85: 5649.17,
      fy85_87: 6214.09,
      fy87_88: 6835.5
    },
    {
      sn: 3,
      activities: "Containerized Cargo",
      unit: "Per MT",
      fy82_83: 199.73,
      fy83_85: 219.7,
      fy85_87: 241.67,
      fy87_88: 265.84
    },
    {
      sn: 4,
      activities: "Non Containerized Break Bulk / Packaged / Bagged Cargo",
      unit: "Per MT",
      fy82_83: 199.73,
      fy83_85: 219.7,
      fy85_87: 241.67,
      fy87_88: 265.84
    },
    {
      sn: 5,
      activities: "Non Containerized Bulk / Loose Cargo",
      unit: "Per MT",
      fy82_83: 142.66,
      fy83_85: 156.93,
      fy85_87: 172.62,
      fy87_88: 189.88
    }
  ],

  terminalHandlingCharges: [
    {
      sn: 1,
      activities: "Loaded Container (TEU)",
      unit: "Complete Cycle",
      fy82_83: 2853.13,
      fy83_85: 3138.44,
      fy85_87: 3452.28,
      fy87_88: 3797.51
    },
    {
      sn: 2,
      activities: "Loaded Container (FEU)",
      unit: "Complete Cycle",
      fy82_83: 4565.0,
      fy83_85: 5021.5,
      fy85_87: 5523.65,
      fy87_88: 6076.02
    },
    {
      sn: 3,
      activities: "Empty Container (TEU)",
      unit: "Complete Cycle",
      fy82_83: 1426.58,
      fy83_85: 1569.24,
      fy85_87: 1726.16,
      fy87_88: 1898.78
    },
    {
      sn: 4,
      activities: "Empty Container (FEU)",
      unit: "Complete Cycle",
      fy82_83: 2282.51,
      fy83_85: 2510.76,
      fy85_87: 2761.84,
      fy87_88: 3038.02
    },
    {
      sn: 5,
      activities:
        "LCL Cargo including container handling/loading/unloading and stuffing/destuffing",
      unit: "Per MT",
      fy82_83: 570.61,
      fy83_85: 627.67,
      fy85_87: 690.44,
      fy87_88: 759.48
    }
  ],

  weighmentCharges: [
    {
      sn: 1,
      activities: "Weighment Charge of Loaded/Empty Vehicles",
      unit: "Per Event",
      fy82_83: 285.33,
      fy83_85: 313.86,
      fy85_87: 345.25,
      fy87_88: 379.78
    }
  ],

  warehousingCharges: {
    import: [
      { sn: 1, activities: "Up to 24 hrs upon arrival", unit: "Per KG Per Day", fy82_83: "Free", fy83_85: "Free", fy85_87: "Free", fy87_88: "Free" },
      { sn: 2, activities: "2-8 days", unit: "Per KG Per Day", fy82_83: 0.17, fy83_85: 0.19, fy85_87: 0.21, fy87_88: 0.23 },
      { sn: 3, activities: "9-30 days", unit: "Per KG Per Day", fy82_83: 0.23, fy83_85: 0.25, fy85_87: 0.28, fy87_88: 0.31 },
      { sn: 4, activities: "31 days onward", unit: "Per KG Per Day", fy82_83: 0.34, fy83_85: 0.37, fy85_87: 0.41, fy87_88: 0.45 }
    ],

    export: [
      { sn: 1, activities: "Up to 24 hrs upon arrival", unit: "Per KG Per Day", fy82_83: "Free", fy83_85: "Free", fy85_87: "Free", fy87_88: "Free" },
      { sn: 2, activities: "2-8 days", unit: "Per KG Per Day", fy82_83: 0.09, fy83_85: 0.1, fy85_87: 0.11, fy87_88: 0.12 },
      { sn: 3, activities: "9-30 days", unit: "Per KG Per Day", fy82_83: 0.11, fy83_85: 0.12, fy85_87: 0.13, fy87_88: 0.14 },
      { sn: 4, activities: "31 days onward", unit: "Per KG Per Day", fy82_83: 0.14, fy83_85: 0.15, fy85_87: 0.17, fy87_88: 0.19 }
    ],

    openYard: [
      { sn: 1, activities: "Up to 24 hrs upon arrival", unit: "Per KG Per Day", fy82_83: "Free", fy83_85: "Free", fy85_87: "Free", fy87_88: "Free" },
      { sn: 2, activities: "2-8 days", unit: "Per KG Per Day", fy82_83: 0.09, fy83_85: 0.1, fy85_87: 0.11, fy87_88: 0.12 },
      { sn: 3, activities: "9 days onward", unit: "Per KG Per Day", fy82_83: 0.14, fy83_85: 0.15, fy85_87: 0.17, fy87_88: 0.19 }
    ]
  },

  containerCleaningCharges: [
    {
      sn: 1,
      activities: "TEU",
      unit: "Per Event",
      fy82_83: 285.33,
      fy83_85: 313.86,
      fy85_87: 345.25,
      fy87_88: 379.78
    },
    {
      sn: 2,
      activities: "FEU",
      unit: "Per Event",
      fy82_83: 427.97,
      fy83_85: 470.77,
      fy85_87: 517.85,
      fy87_88: 569.64
    }
  ],

  forkliftCharges: [
    {
      sn: 1,
      activities: "Complete Cycle TEU",
      unit: "Per Vehicle",
      fy82_83: 4251.74,
      fy83_85: 4676.91,
      fy85_87: 5144.6,
      fy87_88: 5659.06
    },
    {
      sn: 2,
      activities: "Complete Cycle FEU",
      unit: "Per Vehicle",
      fy82_83: 8503.5,
      fy83_85: 9353.85,
      fy85_87: 10289.24,
      fy87_88: 11318.16
    },
    {
      sn: 3,
      activities: "Single Cycle TEU",
      unit: "Per Vehicle",
      fy82_83: 2215.18,
      fy83_85: 2436.7,
      fy85_87: 2680.37,
      fy87_88: 2948.41
    },
    {
      sn: 4,
      activities: "Single Cycle FEU",
      unit: "Per Vehicle",
      fy82_83: 4428.91,
      fy83_85: 4871.8,
      fy85_87: 5358.97,
      fy87_88: 5894.88
    },
    {
      sn: 5,
      activities: "Non Containerized",
      unit: "Per MT",
      fy82_83: 266.46,
      fy83_85: 293.11,
      fy85_87: 322.42,
      fy87_88: 354.66
    }
  ],

  subleaseCharges: [
    {
      sn: 1,
      activities: "Unfurnished Room inside the ICD Premises",
      unit: "m2 per Month",
      fy82_83: 730.0,
      fy83_85: 803.0,
      fy85_87: 883.0,
      fy87_88: 971.0
    }
  ],
  vehicleParkingCharges: [
  {
    sn: 1,
    activities: "FEU - 2-7 Days",
    unit: "Per Day",
    fy82_83: 570.61,
    fy83_85: 627.67,
    fy85_87: 690.44,
    fy87_88: 759.48
  },
  {
    sn: 2,
    activities: "FEU - 8 Days Onward",
    unit: "Per Day",
    fy82_83: 855.94,
    fy83_85: 941.53,
    fy85_87: 1035.68,
    fy87_88: 1139.25
  },
  {
    sn: 3,
    activities: "Other Vehicles - 2-7 Days",
    unit: "Per Day",
    fy82_83: 427.97,
    fy83_85: 470.77,
    fy85_87: 517.85,
    fy87_88: 569.64
  },
  {
    sn: 4,
    activities: "Other Vehicles - 8 Days Onward",
    unit: "Per Day",
    fy82_83: 570.61,
    fy83_85: 627.67,
    fy85_87: 690.44,
    fy87_88: 759.48
  }
],

containerParkingCharges: [
  {
    sn: 1,
    activities: "FEU Container - 2-7 Days",
    unit: "Per Day",
    fy82_83: 570.61,
    fy83_85: 627.67,
    fy85_87: 690.44,
    fy87_88: 759.48
  },
  {
    sn: 2,
    activities: "FEU Container - 8 Days Onward",
    unit: "Per Day",
    fy82_83: 855.94,
    fy83_85: 941.53,
    fy85_87: 1035.68,
    fy87_88: 1139.25
  },
  {
    sn: 3,
    activities: "TEU Container - 2-7 Days",
    unit: "Per Day",
    fy82_83: 427.97,
    fy83_85: 470.77,
    fy85_87: 517.85,
    fy87_88: 569.64
  },
  {
    sn: 4,
    activities: "TEU Container - 8 Days Onward",
    unit: "Per Day",
    fy82_83: 570.61,
    fy83_85: 627.67,
    fy85_87: 690.44,
    fy87_88: 759.48
  }
],
};
export const ICP_BIRATNAGAR_RAIL = {

  freightVehicleEntry: {
    title: "Freight Vehicle Entry Per Entry/Trip",
    data: [
      {
        sn: 1,
        activities: "Commercial Vehicle up to 10 ton",
        fy82_83: { vehicle: "161.05+", teu: "-", feu: "-" },
        fy83_85: { vehicle: "177.16+", teu: "-", feu: "-" },
        fy85_87: { vehicle: "194.87+", teu: "-", feu: "-" },
        fy87_88: { vehicle: "214.38+", teu: "-", feu: "-" }
      },
      {
        sn: 2,
        activities: "Commercial Vehicle above 10 ton",
        fy82_83: { vehicle: "322.10+", teu: "-", feu: "-" },
        fy83_85: { vehicle: "354.31+", teu: "-", feu: "-" },
        fy85_87: { vehicle: "389.74+", teu: "-", feu: "-" },
        fy87_88: { vehicle: "428.72+", teu: "-", feu: "-" }
      },
      {
        sn: 3,
        activities: "Light Vehicle / Bullock Cart up to 5 ton",
        fy82_83: { vehicle: 80.53, teu: "-", feu: "-" },
        fy83_85: { vehicle: 88.58, teu: "-", feu: "-" },
        fy85_87: { vehicle: 97.44, teu: "-", feu: "-" },
        fy87_88: { vehicle: 107.18, teu: "-", feu: "-" }
      },
      {
        sn: 4,
        activities: "Rickshaw / Hand trolley",
        fy82_83: { vehicle: 24.89, teu: "-", feu: "-" },
        fy83_85: { vehicle: 27.38, teu: "-", feu: "-" },
        fy85_87: { vehicle: 30.12, teu: "-", feu: "-" },
        fy87_88: { vehicle: 33.13, teu: "-", feu: "-" }
      }
    ]
  },

  loadingUnloadingCharges: {
    title: "Loading / Unloading / Stuffing / Destuffing",
    data: [
      {
        sn: 1,
        type: "Containerized cargo(TEU/FEU)",
        fy82_83: { vehicle: "-", teu: 2262.7, feu: 2662 },
        fy83_85: { vehicle: "-", teu: 2488.97, feu: 2928.2 },
        fy85_87: { vehicle: "-", teu: 2737.87, feu: 3221.02 },
        fy87_88: { vehicle: "-", teu: 3011.65, feu: 3543.12 }
      },
      {
        sn: 2,
        type: "Non-containerized break bulk / packaged bagged cargo",
        fy82_83: { vehicle: "298.14/ton", teu: "-", feu: "-" },
        fy83_85: { vehicle: "327.96/ton", teu: "-", feu: "-" },
        fy85_87: { vehicle: "360.75/ton", teu: "-", feu: "-" },
        fy87_88: { vehicle: "396.83/ton", teu: "-", feu: "-" }
      },
      {
        sn: 3,
        type: "Non-containerized bulk / loose cargo",
        fy82_83: { vehicle: "439.23/ton", teu: "-", feu: "-" },
        fy83_85: { vehicle: "483.15/ton", teu: "-", feu: "-" },
        fy85_87: { vehicle: "531.47/ton", teu: "-", feu: "-" },
        fy87_88: { vehicle: "584.61/ton", teu: "-", feu: "-" }
      }
    ]
  },

  // terminalHandlingCharges: {
  //   title: "Terminal Handling Charges",
  //   data: [
  //     {
  //       sn: 1,
  //       type: "Loaded container (complete cycle)",
  //       fy82_83: { vehicle: "-", teu: 4392.30, feu: 5929.61 },
  //       fy83_85: { vehicle: "0", teu: 4831.53, feu: 6522.57 },
  //       fy85_87: { vehicle: "-", teu: 5314.68, feu: 7174.82 },
  //       fy87_88: { vehicle: "-", teu: 5846.15, feu: 7892.30 }
  //     },
  //     {
  //       sn: 2,
  //       type: "Empty container (complete cycle)",
  //       fy82_83: { vehicle: "-", teu: 951.67, feu: 1464.10 },
  //       fy83_85: { vehicle: "0", teu: 1046.83, feu: 1610.51 },
  //       fy85_87: { vehicle: "-", teu: 1151.51, feu: 1771.56 },
  //       fy87_88: { vehicle: "-", teu: 1266.67, feu: 1948.72 }
  //     },
  //     {
  //       sn: 3,
  //       type: "Handling of LCL cargo",
  //       fy82_83: { vehicle: "-", teu: "366.03/ton", feu: "366.03/ton" },
  //       fy83_85: { vehicle: "-", teu: "402.63/ton", feu: "402.63/ton" },
  //       fy85_87: { vehicle: "-", teu: "442.89/ton", feu: "442.89/ton" },
  //       fy87_88: { vehicle: "-", teu: "487.18/ton", feu: "487.18/ton" }
  //     },
  //     {
  //       sn: 4,
  //       type: "Transfer of loaded container (survey)",
  //       fy82_83: { vehicle: "-", teu: 1464.10, feu: 1830.13 },
  //       fy83_85: { vehicle: "-", teu: 1610.51, feu: 2013.14 },
  //       fy85_87: { vehicle: "-", teu: 1771.56, feu: 2214.45 },
  //       fy87_88: { vehicle: "-", teu: 1948.72, feu: 2435.90 }
  //     },
  //     {
  //       sn: 5,
  //       type: "Transfer of empty container (survey)",
  //       fy82_83: { vehicle: "-", teu: 951.67, feu: 1464.10 },
  //       fy83_85: { vehicle: "-", teu: 1046.83, feu: 1610.51 },
  //       fy85_87: { vehicle: "-", teu: 1151.51, feu: 1771.56 },
  //       fy87_88: { vehicle: "-", teu: 1266.67, feu: 1948.72 }
  //     },
  //     {
  //       sn: 6,
  //       type: "Special charges for ODC",
  //       fy82_83: { vehicle: "-", teu: "25% additional", feu: "25% additional" },
  //       fy83_85: { vehicle: "-", teu: "25% additional", feu: "25% additional" },
  //       fy85_87: { vehicle: "-", teu: "25% additional", feu: "25% additional" },
  //       fy87_88: { vehicle: "-", teu: "25% additional", feu: "25% additional" }
  //     }
  //   ]
  // },
  terminalHandlingCharges: {
  title: "Terminal Handling Charges",
  data: [
    {
      sn: 1,
      type: "Loaded container (complete cycle) (TEU/FEU)",
      fy82_83: { vehicle: "-", teu: 4392.30, feu: 5929.61 },
      fy83_85: { vehicle: "0", teu: 4831.53, feu: 6522.57 },
      fy85_87: { vehicle: "-", teu: 5314.68, feu: 7174.82 },
      fy87_88: { vehicle: "-", teu: 5846.15, feu: 7892.30 }
    },
    {
      sn: 2,
      type: "Empty container (complete cycle) (TEU/FEU)",
      fy82_83: { vehicle: "-", teu: 951.67, feu: 1464.10 },
      fy83_85: { vehicle: "0", teu: 1046.83, feu: 1610.51 },
      fy85_87: { vehicle: "-", teu: 1151.51, feu: 1711.56 }, // fixed
      fy87_88: { vehicle: "-", teu: 1266.67, feu: 1948.72 }
    },
    {
      sn: 3,
      type: "Handling of LCL cargo (TEU/FEU)",
      fy82_83: { vehicle: "-", teu: "366.03/ton", feu: "366.03/ton" },
      fy83_85: { vehicle: "-", teu: "402.63/ton", feu: "402.63/ton" },
      fy85_87: { vehicle: "-", teu: "442.89/ton", feu: "442.89/ton" },
      fy87_88: { vehicle: "-", teu: "487.18/ton", feu: "487.18/ton" }
    },
    {
      sn: 4,
      type: "Transfer of loaded container (survey) (TEU/FEU)",
      fy82_83: { vehicle: "-", teu: 1464.10, feu: 1830.13 },
      fy83_85: { vehicle: "-", teu: 1610.51, feu: 2013.14 },
      fy85_87: { vehicle: "-", teu: 1771.56, feu: 2214.45 },
      fy87_88: { vehicle: "-", teu: 1948.72, feu: 2435.90 }
    },
    {
      sn: 5,
      type: "Transfer of empty container (survey) (TEU/FEU)",
      fy82_83: { vehicle: "-", teu: 951.67, feu: 1464.10 },
      fy83_85: { vehicle: "-", teu: 1046.83, feu: 1610.51 },
      fy85_87: { vehicle: "-", teu: 1151.51, feu: 1771.56 },
      fy87_88: { vehicle: "-", teu: 1266.67, feu: 1948.72 }
    },
    {
      sn: 6,
      type: "Special charges for ODC (TEU/FEU)",
      fy82_83: { vehicle: "-", teu: "25% additional", feu: "25% additional" },
      fy83_85: { vehicle: "-", teu: "25% additional", feu: "25% additional" },
      fy85_87: { vehicle: "-", teu: "25% additional", feu: "25% additional" },
      fy87_88: { vehicle: "-", teu: "25% additional", feu: "25% additional" }
    }
  ]
},

  weighmentCharges: {
    title: "Weighment Charges",
    data: [
      {
        sn: 1,
        activity: "Loaded / Empty vehicles (TEU/FEU)",
        fy82_83: { vehicle: 161.05, teu: 161.05, feu: 161.05 },
        fy83_85: { vehicle: 177.16, teu: 177.16, feu: 177.16 },
        fy85_87: { vehicle: 194.87, teu: 194.87, feu: 194.87 },
        fy87_88: { vehicle: 214.36, teu: 214.36, feu: 214.36 }
      }
    ]
  },

  warehousingCharges: {
    title: "Warehousing Charges (72 hours free)",
    data: [
      { category: "Imports 4-10 days", fy82_83: "10.25 paisa/kg/day", fy83_85: "11.27 paisa/kg/day", fy85_87: "12.40 paisa/kg/day", fy87_88: "13.64 paisa/kg/day" },
      { category: "Imports 11-30 days", fy82_83: "13.18 paisa/kg/day", fy83_85: "14.49 paisa/kg/day", fy85_87: "15.94 paisa/kg/day", fy87_88: "17.54 paisa/kg/day" },
      { category: "Imports 31 days onwards", fy82_83: "20.50 paisa/kg/day", fy83_85: "22.55 paisa/kg/day", fy85_87: "24.80 paisa/kg/day", fy87_88: "27.28 paisa/kg/day" },
      { category: "Exports 4-10 days", fy82_83: "5.86 paisa/kg/day", fy83_85: "6.44 paisa/kg/day", fy85_87: "7.09 paisa/kg/day", fy87_88: "7.79 paisa/kg/day" },
      { category: "Exports 11-30 days", fy82_83: "7.32 paisa/kg/day", fy83_85: "8.05 paisa/kg/day", fy85_87: "8.86 paisa/kg/day", fy87_88: "9.74 paisa/kg/day" },
      { category: "Exports 31 days onwards", fy82_83: "10.25 paisa/kg/day", fy83_85: "11.27 paisa/kg/day", fy85_87: "12.40 paisa/kg/day", fy87_88: "13.64 paisa/kg/day" }
    ]
  },

  openYardStorage: {
    title: "Open Yard Storage",
    data: [
      { category: "24 hours from entry", fy82_83: "Free", fy83_85: "Free", fy85_87: "Free", fy87_88: "Free" },
      { category: "2-7 days", fy82_83: "5.86 paisa/kg/day", fy83_85: "6.44 paisa/kg/day", fy85_87: "7.09 paisa/kg/day", fy87_88: "7.79 paisa/kg/day" },
      { category: "8 days onwards", fy82_83: "8.78 paisa/kg/day", fy83_85: "9.66 paisa/kg/day", fy85_87: "10.63 paisa/kg/day", fy87_88: "11.69 paisa/kg/day" }
    ]
  },

  parkingCharges: {
    title: "Parking & Storage Charges",
    data: [
      {
        type: "Freight Vehicles 2-7 days (TEU/FEU)",
        fy82_83: { vehicle: 241.58, teu: 241.58, feu: 322.10 },
        fy83_85: { vehicle: 265.73, teu: 265.73, feu: 354.31 },
        fy85_87: { vehicle: 292.31, teu: 292.31, feu: 389.74 },
        fy87_88: { vehicle: 321.53, teu: 321.53, feu: 428.72 }
      },
      {
        type: "Freight Vehicles 8 days onwards (TEU/FEU)",
        fy82_83: { vehicle: 322.10, teu: 322.10, feu: 483.15 },
        fy83_85: { vehicle: 354.31, teu: 354.31, feu: 531.47 },
        fy85_87: { vehicle: 389.74, teu: 389.74, feu: 584.62 },
        fy87_88: { vehicle: 428.72, teu: 428.72, feu: 643.08 }
      },
      {
        type: "Containers 2-7 days (TEU/FEU)",
        fy82_83: { vehicle: "Free", teu: 241.58, feu: 322.10 },
        fy83_85: { vehicle: "Free", teu: 265.73, feu: 354.31 },
        fy85_87: { vehicle: "Free", teu: 292.31, feu: 389.74 },
        fy87_88: { vehicle: "Free", teu: 321.54, feu: 428.72 }
      },
      {
        type: "Containers 8 days onwards (TEU/FEU)",
        fy82_83: { vehicle: "Free", teu: 322.10, feu: 483.15 },
        fy83_85: { vehicle: "Free", teu: 354.31, feu: 531.47 },
        fy85_87: { vehicle: "Free", teu: 389.74, feu: 584.62 },
        fy87_88: { vehicle: "Free", teu: 428.72, feu: 643.08 }
      }
    ]
  },

  subleaseCharges: {
    title: "Sublease Charges",
    data: [
      {
        sn: 1,
        type: "Unfurnished room",
        fy82_83: "Rs. 805.26/m²/month",
        fy83_85: "Rs. 885.78/m²/month",
        fy85_87: "Rs. 974.36/m²/month",
        fy87_88: "Rs. 1071.79/m²/month"
      }
    ]
  },

  railwayFreight: {
    title: "Railway Freight",
    data: [
      { type: "20' TEU", fy82_83: 585.64, fy83_85: 644.20, fy85_87: 708.62, fy87_88: 779.49 },
      { type: "40' FEU", fy82_83: 878.46, fy83_85: 966.31, fy85_87: 1062.94, fy87_88: 1169.23 },
      { type: "Break Bulk cargo (per ton)", fy82_83: 22.63, fy83_85: 24.89, fy85_87: 27.38, fy87_88: 30.12 },
      { type: "Bulk / loose cargo (per ton)", fy82_83: 17.30, fy83_85: 19.03, fy85_87: 20.94, fy87_88: 23.03 }
    ]
  }

};
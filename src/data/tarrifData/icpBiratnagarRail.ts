export const ICP_BIRATNAGAR_RAIL = {
  freightVehicleEntry: {
    title: "Freight Vehicle Entry Per Trip",
    data: [
      {
        sn: 1,
        activities: "Commercial Vehicle up to 10 ton",
        fy2082_83: { vehicle: 161.05 },
        fy2083_85: { vehicle: 177.16 },
        fy2085_87: { vehicle: 194.87 },
        fy2087_88: { vehicle: 214.38 }
      },
      {
        sn: 2,
        activities: "Commercial Vehicle above 10 ton",
        fy2082_83: { vehicle: 322.10 },
        fy2083_85: { vehicle: 354.31 },
        fy2085_87: { vehicle: 389.74 },
        fy2087_88: { vehicle: 428.72 }
      },
      {
        sn: 3,
        activities: "Light Vehicle / Bullock Cart (Up to 5 ton)",
        fy2082_83: { vehicle: 80.53 },
        fy2083_85: { vehicle: 88.58 },
        fy2085_87: { vehicle: 97.44 },
        fy2087_88: { vehicle: 107.18 }
      },
      {
        sn: 4,
        activities: "Rickshaw / Hand Trolley",
        fy2082_83: { vehicle: 24.86 },
        fy2083_85: { vehicle: 27.38 },
        fy2085_87: { vehicle: 30.12 },
        fy2087_88: { vehicle: 33.13 }
      }
    ]
  },

  loadingUnloadingCharges: {
    title: "Loading / Unloading / Stuffing / Destuffing",
    data: [
      {
        sn: 1,
        activities: "Containerized Cargo",
        fy2082_83: { teu: 2262.7, feu: 2662 },
        fy2083_85: { teu: 2488.97, feu: 2928.2 },
        fy2085_87: { teu: 2737.87, feu: 3221.02 },
        fy2087_88: { teu: 3011.65 }
      },
      {
        sn: 2,
        activities: "Break Bulk / Bagged Cargo (per ton)",
        fy2082_83: { vehicle: 298.14 },
        fy2083_85: { vehicle: 327.96 },
        fy2085_87: { vehicle: 360.75 },
        fy2087_88: { vehicle: 396.83 }
      },
      {
        sn: 3,
        activities: "Bulk / Loose Cargo (per ton)",
        fy2082_83: { vehicle: 439.23 },
        fy2083_85: { vehicle: 483.15 },
        fy2085_87: { vehicle: 531.47 },
        fy2087_88: { vehicle: 584.61 }
      }
    ]
  },

  terminalHandlingCharges: {
    title: "Terminal Handling Charges",
    data: [
      {
        sn: 1,
        activities: "Loaded Container (Complete Cycle)",
        fy2082_83: { teu: 4392.3, feu: 5929.61 },
        fy2083_85: { teu: 4831.53, feu: 6522.57 },
        fy2085_87: { teu: 5314.68, feu: 7174.82 },
        fy2087_88: { teu: 5846.15 }
      },
      {
        sn: 2,
        activities: "Empty Container (Complete Cycle)",
        fy2082_83: { teu: 951.67, feu: 1464.10 },
        fy2083_85: { teu: 1046.83, feu: 1610.51 },
        fy2085_87: { teu: 1151.51, feu: 1711.56 },
        fy2087_88: { teu: 1266.67 }
      },
      {
        sn: 3,
        activities: "Handling of LCL Cargo (per ton)",
        fy2082_83: { vehicle: 366.03 },
        fy2083_85: { vehicle: 402.63 },
        fy2085_87: { vehicle: 442.89 },
        fy2087_88: { vehicle: 457.18 }
      },
      {
        sn: 4,
        activities: "Transfer Loaded Container for Survey",
        fy2082_83: { teu: 1464.10, feu: 1830.13 },
        fy2083_85: { teu: 1610.51, feu: 2013.14 },
        fy2085_87: { teu: 1771.56, feu: 2214.45 },
        fy2087_88: { teu: 1948.72 }
      },
      {
        sn: 5,
        activities: "Transfer Empty Container for Survey",
        fy2082_83: { teu: 951.67, feu: 1464.10 },
        fy2083_85: { teu: 1046.83, feu: 1610.51 },
        fy2085_87: { teu: 1151.51, feu: 1771.56 },
        fy2087_88: { teu: 1266.67 }
      },
      {
        sn: 6,
        activities: "ODC Container",
        fy2082_83: { note: "25% additional" },
        fy2083_85: { note: "25% additional" },
        fy2085_87: { note: "25% additional" },
        fy2087_88: { note: "25% additional" }
      }
    ]
  },

  weighmentCharges: {
    title: "Weighment Charges",
    data: [
      {
        sn: 1,
        activities: "Loaded / Empty Vehicles",
        fy2082_83: { vehicle: 161.05, teu: 161.05, feu: 161.05 },
        fy2083_85: { vehicle: 177.16, teu: 177.16, feu: 177.16 },
        fy2085_87: { vehicle: 194.87, teu: 194.87, feu: 194.87 },
        fy2087_88: { vehicle: 214.36, teu: 214.36 }
      }
    ]
  }
};
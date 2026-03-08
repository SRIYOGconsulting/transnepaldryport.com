export const ICP_BIRATNAGAR_RAIL = {
  // Freight Vehicle Entry Charges
  freightVehicleEntry: {
    title: "Freight Vehicle Entry Per Entry/Trip",
    data: [
      { sn: 1, activities: "Commercial Vehicle up to 10 ton", fy82_83: 161.05, fy83_85: 177.16, fy85_87: 194.87, fy87_88: 214.38 },
      { sn: 2, activities: "Commercial Vehicle above 10 ton", fy82_83: 322.10, fy83_85: 354.31, fy85_87: 389.74, fy87_88: 428.72 },
      { sn: 3, activities: "Light Vehicle / Bullock Cart up to 5 ton", fy82_83: 80.53, fy83_85: 88.58, fy85_87: 97.44, fy87_88: 107.18 },
      { sn: 4, activities: "Rickshaw / Hand Trolley", fy82_83: 24.86, fy83_85: 27.38, fy85_87: 30.12, fy87_88: 33.13 }
    ]
  },

  // Loading / Unloading / Stuffing / Destuffing Charges
  loadingUnloadingCharges: {
    title: "Loading / Unloading / Stuffing / Destuffing (all activities)",
    data: [
      { sn: 1, type: "Containerized cargo", fy82_83: 2662, fy83_85: 2928.2, fy85_87: 3221.02, fy87_88: 3543.12 },
      { sn: 2, type: "Non-Containerized break bulk / packaged cargo", fy82_83: 298.14, fy83_85: 327.96, fy85_87: 360.75, fy87_88: 396.83 },
      { sn: 3, type: "Non-Containerized bulk / loose cargo", fy82_83: 439.23, fy83_85: 483.15, fy85_87: 531.47, fy87_88: 584.61 }
    ]
  },

  // Terminal Handling Charges
  terminalHandlingCharges: {
    title: "Terminal Handling Charges",
    data: [
      { sn: 1, type: "Loaded container (complete cycle of handling)", fy82_83: 4392.30, fy83_85: 4831.53, fy85_87: 5314.68, fy87_88: 5929.61 },
      { sn: 2, type: "Empty container (complete cycle of handling)", fy82_83: 951.67, fy83_85: 1046.83, fy85_87: 1151.51, fy87_88: 1464.10 },
      { sn: 3, type: "Handling of LCL cargo (including container handling/loading/unloading & stuffing/destuffing)", fy82_83: 366.03, fy83_85: 402.63, fy85_87: 442.89, fy87_88: 457.18 },
      { sn: 4, type: "Transfer of loaded container for survey and other purpose (one time operation)", fy82_83: 1464.10, fy83_85: 1610.51, fy85_87: 1771.56, fy87_88: 1830.13 },
      { sn: 5, type: "Transfer of Empty container for survey and other purposes (one time operation)", fy82_83: 951.67, fy83_85: 1046.83, fy85_87: 1151.51, fy87_88: 1464.10 },
      { sn: 6, type: "Special charges for over dimensional container (ODC)", rate: "25% additional" }
    ]
  },

  // Weighment Charges
  weighmentCharges: {
    title: "Weighment Charges (per activity of loaded/empty vehicles)",
    data: [
      { sn: 1, activity: "4-10 days", fy82_83: 161.05, fy83_85: 177.16, fy85_87: 194.87, fy87_88: 214.36 },
      { sn: 2, activity: "11-30 days", fy82_83: 161.05, fy83_85: 177.16, fy85_87: 194.87, fy87_88: 214.36 },
      { sn: 3, activity: "31 days onwards", fy82_83: 161.05, fy83_85: 177.16, fy85_87: 194.87, fy87_88: 214.36 }
    ]
  },

  // Open Yard Storage Charges
  openYardStorage: {
    title: "Open Yard Storage (per kg/day)",
    data: [
      { sn: 1, type: "Imports Freight Vehicles", "4-10 days": 8.78, "11-30 days": 5.86, "31 days onwards": 5.86 },
      { sn: 2, type: "Exports Freight Vehicles", "4-10 days": 7.32, "11-30 days": 10.25, "31 days onwards": 13.18 },
      { sn: 3, type: "Open yard storage 24 hours", rate: 20.50 },
      { sn: 4, type: "Open yard storage 2-7 days", rate: 10.25 },
      { sn: 5, type: "Open yard storage 8 days onwards", rate: 10.25 }
    ]
  },

  // Warehousing Charges
  warehousingCharges: {
    title: "Warehousing Charges (per container/day)",
    data: [
      { sn: 1, type: "CFS/Goods Shed 72 hours free", fy82_83: 241.58, fy83_85: 322.10, fy85_87: 354.31, fy87_88: 389.74 },
      { sn: 2, type: "Containers 24 hours free", fy82_83: 0, fy83_85: 0, fy85_87: 0, fy87_88: 0 },
      { sn: 3, type: "Containers 2-7 days", fy82_83: 0, fy83_85: 292.31, fy85_87: 321.53, fy87_88: 428.72 },
      { sn: 4, type: "Containers 8 days onwards", fy82_83: 322.10, fy83_85: 389.74, fy85_87: 531.47, fy87_88: 584.62 }
    ]
  },

  // Sublease Charges
  subleaseCharges: {
    title: "Sublease Charges (unfurnished room on main terminal building)",
    data: [
      { sn: 1, type: "Room rent", fy82_83: 0.0, fy83_85: 0.0, fy85_87: 241.58, fy87_88: 322.10, rate: "Rs. 805.26/m2 per month" }
    ]
  },

  // Railway Freight Charges
  railwayFreight: {
    title: "Railway Freight to and from ICD to international border",
    data: [
      { sn: 1, type: "20' TEU", fy82_83: 585.64, fy83_85: 644.20, fy85_87: 708.62, fy87_88: 779.49 },
      { sn: 2, type: "40' FEU", fy82_83: 878.46, fy83_85: 966.31, fy85_87: 1062.94, fy87_88: 1169.23 },
      { sn: 3, type: "Break Bulk cargo", fy82_83: 22.63, fy83_85: 24.89, fy85_87: 27.38, fy87_88: 30.12 },
      { sn: 4, type: "Bulk cargo / Loose cargo", fy82_83: 17.30, fy83_85: 19.03, fy85_87: 20.94, fy87_88: 23.03 }
    ]
  }
};
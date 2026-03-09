export const ICP_BIRATNAGAR_ROAD = {

  vehicleEntryCharges: {
    title: "Freight Vehicle Entry",
    data: [
      { sn: "a", activities: "Truck / Tanker / Tractor / Trailer", unit: "Per Entry Per Trip", fy82_83: 285.33, fy83_85: 313.86, fy85_87: 345.25, fy87_88: 379.78 },
      { sn: "b", activities: "Light Vehicles / Bullock Cart (Up to 5 Ton)", unit: "Per Entry Per Trip", fy82_83: 142.66, fy83_85: 156.93, fy85_87: 172.62, fy87_88: 189.88 },
      { sn: "c", activities: "Hand Trolley", unit: "Per Entry Per Trip", fy82_83: 42.83, fy83_85: 47.11, fy85_87: 51.82, fy87_88: 57.0 },
      { sn: "d", activities: "Container Truck (Fixed Container Vehicle)", unit: "Per Entry Per Trip", fy82_83: 427.97, fy83_85: 470.77, fy85_87: 517.85, fy87_88: 569.64 },
      { sn: "e", activities: "TEU", unit: "Per Entry Per Trip", fy82_83: 570.61, fy83_85: 627.67, fy85_87: 690.44, fy87_88: 759.48 },
      { sn: "f", activities: "FEU", unit: "Per Entry Per Trip", fy82_83: 855.94, fy83_85: 941.53, fy85_87: 1035.68, fy87_88: 1139.25 }
    ]
  },

  cargoHandlingCharges: {
    title: "Loading / Unloading / Handling of Cargo",
    data: [
      { sn: "a", activities: "TEU", unit: "Per Vehicle", fy82_83: 2853.13, fy83_85: 3138.44, fy85_87: 3452.28, fy87_88: 3797.51 },
      { sn: "b", activities: "FEU", unit: "Per Vehicle", fy82_83: 5135.61, fy83_85: 5649.17, fy85_87: 6214.09, fy87_88: 6835.50 },
      { sn: "i", activities: "Containerized Cargo", unit: "Per MT", fy82_83: 199.73, fy83_85: 219.70, fy85_87: 241.67, fy87_88: 265.84 },
      { sn: "ii", activities: "Non Containerized Break Bulk Cargo", unit: "Per MT", fy82_83: 199.73, fy83_85: 219.70, fy85_87: 241.67, fy87_88: 265.84 },
      { sn: "iii", activities: "Non Containerized Bulk / Loose Cargo", unit: "Per MT", fy82_83: 142.66, fy83_85: 156.93, fy85_87: 172.62, fy87_88: 189.88 }
    ]
  },

  terminalHandlingCharges: {
    title: "Terminal Handling Charges",
    data: [
      { sn: "a-i", activities: "Loaded Container (TEU)", unit: "Complete Cycle", fy82_83: 2853.13, fy83_85: 3138.44, fy85_87: 3452.28, fy87_88: 3797.51 },
      { sn: "a-ii", activities: "Loaded Container (FEU)", unit: "Complete Cycle", fy82_83: 4565.00, fy83_85: 5021.50, fy85_87: 5523.65, fy87_88: 6076.02 },
      { sn: "b-i", activities: "Empty Container (TEU)", unit: "Complete Cycle", fy82_83: 1426.58, fy83_85: 1569.24, fy85_87: 1726.16, fy87_88: 1898.78 },
      { sn: "b-ii", activities: "Empty Container (FEU)", unit: "Complete Cycle", fy82_83: 2282.51, fy83_85: 2510.76, fy85_87: 2761.84, fy87_88: 3038.02 },
      { sn: "c", activities: "LCL Cargo", unit: "Per MT", fy82_83: 570.61, fy83_85: 627.67, fy85_87: 690.44, fy87_88: 759.48 }
    ]
  },

  forkliftCharges: {
    title: "Forklift Charges",
    data: [
      { sn: "a-i", activities: "Complete Cycle (TEU)", unit: "Per Vehicle", fy82_83: 4251.74, fy83_85: 4676.91, fy85_87: 5144.60, fy87_88: 5659.06 },
      { sn: "a-ii", activities: "Complete Cycle (FEU)", unit: "Per Vehicle", fy82_83: 8503.50, fy83_85: 9353.85, fy85_87: 10289.24, fy87_88: 11318.16 },
      { sn: "b-i", activities: "Single Cycle (TEU)", unit: "Per Vehicle", fy82_83: 2215.18, fy83_85: 2436.70, fy85_87: 2680.37, fy87_88: 2948.41 },
      { sn: "b-ii", activities: "Single Cycle (FEU)", unit: "Per Vehicle", fy82_83: 4428.91, fy83_85: 4871.80, fy85_87: 5358.97, fy87_88: 5894.88 },
      { sn: "c", activities: "Non Containerized", unit: "Per MT", fy82_83: 266.46, fy83_85: 293.11, fy85_87: 322.42, fy87_88: 354.66 }
    ]
  },

  weighmentCharges: {
    title: "Weighment Charges",
    data: [
      { sn: 1, activities: "Weighment Charge", unit: "Per Event", fy82_83: 285.33, fy83_85: 313.86, fy85_87: 345.25, fy87_88: 379.78 }
    ]
  },

  cleaningCharges: {
    title: "Cleaning of Containers",
    data: [
      { sn: "a", activities: "TEU", unit: "Per Event", fy82_83: 285.33, fy83_85: 313.86, fy85_87: 345.25, fy87_88: 379.78 },
      { sn: "b", activities: "FEU", unit: "Per Event", fy82_83: 427.97, fy83_85: 470.77, fy85_87: 517.85, fy87_88: 569.64 }
    ]
  },

  warehousingImports: {
    title: "Warehousing Charges - Import",
    data: [
      { sn: "i", activities: "Up to 24 hrs", unit: "Per KG Per Day", fy82_83: "Free", fy83_85: "Free", fy85_87: "Free", fy87_88: "Free" },
      { sn: "ii", activities: "2-8 Days", unit: "Per KG Per Day", fy82_83: 0.17, fy83_85: 0.19, fy85_87: 0.21, fy87_88: 0.23 },
      { sn: "iii", activities: "9-30 Days", unit: "Per KG Per Day", fy82_83: 0.23, fy83_85: 0.25, fy85_87: 0.28, fy87_88: 0.31 },
      { sn: "iv", activities: "31 Days onward", unit: "Per KG Per Day", fy82_83: 0.34, fy83_85: 0.37, fy85_87: 0.41, fy87_88: 0.45 }
    ]
  },

  warehousingExports: {
    title: "Warehousing Charges - Export",
    data: [
      { sn: "i", activities: "Up to 24 hrs", unit: "Per KG Per Day", fy82_83: "Free", fy83_85: "Free", fy85_87: "Free", fy87_88: "Free" },
      { sn: "ii", activities: "2-8 Days", unit: "Per KG Per Day", fy82_83: 0.09, fy83_85: 0.10, fy85_87: 0.11, fy87_88: 0.12 },
      { sn: "iii", activities: "9-30 Days", unit: "Per KG Per Day", fy82_83: 0.11, fy83_85: 0.12, fy85_87: 0.13, fy87_88: 0.14 },
      { sn: "iv", activities: "31 Days onward", unit: "Per KG Per Day", fy82_83: 0.14, fy83_85: 0.15, fy85_87: 0.17, fy87_88: 0.19 }
    ]
  },

  openYardStorage: {
    title: "Open Yard Storage",
    data: [
      { sn: "i", activities: "Up to 24 hrs", unit: "Per KG Per Day", fy82_83: "Free", fy83_85: "Free", fy85_87: "Free", fy87_88: "Free" },
      { sn: "ii", activities: "2-8 Days", unit: "Per KG Per Day", fy82_83: 0.09, fy83_85: 0.10, fy85_87: 0.11, fy87_88: 0.12 },
      { sn: "iii", activities: "9 Days onward", unit: "Per KG Per Day", fy82_83: 0.14, fy83_85: 0.15, fy85_87: 0.17, fy87_88: 0.19 }
    ]
  },

  parkingFreightVehicles: {
    title: "Parking & Storage Charges for Vehicles",
    data: [
      { sn: "FEU 2-7 Days", activities: "Parking Charge", unit: "Per Day", fy82_83: 570.61, fy83_85: 627.67, fy85_87: 690.44, fy87_88: 759.48 },
      { sn: "FEU 8 Days onward", activities: "Parking Charge", unit: "Per Day", fy82_83: 855.94, fy83_85: 941.53, fy85_87: 1035.68, fy87_88: 1139.25 }
    ]
  },

  parkingContainers: {
    title: "Parking & Storage Charges for Containers",
    data: [
      { sn: "TEU 2-7 Days", activities: "Parking Charge", unit: "Per Day", fy82_83: 427.97, fy83_85: 470.77, fy85_87: 517.85, fy87_88: 569.64 },
      { sn: "TEU 8 Days onward", activities: "Parking Charge", unit: "Per Day", fy82_83: 570.61, fy83_85: 627.67, fy85_87: 690.44, fy87_88: 759.48 }
    ]
  },

  subLeaseCharges: {
    title: "Sublease Charges",
    data: [
      { sn: 1, activities: "Unfurnished Room inside ICP Premises", unit: "Per m² Per Month", fy82_83: 1071, fy83_85: 1071, fy85_87: 1071, fy87_88: 1071 }
    ]
  }

};
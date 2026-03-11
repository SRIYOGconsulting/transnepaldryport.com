export const ICD_TATOPANI = {
  freightEntryCharges: [
    { sn: 1, activities: "Truck / Tanker / Tractor / Trailer", unit: "Per Entry Per Trip", fy79_81: 259.39, fy81_83: 285.33, fy83_85: 313.86 },
    { sn: 2, activities: "Light Vehicles / Bullock Cart (Up to 5 Ton)", unit: "Per Entry Per Trip", fy79_81: 129.69, fy81_83: 142.66, fy83_85: 156.93 },
    { sn: 3, activities: "Hand Trolley", unit: "Per Entry Per Trip", fy79_81: 38.94, fy81_83: 42.83, fy83_85: 47.11 },
    { sn: 4, activities: "Container Truck (Fixed Container Vehicle)", unit: "Per Entry Per Trip", fy79_81: 389.06, fy81_83: 427.97, fy83_85: 470.77 },
    { sn: 5, activities: "TEU", unit: "Per Entry Per Trip", fy79_81: 518.74, fy81_83: 570.61, fy83_85: 627.67 },
    { sn: 6, activities: "FEU", unit: "Per Entry Per Trip", fy79_81: 778.13, fy81_83: 855.94, fy83_85: 941.53 }
  ],

  cargoHandlingCharges: [
    { sn: 1, activities: "TEU (Per Vehicle)", unit: "Per Vehicle", fy79_81: 4000, fy81_83: 4400, fy83_85: 4840 },
    { sn: 2, activities: "FEU (Per Vehicle)", unit: "Per Vehicle", fy79_81: 6000, fy81_83: 6600, fy83_85: 7260 },
    { sn: 3, activities: "Containerized Cargo", unit: "Per MT", fy79_81: 250, fy81_83: 275, fy83_85: 302.5 },
    { sn: 4, activities: "Break Bulk / Packaged / Bagged Cargo", unit: "Per MT", fy79_81: 250, fy81_83: 275, fy83_85: 302.5 },
    { sn: 5, activities: "Bulk / Loose Cargo", unit: "Per MT", fy79_81: 129.69, fy81_83: 142.66, fy83_85: 156.93 }
  ],

  terminalHandlingCharges: [
    { sn: 1, activities: "Loaded Container TEU", unit: "Complete Cycle", fy79_81: 2593.75, fy81_83: 2853.13, fy83_85: 3138.44 },
    { sn: 2, activities: "Loaded Container FEU", unit: "Complete Cycle", fy79_81: 4150, fy81_83: 4565, fy83_85: 5021.5 },
    { sn: 3, activities: "Empty Container TEU", unit: "Complete Cycle", fy79_81: 1296.89, fy81_83: 1426.58, fy83_85: 1569.24 },
    { sn: 4, activities: "Empty Container FEU", unit: "Complete Cycle", fy79_81: 2075.01, fy81_83: 2282.51, fy83_85: 2510.76 },
    { sn: 5, activities: "LCL Cargo", unit: "Per MT", fy79_81: 518.74, fy81_83: 570.61, fy83_85: 627.67 }
  ],

  weighmentCharges: [
    { sn: 1, activities: "Weighment Charge (Per Event)", unit: "Per Event", fy79_81: 259.39, fy81_83: 285.33, fy83_85: 313.86 }
  ],

  warehousingChargesImport: [
    { sn: 1, activities: "Up to 24 hrs upon arrival", unit: "Per KG Per Day", fy79_81: "Free", fy81_83: "Free", fy83_85: "Free" },
    { sn: 2, activities: "2-8 Days", unit: "Per KG Per Day", fy79_81: 0.16, fy81_83: 0.17, fy83_85: 0.19 },
    { sn: 3, activities: "9-30 Days", unit: "Per KG Per Day", fy79_81: 0.21, fy81_83: 0.23, fy83_85: 0.25 },
    { sn: 4, activities: "31 Days Onward", unit: "Per KG Per Day", fy79_81: 0.31, fy81_83: 0.34, fy83_85: 0.38 }
  ],

  warehousingChargesExport: [
    { sn: 1, activities: "Up to 24 hrs upon arrival", unit: "Per KG Per Day", fy79_81: "Free", fy81_83: "Free", fy83_85: "Free" },
    { sn: 2, activities: "2-8 Days", unit: "Per KG Per Day", fy79_81: 0.08, fy81_83: 0.09, fy83_85: 0.09 },
    { sn: 3, activities: "9-30 Days", unit: "Per KG Per Day", fy79_81: 0.10, fy81_83: 0.11, fy83_85: 0.13 },
    { sn: 4, activities: "31 Days Onward", unit: "Per KG Per Day", fy79_81: 0.13, fy81_83: 0.14, fy83_85: 0.16 }
  ],

  openYardStorage: [
    { sn: 1, activities: "Up to 24 hrs upon arrival", unit: "Per KG Per Day", fy79_81: "Free", fy81_83: "Free", fy83_85: "Free" },
    { sn: 2, activities: "2-8 Days", unit: "Per KG Per Day", fy79_81: 0.08, fy81_83: 0.09, fy83_85: 0.09 },
    { sn: 3, activities: "9 Days Onward", unit: "Per KG Per Day", fy79_81: 0.13, fy81_83: 0.14, fy83_85: 0.16 }
  ],

  vehicleParkingCharges: [
    { sn: 1, activities: "FEU Up to 24 hrs", unit: "Per Day", fy79_81: "Free", fy81_83: "Free", fy83_85: "Free" },
    { sn: 2, activities: "FEU 2-7 Days", unit: "Per Day", fy79_81: 518.74, fy81_83: 570.61, fy83_85: 627.67 },
    { sn: 3, activities: "FEU 8 Days Onward", unit: "Per Day", fy79_81: 778.13, fy81_83: 855.94, fy83_85: 941.53 },
    { sn: 4, activities: "Other Vehicles Up to 24 hrs", unit: "Per Day", fy79_81: "Free", fy81_83: "Free", fy83_85: "Free" },
    { sn: 5, activities: "Other Vehicles 2-7 Days", unit: "Per Day", fy79_81: 389.06, fy81_83: 427.97, fy83_85: 470.77 },
    { sn: 6, activities: "Other Vehicles 8 Days Onward", unit: "Per Day", fy79_81: 518.74, fy81_83: 570.61, fy83_85: 627.67 }
  ],

  containerParkingCharges: [
    { sn: 1, activities: "FEU Up to 24 hrs", unit: "Per Day", fy79_81: "Free", fy81_83: "Free", fy83_85: "Free" },
    { sn: 2, activities: "FEU 2-7 Days", unit: "Per Day", fy79_81: 518.74, fy81_83: 570.61, fy83_85: 627.67 },
    { sn: 3, activities: "FEU 8 Days Onward", unit: "Per Day", fy79_81: 778.13, fy81_83: 855.94, fy83_85: 941.53 },
    { sn: 4, activities: "TEU Up to 24 hrs", unit: "Per Day", fy79_81: "Free", fy81_83: "Free", fy83_85: "Free" },
    { sn: 5, activities: "TEU 2-7 Days", unit: "Per Day", fy79_81: 389.06, fy81_83: 427.97, fy83_85: 470.77 },
    { sn: 6, activities: "TEU 8 Days Onward", unit: "Per Day", fy79_81: 518.74, fy81_83: 570.61, fy83_85: 627.67 }
  ],

  containerCleaningCharges: [
    { sn: 1, activities: "TEU (Per Event)", unit: "Per Event", fy79_81: 259.39, fy81_83: 285.33, fy83_85: 313.86 },
    { sn: 2, activities: "FEU (Per Event)", unit: "Per Event", fy79_81: 389.06, fy81_83: 427.97, fy83_85: 470.77 }
  ],

  forkliftCharges: [
    { sn: 1, activities: "Complete Cycle TEU", unit: "Per Vehicle", fy79_81: 3865.22, fy81_83: 4251.74, fy83_85: 4676.91 },
    { sn: 2, activities: "Complete Cycle FEU", unit: "Per Vehicle", fy79_81: 7730.45, fy81_83: 8503.5, fy83_85: 9353.85 },
    { sn: 3, activities: "Single Cycle TEU", unit: "Per Vehicle", fy79_81: 2013.8, fy81_83: 2215.18, fy83_85: 2436.7 },
    { sn: 4, activities: "Single Cycle FEU", unit: "Per Vehicle", fy79_81: 4026.28, fy81_83: 4428.91, fy83_85: 4871.8 },
    { sn: 5, activities: "Non-containerized (Per MT)", unit: "Per MT", fy79_81: 242.24, fy81_83: 266.46, fy83_85: 293.11 }
  ],

  subleaseCharges: [
    { sn: 1, activities: "Unfurnished room inside ICD premises", unit: "Per m² Per Month", rateFy79_81: 665.50, rateFy81_83: 732.05, rateFy83_85: 805.26 }
  ]
};
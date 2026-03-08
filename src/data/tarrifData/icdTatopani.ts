export const ICD_TATOPANI = {
    freightEntryCharges: [
        {
            sn: 1,
            activities: 'Truck / Tanker / Tractor / Trailor',
            vehicle: 259.39
        },
        {
            sn: 2,
            activities: 'Light Vehicles / Bullock Cart (Up to 5 Ton)',
            vehicle: 129.69
        },
        { sn: 3, activities: 'Rickshaw / Hand Trolley', vehicle: 38.94 },
        {
            sn: 4,
            activities: 'Container Truck (Fixed Container)',
            vehicle: 389.06
        },
        {
            sn: 5,
            activities: 'Trailor / Flat Truck / Articulated Vehicles',
            teu: 518.74,
            feu: 778.13
        }
    ],

    cargoHandlingCharges: [
        { sn: 1, activities: 'All Activities', teu: 2593.75, feu: 4668.74 },
        { sn: 2, activities: 'Containerized Cargo', vehicle: 181.57 },
        {
            sn: 3,
            activities: 'Non-Containerized Break Bulk (Packaged/Bagged)',
            vehicle: 181.57
        },
        {
            sn: 4,
            activities: 'Non-Containerized Bulk Loose Cargo',
            vehicle: 129.69
        }
    ],

    terminalHandlingCharges: [
        { sn: 1, activities: 'Loaded Container', teu: 2593.75, feu: 4150.0 },
        { sn: 2, activities: 'Unloaded Container', teu: 1296.89, feu: 2075.01 },
        { sn: 3, activities: 'LCL Cargo', vehicle: 518.74 }
    ],

    weighmentCharges: [
        { sn: 1, activities: 'Weighment Charge', vehicle: 259.39 }
    ],

    warehousingCharges: [
        { sn: 1, activities: 'Imports (Days 2 to 8)', vehicle: 0.16 },
        { sn: 2, activities: 'Imports (Days 9 to 30)', vehicle: 0.21 },
        { sn: 3, activities: 'Imports (Day 31 Onwards)', vehicle: 0.31 },
        { sn: 4, activities: 'Exports (Days 2 to 8)', vehicle: 0.08 },
        { sn: 5, activities: 'Exports (Days 9 to 30)', vehicle: 0.1 },
        { sn: 6, activities: 'Exports (Day 31 Onwards)', vehicle: 0.13 },
        { sn: 7, activities: 'Open Yard Storage (Days 2 to 8)', vehicle: 0.08 },
        {
            sn: 8,
            activities: 'Open Yard Storage (Day 9 Onwards)',
            vehicle: 0.13
        }
    ],

    parkingStorageCharges: [
        {
            sn: 1,
            activities: 'Freight Vehicle Parking (Days 2 to 7)',
            vehicle: 389.06,
            teu: 518.74
        },
        {
            sn: 2,
            activities: 'Freight Vehicle Parking (Day 8 Onwards)',
            vehicle: 518.74,
            teu: 518.74,
            feu: 778.13
        },
        {
            sn: 3,
            activities: 'Container Parking (Days 2 to 7)',
            teu: 389.06,
            feu: 518.74
        },
        {
            sn: 4,
            activities: 'Container Parking (Day 8 Onwards)',
            teu: 518.74,
            feu: 778.13
        }
    ],

    cleaningAndForkliftCharges: [
        { sn: 1, activities: 'Cleaning Container (TEU)', teu: 259.39 },
        { sn: 2, activities: 'Cleaning Container (FEU)', feu: 389.06 },
        {
            sn: 3,
            activities: 'Forklift Complete Cycle',
            teu: 3865.22,
            feu: 7730.45
        },
        {
            sn: 4,
            activities: 'Forklift Single Cycle',
            teu: 2013.8,
            feu: 4026.28
        },
        {
            sn: 5,
            activities: 'Forklift (Non-Containerized Per Ton)',
            vehicle: 242.42
        }
    ],

    subLeaseCharges: [
        {
            sn: 1,
            activities:
                'Sub Lease - Unfurnished Room (Main Terminal) per m²/month',
            vehicle: 1071.81
        }
    ]
};

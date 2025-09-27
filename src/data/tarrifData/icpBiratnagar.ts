export const ICP_BIRATNAGAR = {
    freightEntryCharges: [
        {
            sn: 1,
            activities: 'Truck / Tanker / Tractor / Trailor',
            vehicle: 259.31
        },
        {
            sn: 2,
            activities: 'Light Vehicles, Bullock Cart (Up to 5 Ton)',
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
            activities: 'Trailor / Flat Truck / Articulated',
            teu: 518.64,
            feu: 778.13
        }
    ],

    cargoHandlingCharges: [
        { sn: 1, activities: 'All Activities', teu: 2593.75, feu: 4668.74 },
        { sn: 2, activities: 'Containerized Cargo', vehicle: 181.57 },
        {
            sn: 3,
            activities: 'Non-Containerized (Break Bulk, Bagged)',
            vehicle: 181.57
        },
        {
            sn: 4,
            activities: 'Non-Containerized (Bulk Loose)',
            vehicle: 129.69
        },
        {
            sn: 5,
            activities: 'Terminal Handling - Loaded Container',
            teu: 2593.75,
            feu: 4150
        },
        {
            sn: 6,
            activities: 'Terminal Handling - Unloaded Container',
            teu: 1296.89,
            feu: 2075.01
        },
        { sn: 7, activities: 'Terminal Handling - LCL Cargo', vehicle: 518.74 },
        { sn: 8, activities: 'Weighment Charge', vehicle: 259.39 }
    ],

    warehousingChargesImports: [
        { sn: 1, activities: 'Day 2 to 8', vehicle: 0.16 },
        { sn: 2, activities: 'Day 9 to 30', vehicle: 0.21 },
        { sn: 3, activities: 'Day 31 onwards', vehicle: 0.31 }
    ],

    warehousingChargesExports: [
        { sn: 1, activities: 'Day 2 to 8', vehicle: 0.08 },
        { sn: 2, activities: 'Day 9 to 30', vehicle: 0.1 },
        { sn: 3, activities: 'Day 31 onwards', vehicle: 0.13 }
    ],

    warehousingOpenYardStorage: [
        { sn: 1, activities: 'Day 2 to 8', vehicle: 0.08 },
        { sn: 2, activities: 'Day 9 onwards', vehicle: 0.13 }
    ],

    parkingStorageFreightVehicle: [
        { sn: 1, activities: 'Day 2 to 7', vehicle: 389.06, teu: 518.74 },
        {
            sn: 2,
            activities: 'Day 8 onwards',
            vehicle: 518.74,
            teu: 518.74,
            feu: 778.13
        }
    ],

    parkingStorageContainer: [
        { sn: 1, activities: 'Day 2 to 7', teu: 389.06, feu: 518.74 },
        { sn: 2, activities: 'Day 8 onwards', teu: 518.74, feu: 778.13 }
    ],

    cleaningOfContainers: [
        { sn: 1, activities: 'Cleaning of TEU', teu: 259.39 },
        { sn: 2, activities: 'Cleaning of FEU', feu: 389.06 }
    ],

    subLeaseCharges: [
        {
            sn: 1,
            activities: 'Unfurnished Room (Per m²/month)',
            vehicle: 1071.81
        }
    ],

    forkliftCharges: [
        { sn: 1, activities: 'Complete Cycle', teu: 3865.22, feu: 7730.45 },
        { sn: 2, activities: 'Single Cycle', teu: 2013.8, feu: 4026.28 },
        { sn: 3, activities: 'Non-containerised Per Ton', vehicle: 242.42 }
    ],

    railHandlingChargesImport: [
        { sn: 1, activities: 'Factory Destuffing', teu: 7054.3, feu: 9716.3 },
        { sn: 2, activities: 'ICP Destuffing', teu: 9111.3, feu: 12136.3 },
        { sn: 3, activities: 'Warehouse Delivery', teu: 9111.3, feu: 12136.3 }
    ],

    railHandlingChargesExport: [
        { sn: 1, activities: 'Factory Destuffing', teu: 7054.3, feu: 9716.3 },
        { sn: 2, activities: 'ICP Destuffing', teu: 9111.3, feu: 12136.3 },
        { sn: 3, activities: 'Warehouse Delivery', teu: 9111.3, feu: 12136.3 }
    ],

    railHandlingBreakup: [
        {
            sn: 1,
            activities: 'Loaded Container Handling',
            teu: 3993,
            feu: 5390.55
        },
        {
            sn: 2,
            activities: 'Empty Container Handling',
            teu: 865.15,
            feu: 1331
        },
        {
            sn: 3,
            activities: 'Transfer Empty Container + Survey',
            teu: 1331,
            feu: 1663.75
        },
        {
            sn: 4,
            activities: 'Transfer Loaded Container + Survey',
            teu: 865.15,
            feu: 1311
        },
        { sn: 5, activities: 'Labour Charge', teu: 2057, feu: 2420 },
        {
            sn: 6,
            activities: 'Total Terminal Handling Charges',
            teu: 7054.3,
            feu: 9716.3
        },
        { sn: 7, activities: 'ICP Destuffing Total', teu: 9111.3, feu: 12136.3 }
    ],

    railHandlingBulkCargo: [
        {
            sn: 1,
            activities: 'Bagged / Break Bulk Cargo (per MT)',
            vehicle: 271.04
        },
        { sn: 2, activities: 'Bulk Loose Cargo (per MT)', vehicle: 399.3 }
    ]
};

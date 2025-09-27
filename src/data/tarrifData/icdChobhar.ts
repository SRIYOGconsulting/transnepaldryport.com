export const ICD_CHOBHAR = {
    // VEHICLE ENTRY CHARGES
    vehicleEntryCharges: {
        title: 'Vehicle Entry Charges',
        data: [
            {
                sn: 1,
                activities: 'Container Vehicle Entry (International)',
                'Fy 2080/081 & 2081/082': 'Free',
                'Fy 2082/083 & 2083/084': 'Free',
                'Fy 2084/085 & 2085/086': 'Free'
            },
            {
                sn: 2,
                activities:
                    'Freight Vehicle Entry - Commercial above 10 ton (Single)',
                'Fy 2080/081 & 2081/082': '133',
                'Fy 2082/083 & 2083/084': '146.30',
                'Fy 2084/085 & 2085/086': '160.93'
            },
            {
                sn: 3,
                activities:
                    'Freight Vehicle Entry - Commercial above 10 ton (Double)',
                'Fy 2080/081 & 2081/082': '266',
                'Fy 2082/083 & 2083/084': '292.60',
                'Fy 2084/085 & 2085/086': '321.86'
            },
            {
                sn: 4,
                activities: 'Freight Vehicle Entry - Light Vehicle up to 5 ton',
                'Fy 2080/081 & 2081/082': '118',
                'Fy 2082/083 & 2083/084': '129.80',
                'Fy 2084/085 & 2085/086': '142.78'
            },
            {
                sn: 5,
                activities: 'Container Vehicle Entry (Domestic)',
                'Fy 2080/081 & 2081/082': 'Free',
                'Fy 2082/083 & 2083/084': 'Free',
                'Fy 2084/085 & 2085/086': 'Free'
            },
            {
                sn: 6,
                activities: 'Freight Vehicle Entry - All Types (Domestic)',
                'Fy 2080/081 & 2081/082': 'Free',
                'Fy 2082/083 & 2083/084': 'Free',
                'Fy 2084/085 & 2085/086': 'Free'
            }
        ]
    },

    // LOADING/UNLOADING CHARGES
    loadingUnloadingCharges: {
        title: 'Loading/Unloading Charges',
        data: [
            {
                sn: 1,
                activities: 'Containerized Cargo - Per TEU',
                'Fy 2080/081 & 2081/082': '4,000',
                'Fy 2082/083 & 2083/084': '4,400',
                'Fy 2084/085 & 2085/086': '4,840'
            },
            {
                sn: 2,
                activities: 'Containerized Cargo - Per FEU',
                'Fy 2080/081 & 2081/082': '6,000',
                'Fy 2082/083 & 2083/084': '6,600',
                'Fy 2084/085 & 2085/086': '7,260'
            },
            {
                sn: 3,
                activities: 'Non-Containerized Cargo - Per Ton',
                'Fy 2080/081 & 2081/082': '360',
                'Fy 2082/083 & 2083/084': '396',
                'Fy 2084/085 & 2085/086': '435.60'
            }
        ]
    },

    // TERMINAL HANDLING CHARGES - LOADED CONTAINER
    terminalHandlingLoaded: {
        title: 'Terminal Handling Charges - Loaded Container',
        data: [
            {
                sn: 1,
                activities: 'Loaded Container - TEU',
                'Fy 2080/081 & 2081/082': '1,815',
                'Fy 2082/083 & 2083/084': '1,996.50',
                'Fy 2084/085 & 2085/086': '2,196.15'
            },
            {
                sn: 2,
                activities: 'Loaded Container - FEU',
                'Fy 2080/081 & 2081/082': '2,450',
                'Fy 2082/083 & 2083/084': '2,695',
                'Fy 2084/085 & 2085/086': '2,964.50'
            },
            {
                sn: 3,
                activities: 'Empty Container - TEU',
                'Fy 2080/081 & 2081/082': '394',
                'Fy 2082/083 & 2083/084': '433.40',
                'Fy 2084/085 & 2085/086': '476.74'
            },
            {
                sn: 4,
                activities: 'Empty Container - FEU',
                'Fy 2080/081 & 2081/082': '605',
                'Fy 2082/083 & 2083/084': '665.50',
                'Fy 2084/085 & 2085/086': '732.05'
            }
        ]
    },

    // TERMINAL HANDLING CHARGES - ADDITIONAL SERVICES
    terminalHandlingAdditional: {
        title: 'Terminal Handling Charges - Additional Services',
        data: [
            {
                sn: 1,
                activities: 'LCL Cargo Handling - TEU',
                'Fy 2080/081 & 2081/082': '250',
                'Fy 2082/083 & 2083/084': '275',
                'Fy 2084/085 & 2085/086': '302.50'
            },
            {
                sn: 2,
                activities: 'LCL Cargo Handling - FEU',
                'Fy 2080/081 & 2081/082': '250',
                'Fy 2082/083 & 2083/084': '275',
                'Fy 2084/085 & 2085/086': '302.50'
            },
            {
                sn: 3,
                activities: 'Transfer Loaded Container - TEU',
                'Fy 2080/081 & 2081/082': '605',
                'Fy 2082/083 & 2083/084': '665.50',
                'Fy 2084/085 & 2085/086': '732.05'
            },
            {
                sn: 4,
                activities: 'Transfer Loaded Container - FEU',
                'Fy 2080/081 & 2081/082': '757',
                'Fy 2082/083 & 2083/084': '832.70',
                'Fy 2084/085 & 2085/086': '915.97'
            },
            {
                sn: 5,
                activities: 'Transfer Empty Container - TEU',
                'Fy 2080/081 & 2081/082': '394',
                'Fy 2082/083 & 2083/084': '433.40',
                'Fy 2084/085 & 2085/086': '476.74'
            },
            {
                sn: 6,
                activities: 'Transfer Empty Container - FEU',
                'Fy 2080/081 & 2081/082': '605',
                'Fy 2082/083 & 2083/084': '665.50',
                'Fy 2084/085 & 2085/086': '732.05'
            },
            {
                sn: 7,
                activities: 'Over Dimensional Container Charge',
                'Fy 2080/081 & 2081/082': '+25%',
                'Fy 2082/083 & 2083/084': '+25%',
                'Fy 2084/085 & 2085/086': '+25%'
            }
        ]
    },

    // FORKLIFT CHARGES
    forkliftCharges: {
        title: 'Forklift Charges',
        data: [
            {
                sn: 1,
                activities: 'Complete Cycle - TEU',
                'Fy 2080/081 & 2081/082': '3,865.22',
                'Fy 2082/083 & 2083/084': '4,251.74',
                'Fy 2084/085 & 2085/086': '4,676.91'
            },
            {
                sn: 2,
                activities: 'Complete Cycle - FEU',
                'Fy 2080/081 & 2081/082': '7,730.45',
                'Fy 2082/083 & 2083/084': '8,503.50',
                'Fy 2084/085 & 2085/086': '9,353.85'
            },
            {
                sn: 3,
                activities: 'Single Cycle - TEU',
                'Fy 2080/081 & 2081/082': '2,013.80',
                'Fy 2082/083 & 2083/084': '2,215.18',
                'Fy 2084/085 & 2085/086': '2,436.70'
            },
            {
                sn: 4,
                activities: 'Single Cycle - FEU',
                'Fy 2080/081 & 2081/082': '4,026.28',
                'Fy 2082/083 & 2083/084': '4,428.91',
                'Fy 2084/085 & 2085/086': '4,871.80'
            },
            {
                sn: 5,
                activities: 'Non-Containerized - Per Ton',
                'Fy 2080/081 & 2081/082': '242.24',
                'Fy 2082/083 & 2083/084': '266.46',
                'Fy 2084/085 & 2085/086': '293.11'
            }
        ]
    },

    // WEIGHTLIFT CHARGES
    weightliftCharges: {
        title: 'Weightlift Charges',
        data: [
            {
                sn: 1,
                activities: 'Weightiest Charges (One activity)',
                'Fy 2080/081 & 2081/082': '133',
                'Fy 2082/083 & 2083/084': '146.30',
                'Fy 2084/085 & 2085/086': '160.93'
            }
        ]
    },

    // CLEANING CHARGES
    cleaningCharges: {
        title: 'Cleaning Charges',
        data: [
            {
                sn: 1,
                activities: 'Cleaning of Containers - TEU',
                'Fy 2080/081 & 2081/082': '260',
                'Fy 2082/083 & 2083/084': '286',
                'Fy 2084/085 & 2085/086': '314.60'
            },
            {
                sn: 2,
                activities: 'Cleaning of Containers - FEU',
                'Fy 2080/081 & 2081/082': '390',
                'Fy 2082/083 & 2083/084': '429',
                'Fy 2084/085 & 2085/086': '471.90'
            }
        ]
    },

    // SPECIAL SERVICE CHARGES
    specialServiceCharges: {
        title: 'Special Service Charges',
        data: [
            {
                sn: 1,
                activities: 'Plug-in Charge (Reefer Container) - Per Hour',
                'Fy 2080/081 & 2081/082': '200',
                'Fy 2082/083 & 2083/084': '220',
                'Fy 2084/085 & 2085/086': '242'
            },
            {
                sn: 2,
                activities: 'GPS Lock Charge - Per Trip',
                'Fy 2080/081 & 2081/082': '600',
                'Fy 2082/083 & 2083/084': '660',
                'Fy 2084/085 & 2085/086': '726'
            }
        ]
    },

    // PARKING & STORAGE CHARGES - FREIGHT VEHICLES
    parkingFreightVehicles: {
        title: 'Parking & Storage Charges - Freight Vehicles',
        data: [
            {
                sn: 1,
                activities: 'Freight Vehicles (2-7 days) - Vehicle',
                'Fy 2080/081 & 2081/082': '200',
                'Fy 2082/083 & 2083/084': '220',
                'Fy 2084/085 & 2085/086': '242'
            },
            {
                sn: 2,
                activities: 'Freight Vehicles (2-7 days) - TEU',
                'Fy 2080/081 & 2081/082': '200',
                'Fy 2082/083 & 2083/084': '220',
                'Fy 2084/085 & 2085/086': '242'
            },
            {
                sn: 3,
                activities: 'Freight Vehicles (2-7 days) - FEU',
                'Fy 2080/081 & 2081/082': '266',
                'Fy 2082/083 & 2083/084': '292.60',
                'Fy 2084/085 & 2085/086': '321.86'
            },
            {
                sn: 4,
                activities: 'Freight Vehicles (8+ days) - Vehicle',
                'Fy 2080/081 & 2081/082': '266',
                'Fy 2082/083 & 2083/084': '292.60',
                'Fy 2084/085 & 2085/086': '321.86'
            },
            {
                sn: 5,
                activities: 'Freight Vehicles (8+ days) - TEU',
                'Fy 2080/081 & 2081/082': '266',
                'Fy 2082/083 & 2083/084': '292.60',
                'Fy 2084/085 & 2085/086': '321.86'
            },
            {
                sn: 6,
                activities: 'Freight Vehicles (8+ days) - FEU',
                'Fy 2080/081 & 2081/082': '400',
                'Fy 2082/083 & 2083/084': '440',
                'Fy 2084/085 & 2085/086': '484'
            }
        ]
    },

    // PARKING & STORAGE CHARGES - CONTAINERS
    parkingContainers: {
        title: 'Parking & Storage Charges - Containers',
        data: [
            {
                sn: 1,
                activities: 'Loaded Container (1-7 days) - TEU',
                'Fy 2080/081 & 2081/082': '200',
                'Fy 2082/083 & 2083/084': '220',
                'Fy 2084/085 & 2085/086': '242'
            },
            {
                sn: 2,
                activities: 'Loaded Container (1-7 days) - FEU',
                'Fy 2080/081 & 2081/082': '266',
                'Fy 2082/083 & 2083/084': '292.60',
                'Fy 2084/085 & 2085/086': '321.86'
            },
            {
                sn: 3,
                activities: 'Loaded Container (8+ days) - TEU',
                'Fy 2080/081 & 2081/082': '266',
                'Fy 2082/083 & 2083/084': '292.60',
                'Fy 2084/085 & 2085/086': '321.86'
            },
            {
                sn: 4,
                activities: 'Loaded Container (8+ days) - FEU',
                'Fy 2080/081 & 2081/082': '400',
                'Fy 2082/083 & 2083/084': '440',
                'Fy 2084/085 & 2085/086': '484'
            },
            {
                sn: 5,
                activities: 'Empty Container (11+ days) - Vehicle',
                'Fy 2080/081 & 2081/082': '200',
                'Fy 2082/083 & 2083/084': '220',
                'Fy 2084/085 & 2085/086': '242'
            },
            {
                sn: 6,
                activities: 'Empty Container (11+ days) - TEU',
                'Fy 2080/081 & 2081/082': '200',
                'Fy 2082/083 & 2083/084': '220',
                'Fy 2084/085 & 2085/086': '242'
            },
            {
                sn: 7,
                activities: 'Empty Container (11+ days) - FEU',
                'Fy 2080/081 & 2081/082': '360',
                'Fy 2082/083 & 2083/084': '396',
                'Fy 2084/085 & 2085/086': '435.60'
            },
            {
                sn: 8,
                activities: 'Other Vehicle - Per Day',
                'Fy 2080/081 & 2081/082': '200',
                'Fy 2082/083 & 2083/084': '220',
                'Fy 2084/085 & 2085/086': '242'
            }
        ]
    },

    // WAREHOUSING CHARGES - IMPORTS
    warehousingImports: {
        title: 'Warehousing Charges - Imports',
        data: [
            {
                sn: 1,
                activities: 'Warehouse Storage (2-7 days)',
                'Fy 2080/081 & 2081/082': '0.0847',
                'Fy 2082/083 & 2083/084': '0.09317',
                'Fy 2084/085 & 2085/086': '0.10249'
            },
            {
                sn: 2,
                activities: 'Warehouse Storage (8-30 days)',
                'Fy 2080/081 & 2081/082': '0.01089',
                'Fy 2082/083 & 2083/084': '0.01198',
                'Fy 2084/085 & 2085/086': '0.13177'
            },
            {
                sn: 3,
                activities: 'Warehouse Storage (30+ days)',
                'Fy 2080/081 & 2081/082': '0.1694',
                'Fy 2082/083 & 2083/084': '0.18634',
                'Fy 2084/085 & 2085/086': '0.02497'
            },
            {
                sn: 4,
                activities: 'Open Yard Storage (2-7 days)',
                'Fy 2080/081 & 2081/082': '0.0484',
                'Fy 2082/083 & 2083/084': '0.05324',
                'Fy 2084/085 & 2085/086': '0.05856'
            },
            {
                sn: 5,
                activities: 'Open Yard Storage (8+ days)',
                'Fy 2080/081 & 2081/082': '0.0726',
                'Fy 2082/083 & 2083/084': '0.07986',
                'Fy 2084/085 & 2085/086': '0.08785'
            }
        ]
    },

    // WAREHOUSING CHARGES - EXPORTS
    warehousingExports: {
        title: 'Warehousing Charges - Exports',
        data: [
            {
                sn: 1,
                activities: 'Warehouse Storage (4-7 days)',
                'Fy 2080/081 & 2081/082': '0.0484',
                'Fy 2082/083 & 2083/084': '0.05324',
                'Fy 2084/085 & 2085/086': '0.05856'
            },
            {
                sn: 2,
                activities: 'Warehouse Storage (8-30 days)',
                'Fy 2080/081 & 2081/082': '0.0605',
                'Fy 2082/083 & 2083/084': '0.06655',
                'Fy 2084/085 & 2085/086': '0.07321'
            },
            {
                sn: 3,
                activities: 'Warehouse Storage (30+ days)',
                'Fy 2080/081 & 2081/082': '0.0847',
                'Fy 2082/083 & 2083/084': '0.09317',
                'Fy 2084/085 & 2085/086': '0.10249'
            },
            {
                sn: 4,
                activities: 'Open Yard Storage (4-7 days)',
                'Fy 2080/081 & 2081/082': '0.0242',
                'Fy 2082/083 & 2083/084': '0.02662',
                'Fy 2084/085 & 2085/086': '0.02928'
            },
            {
                sn: 5,
                activities: 'Open Yard Storage (8+ days)',
                'Fy 2080/081 & 2081/082': '0.0363',
                'Fy 2082/083 & 2083/084': '0.03993',
                'Fy 2084/085 & 2085/086': '0.04392'
            }
        ]
    },

    // SUB-LEASE CHARGES
    subLeaseCharges: {
        title: 'Sub-Lease Charges',
        data: [
            {
                sn: 1,
                activities: 'Unfurnished Room - Per m² Per Month',
                'Fy 2080/081 & 2081/082': '666',
                'Fy 2082/083 & 2083/084': '732.60',
                'Fy 2084/085 & 2085/086': '805.86'
            }
        ]
    }
};

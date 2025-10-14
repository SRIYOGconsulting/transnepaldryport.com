export const ICP_CHOBHAR = {
    // INTERNATIONAL CHARGES

    // VEHICLE ENTRY CHARGES
    vehicleEntryCharges: {
        title: 'Vehicle Entry Charges',
        data: [
            {
                sn: 1,
                activities: 'Container Vehicle Entry',
                'Fy 2080/081 & 2081/082': 'Free',
                'Fy 2082/083 & 2083/084': 'Free',
                'Fy 2084/085 & 2085/086': 'Free'
            },
            {
                sn: '1.1',
                activities:
                    'Freight Vehicle Entry - Commercial Vehicle above 10 ton',
                'Fy 2080/081 & 2081/082': '133',
                'Fy 2082/083 & 2083/084': '146.3',
                'Fy 2084/085 & 2085/086': '160.93'
            },
            {
                sn: '1.2',
                activities:
                    'Freight Vehicle Entry - Commercial Vehicle above 10 ton',
                'Fy 2080/081 & 2081/082': '266',
                'Fy 2082/083 & 2083/084': '292.6',
                'Fy 2084/085 & 2085/086': '321.86'
            },
            {
                sn: '1.3',
                activities:
                    'Freight Vehicle Entry - Light Vehicle/New vehicle with capacity up to 5 ton',
                'Fy 2080/081 & 2081/082': '118',
                'Fy 2082/083 & 2083/084': '129.8',
                'Fy 2084/085 & 2085/086': '142.78'
            }
        ]
    },

    // LOADING/UNLOADING CHARGES
    loadingUnloadingCharges: {
        title: 'Loading/Unloading/Stuffing/Destuffing Charges',
        data: [
            {
                sn: '2(a)',
                activities: 'Containerized cargo - Per TEU',
                'Fy 2080/081 & 2081/082': '4000',
                'Fy 2082/083 & 2083/084': '4400',
                'Fy 2084/085 & 2085/086': '4840'
            },
            {
                sn: '2(a)',
                activities: 'Containerized cargo - Per FEU',
                'Fy 2080/081 & 2081/082': '6000',
                'Fy 2082/083 & 2083/084': '6600',
                'Fy 2084/085 & 2085/086': '7260'
            },
            {
                sn: '2(b)',
                activities:
                    'Non-Containerized break bulk/packaged bagged cargo per ton',
                'Fy 2080/081 & 2081/082': '360',
                'Fy 2082/083 & 2083/084': '396',
                'Fy 2084/085 & 2085/086': '435.6'
            }
        ]
    },

    // TERMINAL HANDLING CHARGES
    terminalHandlingCharges: {
        title: 'Terminal Handling Charges',
        data: [
            {
                sn: '3(a)',
                activities: 'Loaded Container (complete cycle) - TEU',
                'Fy 2080/081 & 2081/082': '1815',
                'Fy 2082/083 & 2083/084': '1996.5',
                'Fy 2084/085 & 2085/086': '2196.15'
            },
            {
                sn: '3(a)',
                activities: 'Loaded Container (complete cycle) - FEU',
                'Fy 2080/081 & 2081/082': '2450',
                'Fy 2082/083 & 2083/084': '2695',
                'Fy 2084/085 & 2085/086': '2964.5'
            },
            {
                sn: '3(b)',
                activities: 'Empty container (complete cycle) - TEU',
                'Fy 2080/081 & 2081/082': '394',
                'Fy 2082/083 & 2083/084': '433.4',
                'Fy 2084/085 & 2085/086': '476.74'
            },
            {
                sn: '3(b)',
                activities: 'Empty container (complete cycle) - FEU',
                'Fy 2080/081 & 2081/082': '605',
                'Fy 2082/083 & 2083/084': '665.5',
                'Fy 2084/085 & 2085/086': '732.05'
            },
            {
                sn: '3(c)',
                activities: 'Handling of LCL cargo - TEU',
                'Fy 2080/081 & 2081/082': '250',
                'Fy 2082/083 & 2083/084': '275',
                'Fy 2084/085 & 2085/086': '302.5'
            },
            {
                sn: '3(c)',
                activities: 'Handling of LCL cargo - FEU',
                'Fy 2080/081 & 2081/082': '250',
                'Fy 2082/083 & 2083/084': '275',
                'Fy 2084/085 & 2085/086': '302.5'
            },
            {
                sn: '3(d)',
                activities: 'Transfer of loaded container - TEU',
                'Fy 2080/081 & 2081/082': '605',
                'Fy 2082/083 & 2083/084': '665.5',
                'Fy 2084/085 & 2085/086': '732.05'
            },
            {
                sn: '3(d)',
                activities: 'Transfer of loaded container - FEU',
                'Fy 2080/081 & 2081/082': '757',
                'Fy 2082/083 & 2083/084': '832.7',
                'Fy 2084/085 & 2085/086': '915.97'
            },
            {
                sn: '3(e)',
                activities: 'Transfer of empty container - TEU',
                'Fy 2080/081 & 2081/082': '394',
                'Fy 2082/083 & 2083/084': '433.4',
                'Fy 2084/085 & 2085/086': '476.74'
            },
            {
                sn: '3(e)',
                activities: 'Transfer of empty container - FEU',
                'Fy 2080/081 & 2081/082': '605',
                'Fy 2082/083 & 2083/084': '665.5',
                'Fy 2084/085 & 2085/086': '732.05'
            },
            {
                sn: '3(f)',
                activities:
                    'Special charges for over dimensional container (ODC)',
                'Fy 2080/081 & 2081/082': '25% Additional',
                'Fy 2082/083 & 2083/084': '25% Additional',
                'Fy 2084/085 & 2085/086': '25% Additional'
            }
        ]
    },

    // FORKLIFT CHARGES
    forkliftCharges: {
        title: 'Forklift Charges',
        data: [
            {
                sn: '4(a)',
                activities: 'Complete Cycle - TEU',
                'Fy 2080/081 & 2081/082': '3865.22',
                'Fy 2082/083 & 2083/084': '4251.74',
                'Fy 2084/085 & 2085/086': '4676.91'
            },
            {
                sn: '4(a)',
                activities: 'Complete Cycle - FEU',
                'Fy 2080/081 & 2081/082': '7730.45',
                'Fy 2082/083 & 2083/084': '8503.5',
                'Fy 2084/085 & 2085/086': '9353.85'
            },
            {
                sn: '4(b)',
                activities: 'Single Cycle - TEU',
                'Fy 2080/081 & 2081/082': '2013.8',
                'Fy 2082/083 & 2083/084': '2215.18',
                'Fy 2084/085 & 2085/086': '2436.7'
            },
            {
                sn: '4(b)',
                activities: 'Single Cycle - FEU',
                'Fy 2080/081 & 2081/082': '4026.28',
                'Fy 2082/083 & 2083/084': '4428.91',
                'Fy 2084/085 & 2085/086': '4871.8'
            },
            {
                sn: '4(c)',
                activities: 'Non-Containerized (Per ton)',
                'Fy 2080/081 & 2081/082': '242.24',
                'Fy 2082/083 & 2083/084': '266.46',
                'Fy 2084/085 & 2085/086': '293.11'
            }
        ]
    },

    // WEIGHT CHARGES
    weightCharges: {
        title: 'Weight Charges',
        data: [
            {
                sn: 5,
                activities:
                    'Weight Charges (One activity) of loaded/empty Vehicles',
                'Fy 2080/081 & 2081/082': '133',
                'Fy 2082/083 & 2083/084': '146.3',
                'Fy 2084/085 & 2085/086': '160.93'
            }
        ]
    },

    // WAREHOUSING CHARGES - IMPORTS
    warehousingImports: {
        title: 'Warehousing Charges - Imports',
        data: [
            {
                sn: '6(a)(i)',
                activities: '24 hours free time from the time of entry',
                'Fy 2080/081 & 2081/082': 'Free',
                'Fy 2082/083 & 2083/084': 'Free',
                'Fy 2084/085 & 2085/086': 'Free'
            },
            {
                sn: '6(a)(ii)',
                activities: '2-7 days = Rs/kg/day',
                'Fy 2080/081 & 2081/082': '0.0847',
                'Fy 2082/083 & 2083/084': '0.09317',
                'Fy 2084/085 & 2085/086': '0.102487'
            },
            {
                sn: '6(a)(iii)',
                activities: '8-30 days = Rs/kg/day',
                'Fy 2080/081 & 2081/082': '0.01089',
                'Fy 2082/083 & 2083/084': '0.011979',
                'Fy 2084/085 & 2085/086': '0.131769'
            },
            {
                sn: '6(a)(iv)',
                activities: '30 days onwards = Rs/kg/day',
                'Fy 2080/081 & 2081/082': '0.1694',
                'Fy 2082/083 & 2083/084': '0.18634',
                'Fy 2084/085 & 2085/086': '0.024974'
            }
        ]
    },

    // WAREHOUSING CHARGES - EXPORTS
    warehousingExports: {
        title: 'Warehousing Charges - Exports',
        data: [
            {
                sn: '6(b)(i)',
                activities: '72 hours free time from the time of entry',
                'Fy 2080/081 & 2081/082': 'Free',
                'Fy 2082/083 & 2083/084': 'Free',
                'Fy 2084/085 & 2085/086': 'Free'
            },
            {
                sn: '6(b)(ii)',
                activities: '4-7 days = Rs/kg/day',
                'Fy 2080/081 & 2081/082': '0.0484',
                'Fy 2082/083 & 2083/084': '0.05324',
                'Fy 2084/085 & 2085/086': '0.058564'
            },
            {
                sn: '6(b)(iii)',
                activities: '8-30 days = Rs/kg/day',
                'Fy 2080/081 & 2081/082': '0.0605',
                'Fy 2082/083 & 2083/084': '0.06655',
                'Fy 2084/085 & 2085/086': '0.073205'
            },
            {
                sn: '6(b)(iv)',
                activities: '30 days onwards = Rs/kg/day',
                'Fy 2080/081 & 2081/082': '0.0847',
                'Fy 2082/083 & 2083/084': '0.09317',
                'Fy 2084/085 & 2085/086': '0.102487'
            }
        ]
    },

    // OPEN YARD STORAGE
    openYardStorage: {
        title: 'Open Yard Storage',
        data: [
            {
                sn: '6(c)(a)(i)',
                activities:
                    'Imports - 24 hours free time from the time of entry',
                'Fy 2080/081 & 2081/082': 'Free',
                'Fy 2082/083 & 2083/084': 'Free',
                'Fy 2084/085 & 2085/086': 'Free'
            },
            {
                sn: '6(c)(a)(ii)',
                activities: 'Imports - 2-7 days = Rs/kg/day',
                'Fy 2080/081 & 2081/082': '0.0484',
                'Fy 2082/083 & 2083/084': '0.05324',
                'Fy 2084/085 & 2085/086': '0.058564'
            },
            {
                sn: '6(c)(a)(iii)',
                activities: 'Imports - 8 days onwards = Rs/kg/day',
                'Fy 2080/081 & 2081/082': '0.0726',
                'Fy 2082/083 & 2083/084': '0.07986',
                'Fy 2084/085 & 2085/086': '0.087846'
            },
            {
                sn: '6(c)(b)(i)',
                activities:
                    'Export - 72 hours free time from the time of entry',
                'Fy 2080/081 & 2081/082': 'Free',
                'Fy 2082/083 & 2083/084': 'Free',
                'Fy 2084/085 & 2085/086': 'Free'
            },
            {
                sn: '6(c)(b)(ii)',
                activities: 'Export - 4-7 days = Rs/kg/day',
                'Fy 2080/081 & 2081/082': '0.0242',
                'Fy 2082/083 & 2083/084': '0.02662',
                'Fy 2084/085 & 2085/086': '0.029282'
            },
            {
                sn: '6(c)(b)(iii)',
                activities: 'Export - 8 days onwards = Rs/kg/day',
                'Fy 2080/081 & 2081/082': '0.0363',
                'Fy 2082/083 & 2083/084': '0.03993',
                'Fy 2084/085 & 2085/086': '0.043923'
            }
        ]
    },

    // PARKING & STORAGE CHARGES - FREIGHT VEHICLES
    parkingFreightVehicles: {
        title: 'Parking & Storage Charges - Freight Vehicles',
        data: [
            {
                sn: '7(a)(i)',
                activities: '24 hours free time - Vehicle',
                'Fy 2080/081 & 2081/082': 'Free',
                'Fy 2082/083 & 2083/084': 'Free',
                'Fy 2084/085 & 2085/086': 'Free'
            },
            {
                sn: '7(a)(i)',
                activities: '24 hours free time - TEU',
                'Fy 2080/081 & 2081/082': 'Free',
                'Fy 2082/083 & 2083/084': 'Free',
                'Fy 2084/085 & 2085/086': 'Free'
            },
            {
                sn: '7(a)(i)',
                activities: '24 hours free time - FEU',
                'Fy 2080/081 & 2081/082': 'Free',
                'Fy 2082/083 & 2083/084': 'Free',
                'Fy 2084/085 & 2085/086': 'Free'
            },
            {
                sn: '7(a)(ii)',
                activities: '2-7 days/day - Vehicle',
                'Fy 2080/081 & 2081/082': '200',
                'Fy 2082/083 & 2083/084': '220',
                'Fy 2084/085 & 2085/086': '242'
            },
            {
                sn: '7(a)(ii)',
                activities: '2-7 days/day - TEU',
                'Fy 2080/081 & 2081/082': '200',
                'Fy 2082/083 & 2083/084': '220',
                'Fy 2084/085 & 2085/086': '242'
            },
            {
                sn: '7(a)(ii)',
                activities: '2-7 days/day - FEU',
                'Fy 2080/081 & 2081/082': '266',
                'Fy 2082/083 & 2083/084': '292.6',
                'Fy 2084/085 & 2085/086': '321.86'
            },
            {
                sn: '7(a)(iii)',
                activities: '8 days onwards /day - Vehicle',
                'Fy 2080/081 & 2081/082': '266',
                'Fy 2082/083 & 2083/084': '292.6',
                'Fy 2084/085 & 2085/086': '321.86'
            },
            {
                sn: '7(a)(iii)',
                activities: '8 days onwards /day - TEU',
                'Fy 2080/081 & 2081/082': '266',
                'Fy 2082/083 & 2083/084': '292.6',
                'Fy 2084/085 & 2085/086': '321.86'
            },
            {
                sn: '7(a)(iii)',
                activities: '8 days onwards /day - FEU',
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
                sn: '7(b)(i)',
                activities: 'Loaded Container - 1-7 days/day - TEU',
                'Fy 2080/081 & 2081/082': '200',
                'Fy 2082/083 & 2083/084': '220',
                'Fy 2084/085 & 2085/086': '242'
            },
            {
                sn: '7(b)(i)',
                activities: 'Loaded Container - 1-7 days/day - FEU',
                'Fy 2080/081 & 2081/082': '266',
                'Fy 2082/083 & 2083/084': '292.6',
                'Fy 2084/085 & 2085/086': '321.86'
            },
            {
                sn: '7(b)(ii)',
                activities: 'Loaded Container - 8 days onwards /day - TEU',
                'Fy 2080/081 & 2081/082': '266',
                'Fy 2082/083 & 2083/084': '292.6',
                'Fy 2084/085 & 2085/086': '321.86'
            },
            {
                sn: '7(b)(ii)',
                activities: 'Loaded Container - 8 days onwards /day - FEU',
                'Fy 2080/081 & 2081/082': '400',
                'Fy 2082/083 & 2083/084': '440',
                'Fy 2084/085 & 2085/086': '484'
            },
            {
                sn: '7(c)(i)',
                activities: 'Empty Container - 10 days free time - Vehicle',
                'Fy 2080/081 & 2081/082': 'Free',
                'Fy 2082/083 & 2083/084': 'Free',
                'Fy 2084/085 & 2085/086': 'Free'
            },
            {
                sn: '7(c)(i)',
                activities: 'Empty Container - 10 days free time - TEU',
                'Fy 2080/081 & 2081/082': 'Free',
                'Fy 2082/083 & 2083/084': 'Free',
                'Fy 2084/085 & 2085/086': 'Free'
            },
            {
                sn: '7(c)(i)',
                activities: 'Empty Container - 10 days free time - FEU',
                'Fy 2080/081 & 2081/082': 'Free',
                'Fy 2082/083 & 2083/084': 'Free',
                'Fy 2084/085 & 2085/086': 'Free'
            },
            {
                sn: '7(c)(ii)',
                activities: 'Empty Container - 11 days onwards /day - TEU',
                'Fy 2080/081 & 2081/082': '200',
                'Fy 2082/083 & 2083/084': '220',
                'Fy 2084/085 & 2085/086': '242'
            },
            {
                sn: '7(c)(ii)',
                activities: 'Empty Container - 11 days onwards /day - FEU',
                'Fy 2080/081 & 2081/082': '360',
                'Fy 2082/083 & 2083/084': '396',
                'Fy 2084/085 & 2085/086': '435.6'
            },
            {
                sn: '7(d)',
                activities: 'Other vehicle/day - Vehicle',
                'Fy 2080/081 & 2081/082': '200',
                'Fy 2082/083 & 2083/084': '220',
                'Fy 2084/085 & 2085/086': '242'
            }
        ]
    },

    // CLEANING CHARGES
    cleaningCharges: {
        title: 'Cleaning Charges',
        data: [
            {
                sn: 8,
                activities: 'Cleaning of containers - TEU',
                'Fy 2080/081 & 2081/082': '260',
                'Fy 2082/083 & 2083/084': '286',
                'Fy 2084/085 & 2085/086': '314.60'
            },
            {
                sn: 8,
                activities: 'Cleaning of containers - FEU',
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
                sn: 9,
                activities: 'Plug-in Charge for Reefer Container/Hours',
                'Fy 2080/081 & 2081/082': '200',
                'Fy 2082/083 & 2083/084': '220',
                'Fy 2084/085 & 2085/086': '242'
            },
            {
                sn: 10,
                activities: 'GPS Lock Charge Per Trip',
                'Fy 2080/081 & 2081/082': '600',
                'Fy 2082/083 & 2083/084': '660',
                'Fy 2084/085 & 2085/086': '726'
            }
        ]
    },

    // SUB-LEASE CHARGES
    subLeaseCharges: {
        title: 'Sub Lease Charges',
        data: [
            {
                sn: 11,
                activities:
                    'Unfurnished room on the main terminal building per m2 per month',
                'Fy 2080/081 & 2081/082': '666',
                'Fy 2082/083 & 2083/084': '732.6',
                'Fy 2084/085 & 2085/086': '805.86'
            }
        ]
    },

    // DOMESTIC CHARGES
    domesticCharges: {
        title: 'Domestic Charges',
        sections: {
            vehicleEntry: {
                title: 'Vehicle Entry Charges - Domestic',
                data: [
                    {
                        sn: 1,
                        activities: 'Container Vehicle Entry',
                        'Fy 2080/081 & 2081/082': 'Free',
                        'Fy 2082/083 & 2083/084': 'Free',
                        'Fy 2084/085 & 2085/086': 'Free'
                    },
                    {
                        sn: '1.1',
                        activities:
                            'Freight Vehicle Entry - Commercial Vehicle above 10 ton',
                        'Fy 2080/081 & 2081/082': 'Free',
                        'Fy 2082/083 & 2083/084': 'Free',
                        'Fy 2084/085 & 2085/086': 'Free'
                    },
                    {
                        sn: '1.2',
                        activities:
                            'Freight Vehicle Entry - Commercial Vehicle above 10 ton',
                        'Fy 2080/081 & 2081/082': 'Free',
                        'Fy 2082/083 & 2083/084': 'Free',
                        'Fy 2084/085 & 2085/086': 'Free'
                    },
                    {
                        sn: '1.3',
                        activities:
                            'Freight Vehicle Entry - Light Vehicle/New vehicle with capacity up to 5 ton',
                        'Fy 2080/081 & 2081/082': 'Free',
                        'Fy 2082/083 & 2083/084': 'Free',
                        'Fy 2084/085 & 2085/086': 'Free'
                    }
                ]
            },
            loadingUnloading: {
                title: 'Loading/Unloading Charges - Domestic',
                data: [
                    {
                        sn: '2(a)',
                        activities: 'Containerized cargo - Per TEU',
                        'Fy 2080/081 & 2081/082': '4000',
                        'Fy 2082/083 & 2083/084': '4400',
                        'Fy 2084/085 & 2085/086': '4840'
                    },
                    {
                        sn: '2(a)',
                        activities: 'Containerized cargo - Per FEU',
                        'Fy 2080/081 & 2081/082': '6000',
                        'Fy 2082/083 & 2083/084': '6600',
                        'Fy 2084/085 & 2085/086': '7260'
                    },
                    {
                        sn: '2(b)',
                        activities:
                            'Non-Containerized break bulk/packaged bagged cargo per ton',
                        'Fy 2080/081 & 2081/082': '360',
                        'Fy 2082/083 & 2083/084': '396',
                        'Fy 2084/085 & 2085/086': '435.6'
                    }
                ]
            },
            forklift: {
                title: 'Forklift Charges - Domestic',
                data: [
                    {
                        sn: '3(a)',
                        activities: 'Complete Cycle - TEU',
                        'Fy 2080/081 & 2081/082': '3865.22',
                        'Fy 2082/083 & 2083/084': '4251.74',
                        'Fy 2084/085 & 2085/086': '4676.91'
                    },
                    {
                        sn: '3(a)',
                        activities: 'Complete Cycle - FEU',
                        'Fy 2080/081 & 2081/082': '7730.45',
                        'Fy 2082/083 & 2083/084': '8503.5',
                        'Fy 2084/085 & 2085/086': '9353.85'
                    },
                    {
                        sn: '3(b)',
                        activities: 'Single Cycle - TEU',
                        'Fy 2080/081 & 2081/082': '2013.8',
                        'Fy 2082/083 & 2083/084': '2215.18',
                        'Fy 2084/085 & 2085/086': '2436.7'
                    },
                    {
                        sn: '3(b)',
                        activities: 'Single Cycle - FEU',
                        'Fy 2080/081 & 2081/082': '4026.28',
                        'Fy 2082/083 & 2083/084': '4428.91',
                        'Fy 2084/085 & 2085/086': '4871.8'
                    },
                    {
                        sn: '3(c)',
                        activities: 'Non-Containerized (Per ton)',
                        'Fy 2080/081 & 2081/082': '242.24',
                        'Fy 2082/083 & 2083/084': '266.46',
                        'Fy 2084/085 & 2085/086': '293.11'
                    }
                ]
            },
            weight: {
                title: 'Weight Charges - Domestic',
                data: [
                    {
                        sn: 4,
                        activities:
                            'Weight Charges (One activity) of loaded/empty Vehicles',
                        'Fy 2080/081 & 2081/082': '75',
                        'Fy 2082/083 & 2083/084': '82.2',
                        'Fy 2084/085 & 2085/086': '90.75'
                    }
                ]
            },
            warehousing: {
                title: 'Warehousing Charges - Domestic',
                data: [
                    {
                        sn: '5(i)',
                        activities: '1-7 days = Rs/kg/day',
                        'Fy 2080/081 & 2081/082': '0.0847',
                        'Fy 2082/083 & 2083/084': '0.09317',
                        'Fy 2084/085 & 2085/086': '0.102487'
                    },
                    {
                        sn: '5(ii)',
                        activities: '8-30 days = Rs/kg/day',
                        'Fy 2080/081 & 2081/082': '0.1089',
                        'Fy 2082/083 & 2083/084': '0.11979',
                        'Fy 2084/085 & 2085/086': '0.131769'
                    },
                    {
                        sn: '5(iii)',
                        activities: '30 days onwards = Rs/kg/day',
                        'Fy 2080/081 & 2081/082': '0.1694',
                        'Fy 2082/083 & 2083/084': '0.18634',
                        'Fy 2084/085 & 2085/086': '0.204974'
                    }
                ]
            },
            openYard: {
                title: 'Open Yard Storage - Domestic',
                data: [
                    {
                        sn: '5(i)',
                        activities: '1-7 days = Rs/kg/day',
                        'Fy 2080/081 & 2081/082': '0.0484',
                        'Fy 2082/083 & 2083/084': '0.05324',
                        'Fy 2084/085 & 2085/086': '0.058564'
                    },
                    {
                        sn: '5(ii)',
                        activities: '8 days onwards = Rs/kg/day',
                        'Fy 2080/081 & 2081/082': '0.0726',
                        'Fy 2082/083 & 2083/084': '0.07986',
                        'Fy 2084/085 & 2085/086': '0.087846'
                    }
                ]
            },
            subLeaseWarehouse: {
                title: 'Sub Lease Charges in Warehouse - Domestic',
                data: [
                    {
                        sn: '5(i)',
                        activities: 'Per square feet/month',
                        'Fy 2080/081 & 2081/082': '45',
                        'Fy 2082/083 & 2083/084': '49.5',
                        'Fy 2084/085 & 2085/086': '54.45'
                    }
                ]
            },
            parking: {
                title: 'Parking Charges - Domestic',
                data: [
                    {
                        sn: '6(a)(1)(i)',
                        activities: 'Light vehicle up to 10 ton - 1-7 days/day',
                        'Fy 2080/081 & 2081/082': '100',
                        'Fy 2082/083 & 2083/084': '110',
                        'Fy 2084/085 & 2085/086': '121'
                    },
                    {
                        sn: '6(a)(1)(ii)',
                        activities:
                            'Light vehicle up to 10 ton - 8 days onwards/day',
                        'Fy 2080/081 & 2081/082': '350',
                        'Fy 2082/083 & 2083/084': '385',
                        'Fy 2084/085 & 2085/086': '423.5'
                    },
                    {
                        sn: '6(a)(2)(i)',
                        activities: 'Vehicle above 10 ton - 1-7 days/day',
                        'Fy 2080/081 & 2081/082': '150',
                        'Fy 2082/083 & 2083/084': '165',
                        'Fy 2084/085 & 2085/086': '181.5'
                    },
                    {
                        sn: '6(a)(2)(ii)',
                        activities: 'Vehicle above 10 ton - 8 days onwards/day',
                        'Fy 2080/081 & 2081/082': '350',
                        'Fy 2082/083 & 2083/084': '385',
                        'Fy 2084/085 & 2085/086': '423.5'
                    },
                    {
                        sn: '6(b)(i)',
                        activities: 'Loaded/Fixed Container - 1-7 days/day',
                        'Fy 2080/081 & 2081/082': '200',
                        'Fy 2082/083 & 2083/084': '220',
                        'Fy 2084/085 & 2085/086': '242'
                    },
                    {
                        sn: '6(b)(ii)',
                        activities:
                            'Loaded/Fixed Container - 8 days onwards/day',
                        'Fy 2080/081 & 2081/082': '350',
                        'Fy 2082/083 & 2083/084': '385',
                        'Fy 2084/085 & 2085/086': '423.5'
                    }
                ]
            },
            cleaning: {
                title: 'Cleaning Charges - Domestic',
                data: [
                    {
                        sn: 7,
                        activities: 'Cleaning of containers - TEU',
                        'Fy 2080/081 & 2081/082': '236',
                        'Fy 2082/083 & 2083/084': '259.6',
                        'Fy 2084/085 & 2085/086': '285.56'
                    },
                    {
                        sn: 7,
                        activities: 'Cleaning of containers - FEU',
                        'Fy 2080/081 & 2081/082': '345',
                        'Fy 2082/083 & 2083/084': '379',
                        'Fy 2084/085 & 2085/086': '417.45'
                    }
                ]
            },
            subLease: {
                title: 'Sub Lease Charges - Domestic',
                data: [
                    {
                        sn: 8,
                        activities:
                            'Unfurnished room on the main terminal building per m2 per month',
                        'Fy 2080/081 & 2081/082': '666',
                        'Fy 2082/083 & 2083/084': '732.6',
                        'Fy 2084/085 & 2085/086': '805.86'
                    }
                ]
            }
        }
    }
};

import nepal_flag from '../../assets/img/about/salientFeatures/nepal_flag.png';
import ev_storage_solution from '../../assets/img/about/salientFeatures/ev_storage_solution.jpg';

export const SALIENT_FEATURES = {
    terminalNetwork: {
        title: 'Terminal Network',
        img: nepal_flag,
        networks: [
            {
                title: 'Border Terminals',
                description:
                    'TransNepal has been managing two terminals at Nepal-India border',
                li: [
                    'Biratnagar & Kakarbitta: Located in the plains of Eastern Nepal'
                ]
            },
            {
                title: 'Joint venture',
                description:
                    'Through joint ventures, TransNepal acquired two ICDs:',
                li: [
                    'Tatopani ICD: Located at Nepal-China border',
                    'Chobhar ICD: Located at Kirtipur, Kathmandu Valley'
                ]
            },
            {
                title: 'Unique Capabilities',
                description:
                    'Chobhar ICD: A unique facility handling both EXIM and DOMESTIC cargo. These facilities cut down overhead expenses of exporters/importers significantly and eliminate business uncertainties.'
            }
        ]
    },

    evStorage: {
        title: 'EV  Storage Solutions',
        description: [
            'The Nepal Govt. has introduced policies to encourage adoption of EVs and consequently there has been spurt in import of EVs in the country which requires storage space and for that Chobhar ICD is well equipped with state of art warehouses has adequate space in both EXIM and DOMESTIC sections of terminal to accommodate the growing inventory of EVs and their components.',
            'All the terminals are equipped with fire fighting hydrant system and n-number of cylinders have been put thereon to tackle small incident.'
        ],
        img: ev_storage_solution
    },

    advancedStorage: {
        title: 'Advanced Storage Solutions',
        description: [
            'Automated Warehousing Solution like Warehouse Management System(WMS) to streamline inventory processing, reducing errors, and optimising storage.',
            'The Company also provides Tailor-Made Storage Solution that are designed to align with the specific requirements of business, offering a range of benefits which extends beyond basic storage services.'
        ]
    },

    security: {
        title: 'Security',
        description: [
            'These terminals bring the advantages of the gateway ports to the very door-step of exporters /importers across Nepal.With a view to provide 24 hour power supply there is a back up arrangement of Diesel Generator ranging from 82.5 KVA to 450 KVA.These facilities are well connected to the gateway ports of Kolkata/Haldia and Vizag(in India) by road and rail.',
            'All the terminals have Grade-A category of warehouse and equipped with Digital Weighbridge.',
            'Availability of handling equipment like crane, forklift and pallet trolley etc.',
            'Availability of space for warehousing and 3PL operations.'
        ]
    }
};

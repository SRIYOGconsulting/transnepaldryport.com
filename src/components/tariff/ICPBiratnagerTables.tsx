import { ICP_BIRATNAGAR } from '../../data/tarrifData/icpBiratnagar';
import TariffTable from '../TariffTable';

function SectionBlock({
    title,
    sections
}: {
    title: string;
    sections: { title: string; data: any[] }[];
}) {
    return (
        <>
            <h1 className="title">{title}</h1>
            {sections.map((section, idx) => (
                <TariffTable
                    key={idx}
                    title={section.title}
                    data={section.data}
                />
            ))}
        </>
    );
}

// 🧾 Main Component
export default function ICPBiratnagerTables() {
    const {
        freightEntryCharges,
        cargoHandlingCharges,
        warehousingChargesImports,
        warehousingChargesExports,
        warehousingOpenYardStorage,
        parkingStorageFreightVehicle,
        parkingStorageContainer,
        cleaningOfContainers,
        subLeaseCharges,
        forkliftCharges,
        railHandlingChargesImport,
        railHandlingChargesExport,
        railHandlingBreakup,
        railHandlingBulkCargo
    } = ICP_BIRATNAGAR;

    return (
        <>
            {/* Individual Table */}
            <TariffTable
                title="Freight Entry Charges"
                data={freightEntryCharges}
            />

            {/* Grouped Sections */}
            <SectionBlock
                title="Cargo Handling Charges"
                sections={[
                    {
                        title: 'Cargo Handling Charges',
                        data: cargoHandlingCharges
                    }
                ]}
            />

            <SectionBlock
                title="Warehousing Charges"
                sections={[
                    { title: 'Import', data: warehousingChargesImports },
                    { title: 'Export', data: warehousingChargesExports },
                    {
                        title: 'Open Yard Storage',
                        data: warehousingOpenYardStorage
                    }
                ]}
            />

            <SectionBlock
                title="Parking and Storage Charges"
                sections={[
                    {
                        title: 'Freight Vehicle',
                        data: parkingStorageFreightVehicle
                    },
                    { title: 'Container', data: parkingStorageContainer },
                    {
                        title: 'Cleaning of Containers',
                        data: cleaningOfContainers
                    },
                    { title: 'Sub Lease Charges', data: subLeaseCharges },
                    { title: 'Forklift Charges', data: forkliftCharges }
                ]}
            />

            <SectionBlock
                title="Rail Handling Charges"
                sections={[
                    {
                        title: 'Import Terminal Handling Charges',
                        data: railHandlingChargesImport
                    },
                    {
                        title: 'Export Terminal Handling Charges',
                        data: railHandlingChargesExport
                    },
                    {
                        title: 'Rail Handling Breakup',
                        data: railHandlingBreakup
                    },
                    {
                        title: 'Terminal Handling Charges - Bagged, Break Bulk, Bulk Cargo & Loose Cargo',
                        data: railHandlingBulkCargo
                    }
                ]}
            />
        </>
    );
}

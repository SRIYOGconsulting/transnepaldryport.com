import { ICD_TATOPANI } from '../../data/tarrifData/icdTatopani';
import TableWithHeading from '../TableWithHeading';

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
                <TableWithHeading
                    key={idx}
                    title={section.title}
                    data={section.data}
                />
            ))}
        </>
    );
}

// 🧾 Main Exported Component
export default function ICDTatopaniTables() {
    const {
        freightEntryCharges,
        cargoHandlingCharges,
        terminalHandlingCharges,
        weighmentCharges,
        warehousingCharges,
        parkingStorageCharges,
        cleaningAndForkliftCharges,
        subLeaseCharges
    } = ICD_TATOPANI;

    return (
        <>
            <TableWithHeading
                title="Freight Entry Charges"
                data={freightEntryCharges}
            />

            <SectionBlock
                title="Cargo & Terminal Handling"
                sections={[
                    {
                        title: 'Cargo Handling Charges',
                        data: cargoHandlingCharges
                    },
                    {
                        title: 'Terminal Handling Charges',
                        data: terminalHandlingCharges
                    }
                ]}
            />

            <TableWithHeading
                title="Weighment Charge"
                data={weighmentCharges}
            />

            <TableWithHeading
                title="Warehousing Charges"
                data={warehousingCharges}
            />

            <TableWithHeading
                title="Parking and Storage Charges"
                data={parkingStorageCharges}
            />

            <TableWithHeading
                title="Cleaning & Forklift Charges"
                data={cleaningAndForkliftCharges}
            />

            <TableWithHeading
                title="Sub Lease Charges"
                data={subLeaseCharges}
            />
        </>
    );
}

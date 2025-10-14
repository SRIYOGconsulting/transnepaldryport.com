import { ICD_TATOPANI } from '../../data/tarrifData/icdTatopani';
import TariffTable from '../TariffTable';

function SectionBlock({ title, sections }: { title: string; sections: { title: string; data: any[] }[] }) {
    return (
        <>
            <h1 className="title">{title}</h1>
            {sections.map((section, idx) => (
                <TariffTable key={idx} title={section.title} data={section.data} />
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
            <TariffTable title="Freight Entry Charges" data={freightEntryCharges} />

            <SectionBlock
                title="Cargo & Terminal Handling"
                sections={[
                    { title: 'Cargo Handling Charges', data: cargoHandlingCharges },
                    { title: 'Terminal Handling Charges', data: terminalHandlingCharges }
                ]}
            />

            <TariffTable title="Weighment Charge" data={weighmentCharges} />

            <TariffTable title="Warehousing Charges" data={warehousingCharges} />

            <TariffTable title="Parking and Storage Charges" data={parkingStorageCharges} />

            <TariffTable title="Cleaning & Forklift Charges" data={cleaningAndForkliftCharges} />

            <TariffTable title="Sub Lease Charges" data={subLeaseCharges} />
        </>
    );
}


import { ICP_BIRATNAGAR_RAIL } from '../../data/tarrifData/icpBiratnagarRail';
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

// 🧾 Main Component
export default function ICPBiratnagerTables() {
    const {
        freightVehicleEntry,
        loadingUnloadingCharges,
        terminalHandlingCharges,
        weighmentCharges,
        openYardStorage,
        warehousingCharges,
        subleaseCharges,
        railwayFreight
    } = ICP_BIRATNAGAR_RAIL;

    return (
        <>
            {/* Individual Table */}
            <TableWithHeading
                title={freightVehicleEntry.title}
                data={freightVehicleEntry.data}
            />

            {/* Grouped Sections */}
            <SectionBlock
                title="Cargo Handling Charges"
                sections={[
                    {
                        title: loadingUnloadingCharges.title,
                        data: loadingUnloadingCharges.data
                    },
                    {
                        title: terminalHandlingCharges.title,
                        data: terminalHandlingCharges.data
                    },
                    {
                        title: weighmentCharges.title,
                        data: weighmentCharges.data
                    }
                ]}
            />

            <SectionBlock
                title="Storage and Charges"
                sections={[
                    {
                        title: openYardStorage.title,
                        data: openYardStorage.data
                    },
                    {
                        title: warehousingCharges.title,
                        data: warehousingCharges.data
                    },
                    {
                        title: subleaseCharges.title,
                        data: subleaseCharges.data
                    }
                ]}
            />

            <SectionBlock
                title="Railway Freight Charges"
                sections={[
                    {
                        title: railwayFreight.title,
                        data: railwayFreight.data
                    }
                ]}
            />
        </>
    );
}

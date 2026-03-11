import { ICP_BIRATNAGAR_ROAD } from '../../data/tarrifData/icpBiratnagarRoad';
import TableWithHeading from '../TableWithHeading';

function SectionBlock({
  title,
  sections
}: {
  title: string;
  sections: { title: string; data: any[] }[];
}) {
  const validSections = sections.filter(Boolean);

  if (validSections.length === 0) return null;

  return (
    <>
      <h1 className="title">{title}</h1>

      {validSections.map((section, idx) => (
        <TableWithHeading
          key={idx}
          title={section.title}
          data={section.data}
        />
      ))}
    </>
  );
}

export default function ICDBiratnagarRoadTables() {
  const {
    vehicleEntryCharges,
    cargoHandlingCharges,
    terminalHandlingCharges,
    forkliftCharges,
    weighmentCharges,
    cleaningCharges,
    warehousingCharges,
    parkingCharges,
    subLeaseCharges
  } = ICP_BIRATNAGAR_ROAD;

  return (
    <>
      {/* Vehicle Entry */}
      <TableWithHeading
        title={vehicleEntryCharges.title}
        data={vehicleEntryCharges.data}
      />

      {/* Cargo Handling Charges */}
      <SectionBlock
        title="Cargo Handling Charges"
        sections={[cargoHandlingCharges]}
      />

      {/* Terminal Handling Charges */}
      <SectionBlock
        title="Terminal Handling Charges"
        sections={[terminalHandlingCharges]}
      />

      {/* Equipment & Weighment Charges */}
      <SectionBlock
        title="Equipment & Weighment Charges"
        sections={[forkliftCharges, weighmentCharges, cleaningCharges]}
      />

      {/* Warehousing Charges */}
      <SectionBlock
        title="Warehousing Charges"
        sections={[
          { title: "Import", data: warehousingCharges.import },
          { title: "Export", data: warehousingCharges.export },
          { title: "Open Yard", data: warehousingCharges.openYard }
        ]}
      />

      {/* Parking & Storage Charges */}
      <SectionBlock
        title="Parking & Storage Charges"
        sections={[
          { title: "Freight Vehicles", data: parkingCharges.vehicles },
          { title: "Containers", data: parkingCharges.containers }
        ]}
      />

      {/* Sublease Charges */}
      <SectionBlock
        title="Sublease Charges"
        sections={[subLeaseCharges]}
      />
    </>
  );
}
import { ICP_BIRATNAGAR_ROAD } from '../../data/tarrifData/icpBiratnagarRoad';
import TableWithHeading from '../TableWithHeading';

// SectionBlock to handle multiple sections under a title
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
        <TableWithHeading key={idx} title={section.title} data={section.data} />
      ))}
    </>
  );
}

// Main Component
export default function ICDBiratnagarRoadTables() {
  const {
    vehicleEntryCharges,
    cargoHandlingCharges,
    terminalHandlingCharges,
    forkliftCharges,
    weighmentCharges,
    cleaningCharges,
    warehousingImports,
    warehousingExports,
    openYardStorage,
    parkingFreightVehicles,
    parkingContainers,
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

      {/* Equipment Charges */}
      <SectionBlock
        title="Equipment & Weighment Charges"
        sections={[forkliftCharges, weighmentCharges, cleaningCharges]}
      />

      {/* Warehousing Charges */}
      <SectionBlock
        title="Warehousing Charges"
        sections={[warehousingImports, warehousingExports, openYardStorage]}
      />

      {/* Parking & Storage Charges */}
      <SectionBlock
        title="Parking & Storage Charges"
        sections={[parkingFreightVehicles, parkingContainers]}
      />

      {/* Sublease Charges */}
      <SectionBlock
        title="Sublease Charges"
        sections={[subLeaseCharges]}
      />
    </>
  );
}
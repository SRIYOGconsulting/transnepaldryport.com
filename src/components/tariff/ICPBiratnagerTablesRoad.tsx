import { ICP_BIRATNAGAR_ROAD } from '../../data/tarrifData/icpBiratnagarRoad';
import TableWithHeading from '../TableWithHeading';

function SectionBlock({
  title,
  sections
}: {
  title: string;
  sections: any[];
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
    warehousingImports,
    warehousingExports,
    openYardStorage,
    parkingFreightVehicles,
    parkingContainers,
    subLeaseCharges
  } = ICP_BIRATNAGAR_ROAD;

  return (
    <>
      <TableWithHeading
        title={vehicleEntryCharges.title}
        data={vehicleEntryCharges.data}
      />

      <SectionBlock
        title="Cargo Handling Charges"
        sections={[cargoHandlingCharges]}
      />

      <SectionBlock
        title="Terminal Handling Charges"
        sections={[terminalHandlingCharges]}
      />

      <SectionBlock
        title="Equipment & Weighment Charges"
        sections={[forkliftCharges, weighmentCharges, cleaningCharges]}
      />

      <SectionBlock
        title="Warehousing Charges"
        sections={[warehousingImports, warehousingExports, openYardStorage]}
      />

      <SectionBlock
        title="Parking & Storage Charges"
        sections={[parkingFreightVehicles, parkingContainers]}
      />

      <SectionBlock
        title="Sublease Charges"
        sections={[subLeaseCharges]}
      />
    </>
  );
}
import { ICP_BIRATNAGAR_RAIL } from '../../data/tarrifData/icpBiratnagarRail';
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

export default function ICPBiratnagarRailTables() {

  const {
    freightVehicleEntry,
    loadingUnloadingCharges,
    terminalHandlingCharges,
    weighmentCharges,
    warehousingCharges,
    openYardStorage,
    parkingCharges,
    subleaseCharges,
    railwayFreight
  } = ICP_BIRATNAGAR_RAIL;

  return (
    <>
      {/* Freight Vehicle Entry */}
      <TableWithHeading
        title={freightVehicleEntry.title}
        data={freightVehicleEntry.data}
      />

      {/* Cargo Handling Charges */}
      <SectionBlock
        title="Cargo Handling Charges"
        sections={[loadingUnloadingCharges]}
      />

      {/* Terminal Handling Charges */}
      <SectionBlock
        title="Terminal Handling Charges"
        sections={[terminalHandlingCharges]}
      />

      {/* Weighment Charges */}
      <SectionBlock
        title="Weighment Charges"
        sections={[weighmentCharges]}
      />

      {/* Warehousing Charges */}
      <SectionBlock
        title="Warehousing Charges"
        sections={[
          warehousingCharges,
          openYardStorage
        ]}
      />

      {/* Parking & Storage Charges */}
      <SectionBlock
        title="Parking & Storage Charges"
        sections={[parkingCharges]}
      />

      {/* Sublease Charges */}
      <SectionBlock
        title="Sublease Charges"
        sections={[subleaseCharges]}
      />

      {/* Railway Freight */}
      <SectionBlock
        title="Railway Freight"
        sections={[railwayFreight]}
      />
    </>
  );
}
import { ICD_KAKARBHITTA } from '../../data/tarrifData/icdKakarbhitta';
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

export default function ICDKakarvittaTables() {

  const {
    freightEntryCharges,
    cargoHandlingCharges,
    terminalHandlingCharges,
    weighmentCharges,
    warehousingCharges,
    vehicleParkingCharges,      // ✅ NEW
    containerParkingCharges,    // ✅ NEW
    containerCleaningCharges,
    forkliftCharges,
    subleaseCharges
  } = ICD_KAKARBHITTA;

  return (
    <>
      {/* A */}
      <TableWithHeading
        title="Freight Vehicle Entry"
        data={freightEntryCharges}
      />

      {/* B + C */}
      <SectionBlock
        title="Cargo & Terminal Handling"
        sections={[
          {
            title: 'Loading / Unloading / Handling of Cargo',
            data: cargoHandlingCharges
          },
          {
            title: 'Terminal Handling Charges',
            data: terminalHandlingCharges
          }
        ]}
      />

      {/* D */}
      <TableWithHeading
        title="Weighment Charges"
        data={weighmentCharges}
      />

      {/* E */}
      <SectionBlock
        title="Warehousing Charges"
        sections={[
          {
            title: 'Import',
            data: warehousingCharges.import
          },
          {
            title: 'Export',
            data: warehousingCharges.export
          },
          {
            title: 'Open Yard Storage',
            data: warehousingCharges.openYard
          }
        ]}
      />

      {/* F */}
      <TableWithHeading
        title="Parking & Storage Charges for Loaded / Unloaded Vehicles"
        data={vehicleParkingCharges}
      />

      {/* G */}
      <TableWithHeading
        title="Parking & Storage Charges of Containers"
        data={containerParkingCharges}
      />

      {/* H */}
      <TableWithHeading
        title="Cleaning of Containers"
        data={containerCleaningCharges}
      />

      {/* I */}
      <TableWithHeading
        title="Forklift Charges"
        data={forkliftCharges}
      />

      {/* J */}
      <TableWithHeading
        title="Sublease Charges (Unfurnished Room)"
        data={subleaseCharges}
      />
    </>
  );
}
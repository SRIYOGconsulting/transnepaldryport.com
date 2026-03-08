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

// 🧾 Main Component
export default function ICDKakarvittaTables() {
  const {
    freightEntryCharges,
    cargoHandlingCharges,
    terminalHandlingCharges,
    weighmentCharges
  } = ICD_KAKARBHITTA;

  return (
    <>
      <TableWithHeading
        title="Freight Entry Charges"
        data={freightEntryCharges}
      />

      <SectionBlock
        title="Cargo & Terminal Handling Charges"
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
        title="Weighment Charges"
        data={weighmentCharges}
      />
    </>
  );
}
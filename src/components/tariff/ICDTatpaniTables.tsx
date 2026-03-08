import { ICD_TATOPANI } from '../../data/tarrifData/icdTatopani';
import TableWithHeading from '../TableWithHeading';

export default function ICDTatpaniTables() {
  const {
    freightEntryCharges,
    cargoHandlingCharges,
    terminalHandlingCharges,
    weighmentCharges,
  } = ICD_TATOPANI;

  return (
    <>
      
      <TableWithHeading
        title="Freight Entry Charges"
        data={freightEntryCharges}
      />

     
      <TableWithHeading
        title="Cargo Handling Charges"
        data={cargoHandlingCharges}
      />

      
      <TableWithHeading
        title="Terminal Handling Charges"
        data={terminalHandlingCharges}
      />

      
      <TableWithHeading
        title="Weighment Charges"
        data={weighmentCharges}
      />
    </>
  );
}
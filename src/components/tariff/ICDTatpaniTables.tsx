import { ICD_TATOPANI } from '../../data/tarrifData/icdTatopani';
import TableWithHeading from '../TableWithHeading';

export default function ICDTatopaniTables() {
  const {
    freightEntryCharges,
    cargoHandlingCharges,
    terminalHandlingCharges,
    weighmentCharges,
    warehousingChargesImport,
    warehousingChargesExport,
    openYardStorage,
    vehicleParkingCharges,
    containerParkingCharges,
    containerCleaningCharges,
    forkliftCharges,
    subleaseCharges
  } = ICD_TATOPANI;

  return (
    <>
      <TableWithHeading title="Freight Entry Charges" data={freightEntryCharges} />

      <TableWithHeading title="Loading / Unloading / Handling of Cargo" data={cargoHandlingCharges} />

      <TableWithHeading title="Terminal Handling Charges" data={terminalHandlingCharges} />

      <TableWithHeading title="Weighment Charges" data={weighmentCharges} />

      <TableWithHeading title="Warehousing Charges (Import)" data={warehousingChargesImport} />

      <TableWithHeading title="Warehousing Charges (Export)" data={warehousingChargesExport} />

      <TableWithHeading title="Open Yard Storage" data={openYardStorage} />

      <TableWithHeading title="Parking & Storage Charges for Vehicles" data={vehicleParkingCharges} />

      <TableWithHeading title="Parking & Storage Charges of Containers" data={containerParkingCharges} />

      <TableWithHeading title="Cleaning of Containers" data={containerCleaningCharges} />

      <TableWithHeading title="Forklift Charges" data={forkliftCharges} />

      <TableWithHeading title="Sublease Charges" data={subleaseCharges} />
    </>
  );
}
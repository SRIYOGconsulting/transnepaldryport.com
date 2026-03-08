import { ICP_BIRATNAGAR_RAIL } from '../../data/tarrifData/icpBiratnagarRail'
import TableWithHeading from '../TableWithHeading';

export default function ICPBiratnagarRailTables() {
  const {
    freightVehicleEntry,
    loadingUnloadingCharges,
    terminalHandlingCharges,
    weighmentCharges
  } = ICP_BIRATNAGAR_RAIL;

  return (
    <>
      {/* Freight Vehicle Entry Charges */}
      <TableWithHeading
        title={freightVehicleEntry.title}
        data={freightVehicleEntry.data}
      />

      {/* Cargo Handling Charges */}
      <TableWithHeading
        title={loadingUnloadingCharges.title}
        data={loadingUnloadingCharges.data}
      />

      {/* Terminal Handling Charges */}
      <TableWithHeading
        title={terminalHandlingCharges.title}
        data={terminalHandlingCharges.data}
      />

      {/* Weighment Charges */}
      <TableWithHeading
        title={weighmentCharges.title}
        data={weighmentCharges.data}
      />
    </>
  );
}
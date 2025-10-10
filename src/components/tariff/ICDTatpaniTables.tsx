import { ICD_TATOPANI } from '../../data/tarrifData/icdTatopani';
import { getAvailableColumns } from '../../utils/getAvailableColumns';
import DataTable from '../ui/DataTable';

// ------------------ Individual Section Components ------------------

function FreightEntryChargesTable() {
    const columns = getAvailableColumns(ICD_TATOPANI.freightEntryCharges);

    return (
        <>
            <h2 className="subTitle">Freight Entry Charges</h2>
            <DataTable
                columns={columns}
                data={ICD_TATOPANI.freightEntryCharges}
            />
        </>
    );
}

function CargoHandlingChargesTable() {
    const columns = getAvailableColumns(ICD_TATOPANI.cargoHandlingCharges);

    return (
        <>
            <h2 className="title">Cargo Handling Charges</h2>
            <DataTable
                columns={columns}
                data={ICD_TATOPANI.cargoHandlingCharges}
            />
        </>
    );
}

function TerminalHandlingChargesTable() {
    const columns = getAvailableColumns(ICD_TATOPANI.terminalHandlingCharges);

    return (
        <>
            <h2 className="title">Terminal Handling Charges</h2>
            <DataTable
                columns={columns}
                data={ICD_TATOPANI.terminalHandlingCharges}
            />
        </>
    );
}

function WeighmentChargeTable() {
    const columns = getAvailableColumns(ICD_TATOPANI.weighmentCharges);

    return (
        <>
            <h2 className="title">Weighment Charge</h2>
            <DataTable columns={columns} data={ICD_TATOPANI.weighmentCharges} />
        </>
    );
}

function WarehousingChargesTable() {
    const importCols = getAvailableColumns(ICD_TATOPANI.warehousingCharges);
    return (
        <>
            <h2 className="title">Warehousing Charges</h2>
            <DataTable
                columns={importCols}
                data={ICD_TATOPANI.warehousingCharges}
            />
        </>
    );
}

function ParkingAndStorageChargesTable() {
    const freightColumns = getAvailableColumns(
        ICD_TATOPANI.parkingStorageCharges
    );
    return (
        <>
            <h2 className="title">Parking and Storage Charges</h2>
            <DataTable
                columns={freightColumns}
                data={ICD_TATOPANI.parkingStorageCharges}
            />
        </>
    );
}

function CleaningAndForkliftChargesTable() {
    const columns = getAvailableColumns(
        ICD_TATOPANI.cleaningAndForkliftCharges
    );

    return (
        <>
            <h2 className="title">Cleaning & Forklift Charges</h2>
            <DataTable
                columns={columns}
                data={ICD_TATOPANI.cleaningAndForkliftCharges}
            />
        </>
    );
}

function SubLeaseChargesTable() {
    const columns = getAvailableColumns(ICD_TATOPANI.subLeaseCharges);

    return (
        <>
            <h2 className="title">Sub Lease Charges</h2>
            <DataTable columns={columns} data={ICD_TATOPANI.subLeaseCharges} />
        </>
    );
}

// ------------------ Main Exported Page Component ------------------

export default function ICDTatopaniTables() {
    return (
        <>
            <FreightEntryChargesTable />
            <CargoHandlingChargesTable />
            <TerminalHandlingChargesTable />
            <WeighmentChargeTable />
            <WarehousingChargesTable />
            <ParkingAndStorageChargesTable />
            <CleaningAndForkliftChargesTable />
            <SubLeaseChargesTable />
        </>
    );
}

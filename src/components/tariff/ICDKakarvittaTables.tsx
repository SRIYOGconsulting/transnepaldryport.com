import { ICD_KAKARVITTA } from '../../data/tarrifData/icdKakarvitta';
import { getAvailableColumns } from '../../utils/getAvailableColumns';
import DataTable from '../ui/DataTable';

// Freight Entry Charges
function FreightEntryChargesTable() {
    const columns = getAvailableColumns(ICD_KAKARVITTA.freightEntryCharges);

    return (
        <>
            <h2 className="subTitle">Freight Entry Charges</h2>
            <DataTable columns={columns} data={ICD_KAKARVITTA.freightEntryCharges} />
        </>
    );
}

// Cargo Handling Charges
function CargoHandlingChargesTable() {
    const columns = getAvailableColumns(ICD_KAKARVITTA.cargoHandlingCharges);

    return (
        <>
            <h2 className="title">Cargo Handling Charges</h2>
            <DataTable columns={columns} data={ICD_KAKARVITTA.cargoHandlingCharges} />
        </>
    );
}

// Terminal Handling Charges
function TerminalHandlingChargesTable() {
    const columns = getAvailableColumns(ICD_KAKARVITTA.terminalHandlingCharges);

    return (
        <>
            <h2 className="title">Terminal Handling Charges</h2>
            <DataTable columns={columns} data={ICD_KAKARVITTA.terminalHandlingCharges} />
        </>
    );
}

// Weighment Charges
function WeighmentChargesTable() {
    const columns = getAvailableColumns(ICD_KAKARVITTA.weighmentCharges);

    return (
        <>
            <h2 className="title">Weighment Charges</h2>
            <DataTable columns={columns} data={ICD_KAKARVITTA.weighmentCharges} />
        </>
    );
}

// Warehousing Charges
function WarehousingChargesTable() {
    const columns = getAvailableColumns(ICD_KAKARVITTA.warehousingCharges);

    return (
        <>
            <h2 className="title">Warehousing Charges</h2>
            <DataTable columns={columns} data={ICD_KAKARVITTA.warehousingCharges} />
        </>
    );
}

// Parking & Storage Charges
function ParkingAndStorageChargesTable() {
    const columns = getAvailableColumns(ICD_KAKARVITTA.parkingStorageCharges);

    return (
        <>
            <h2 className="title">Parking & Storage Charges</h2>
            <DataTable columns={columns} data={ICD_KAKARVITTA.parkingStorageCharges} />
        </>
    );
}

// Cleaning & Forklift Charges
function CleaningAndForkliftChargesTable() {
    const columns = getAvailableColumns(ICD_KAKARVITTA.cleaningAndForkliftCharges);

    return (
        <>
            <h2 className="title">Cleaning & Forklift Charges</h2>
            <DataTable columns={columns} data={ICD_KAKARVITTA.cleaningAndForkliftCharges} />
        </>
    );
}

// Sub Lease Charges
function SubLeaseChargesTable() {
    const columns = getAvailableColumns(ICD_KAKARVITTA.subLeaseCharges);

    return (
        <>
            <h2 className="title">Sub Lease Charges</h2>
            <DataTable columns={columns} data={ICD_KAKARVITTA.subLeaseCharges} />
        </>
    );
}

// Main Exported Component
export default function ICDKakarvittaTables() {
    return (
        <>
            <FreightEntryChargesTable />
            <CargoHandlingChargesTable />
            <TerminalHandlingChargesTable />
            <WeighmentChargesTable />
            <WarehousingChargesTable />
            <ParkingAndStorageChargesTable />
            <CleaningAndForkliftChargesTable />
            <SubLeaseChargesTable />
        </>
    );
}

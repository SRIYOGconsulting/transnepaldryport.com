import { ICD_CHOBHAR } from '../../data/tarrifData/icdChobhar';
import { getAvailableColumns } from '../../utils/getAvailableColumns';
import DataTable from '../ui/DataTable';

// Vehicle Entry Charges
function VehicleEntryChargesTable() {
    const columns = getAvailableColumns(ICD_CHOBHAR.vehicleEntryCharges.data);
    return (
        <>
            <h2 className="title">{ICD_CHOBHAR.vehicleEntryCharges.title}</h2>
            <DataTable
                columns={columns}
                data={ICD_CHOBHAR.vehicleEntryCharges.data}
            />
        </>
    );
}

// Cargo Handling Charges
function CargoHandlingChargesTables() {
    const loadingUnloadingColumns = getAvailableColumns(
        ICD_CHOBHAR.loadingUnloadingCharges.data
    );
    const terminalHandlingLoadedColumns = getAvailableColumns(
        ICD_CHOBHAR.terminalHandlingLoaded.data
    );
    const terminalHandlingAdditionalColumns = getAvailableColumns(
        ICD_CHOBHAR.terminalHandlingAdditional.data
    );

    return (
        <>
            <h1 className="title">Cargo Handling Charges</h1>
            <h2 className="subTitle">
                {ICD_CHOBHAR.loadingUnloadingCharges.title}
            </h2>
            <DataTable
                columns={loadingUnloadingColumns}
                data={ICD_CHOBHAR.loadingUnloadingCharges.data}
            />
            <h2 className="subTitle">
                {ICD_CHOBHAR.terminalHandlingLoaded.title}
            </h2>
            <DataTable
                columns={terminalHandlingLoadedColumns}
                data={ICD_CHOBHAR.terminalHandlingLoaded.data}
            />
            <h2 className="subTitle">
                {ICD_CHOBHAR.terminalHandlingAdditional.title}
            </h2>
            <DataTable
                columns={terminalHandlingAdditionalColumns}
                data={ICD_CHOBHAR.terminalHandlingAdditional.data}
            />
        </>
    );
}

// Equipment Charges
function EquipmentChargesTables() {
    const forkliftColumns = getAvailableColumns(
        ICD_CHOBHAR.forkliftCharges.data
    );
    const weightliftColumns = getAvailableColumns(
        ICD_CHOBHAR.weightliftCharges.data
    );
    const cleaningColumns = getAvailableColumns(
        ICD_CHOBHAR.cleaningCharges.data
    );

    return (
        <>
            <h1 className="title">Equipment Charges</h1>
            <h2 className="subTitle">{ICD_CHOBHAR.forkliftCharges.title}</h2>
            <DataTable
                columns={forkliftColumns}
                data={ICD_CHOBHAR.forkliftCharges.data}
            />
            <h2 className="subTitle">{ICD_CHOBHAR.weightliftCharges.title}</h2>
            <DataTable
                columns={weightliftColumns}
                data={ICD_CHOBHAR.weightliftCharges.data}
            />
            <h2 className="subTitle">{ICD_CHOBHAR.cleaningCharges.title}</h2>
            <DataTable
                columns={cleaningColumns}
                data={ICD_CHOBHAR.cleaningCharges.data}
            />
        </>
    );
}

// Special Services Charges
function SpecialServicesTables() {
    const specialServiceColumns = getAvailableColumns(
        ICD_CHOBHAR.specialServiceCharges.data
    );
    const subLeaseColumns = getAvailableColumns(
        ICD_CHOBHAR.subLeaseCharges.data
    );

    return (
        <>
            <h1 className="title">Special Services Charges</h1>
            <h2 className="subTitle">
                {ICD_CHOBHAR.specialServiceCharges.title}
            </h2>
            <DataTable
                columns={specialServiceColumns}
                data={ICD_CHOBHAR.specialServiceCharges.data}
            />
            <h2 className="subTitle">{ICD_CHOBHAR.subLeaseCharges.title}</h2>
            <DataTable
                columns={subLeaseColumns}
                data={ICD_CHOBHAR.subLeaseCharges.data}
            />
        </>
    );
}

// Parking & Storage Charges
function ParkingStorageChargesTables() {
    const parkingFreightColumns = getAvailableColumns(
        ICD_CHOBHAR.parkingFreightVehicles.data
    );
    const parkingContainerColumns = getAvailableColumns(
        ICD_CHOBHAR.parkingContainers.data
    );

    return (
        <>
            <h1 className="title">Parking & Storage Charges</h1>
            <h2 className="subTitle">
                {ICD_CHOBHAR.parkingFreightVehicles.title}
            </h2>
            <DataTable
                columns={parkingFreightColumns}
                data={ICD_CHOBHAR.parkingFreightVehicles.data}
            />
            <h2 className="subTitle">{ICD_CHOBHAR.parkingContainers.title}</h2>
            <DataTable
                columns={parkingContainerColumns}
                data={ICD_CHOBHAR.parkingContainers.data}
            />
        </>
    );
}

// Warehousing Charges
function WarehousingChargesTables() {
    const importsColumns = getAvailableColumns(
        ICD_CHOBHAR.warehousingImports.data
    );
    const exportsColumns = getAvailableColumns(
        ICD_CHOBHAR.warehousingExports.data
    );

    return (
        <>
            <h1 className="title">Warehousing Charges</h1>
            <h2 className="subTitle">{ICD_CHOBHAR.warehousingImports.title}</h2>
            <DataTable
                columns={importsColumns}
                data={ICD_CHOBHAR.warehousingImports.data}
            />
            <h2 className="subTitle">{ICD_CHOBHAR.warehousingExports.title}</h2>
            <DataTable
                columns={exportsColumns}
                data={ICD_CHOBHAR.warehousingExports.data}
            />
        </>
    );
}

// Main Component
export default function ICDChobharTables() {
    return (
        <>
            <VehicleEntryChargesTable />
            <CargoHandlingChargesTables />
            <EquipmentChargesTables />
            <SpecialServicesTables />
            <ParkingStorageChargesTables />
            <WarehousingChargesTables />
        </>
    );
}

import { ICD_CHOBHAR } from '../../data/tarrifData/icdChobhar';
import { getAvailableColumns } from '../../utils/getAvailableColumns';
import DataTable from '../ui/DataTable';

function VehicleEntryChargesTable() {
    const columns = getAvailableColumns(ICD_CHOBHAR.vehicleEntryCharges.data);

    return (
        <>
            <h2 className="subTitle">
                {ICD_CHOBHAR.vehicleEntryCharges.title}
            </h2>
            <DataTable
                columns={columns}
                data={ICD_CHOBHAR.vehicleEntryCharges.data}
            />
        </>
    );
}

function LoadingUnloadingChargesTable() {
    const columns = getAvailableColumns(
        ICD_CHOBHAR.loadingUnloadingCharges.data
    );

    return (
        <>
            <h2 className="subTitle">
                {ICD_CHOBHAR.loadingUnloadingCharges.title}
            </h2>
            <DataTable
                columns={columns}
                data={ICD_CHOBHAR.loadingUnloadingCharges.data}
            />
        </>
    );
}

function TerminalHandlingChargesTable() {
    const columns = getAvailableColumns(
        ICD_CHOBHAR.terminalHandlingCharges.data
    );

    return (
        <>
            <h2 className="subTitle">
                {ICD_CHOBHAR.terminalHandlingCharges.title}
            </h2>
            <DataTable
                columns={columns}
                data={ICD_CHOBHAR.terminalHandlingCharges.data}
            />
        </>
    );
}

function ForkliftChargesTable() {
    const columns = getAvailableColumns(ICD_CHOBHAR.forkliftCharges.data);

    return (
        <>
            <h2 className="subTitle">{ICD_CHOBHAR.forkliftCharges.title}</h2>
            <DataTable
                columns={columns}
                data={ICD_CHOBHAR.forkliftCharges.data}
            />
        </>
    );
}

function WeightChargesTable() {
    const columns = getAvailableColumns(ICD_CHOBHAR.weightCharges.data);

    return (
        <>
            <h2 className="subTitle">{ICD_CHOBHAR.weightCharges.title}</h2>
            <DataTable
                columns={columns}
                data={ICD_CHOBHAR.weightCharges.data}
            />
        </>
    );
}

function WarehousingImportsTable() {
    const columns = getAvailableColumns(ICD_CHOBHAR.warehousingImports.data);

    return (
        <>
            <h2 className="subTitle">{ICD_CHOBHAR.warehousingImports.title}</h2>
            <DataTable
                columns={columns}
                data={ICD_CHOBHAR.warehousingImports.data}
            />
        </>
    );
}

function WarehousingExportsTable() {
    const columns = getAvailableColumns(ICD_CHOBHAR.warehousingExports.data);

    return (
        <>
            <h2 className="subTitle">{ICD_CHOBHAR.warehousingExports.title}</h2>
            <DataTable
                columns={columns}
                data={ICD_CHOBHAR.warehousingExports.data}
            />
        </>
    );
}

function OpenYardStorageTable() {
    const columns = getAvailableColumns(ICD_CHOBHAR.openYardStorage.data);

    return (
        <>
            <h2 className="subTitle">{ICD_CHOBHAR.openYardStorage.title}</h2>
            <DataTable
                columns={columns}
                data={ICD_CHOBHAR.openYardStorage.data}
            />
        </>
    );
}

function ParkingFreightVehiclesTable() {
    const columns = getAvailableColumns(
        ICD_CHOBHAR.parkingFreightVehicles.data
    );

    return (
        <>
            <h2 className="subTitle">
                {ICD_CHOBHAR.parkingFreightVehicles.title}
            </h2>
            <DataTable
                columns={columns}
                data={ICD_CHOBHAR.parkingFreightVehicles.data}
            />
        </>
    );
}

function ParkingContainersTable() {
    const columns = getAvailableColumns(ICD_CHOBHAR.parkingContainers.data);

    return (
        <>
            <h2 className="subTitle">{ICD_CHOBHAR.parkingContainers.title}</h2>
            <DataTable
                columns={columns}
                data={ICD_CHOBHAR.parkingContainers.data}
            />
        </>
    );
}

function CleaningChargesTable() {
    const columns = getAvailableColumns(ICD_CHOBHAR.cleaningCharges.data);

    return (
        <>
            <h2 className="subTitle">{ICD_CHOBHAR.cleaningCharges.title}</h2>
            <DataTable
                columns={columns}
                data={ICD_CHOBHAR.cleaningCharges.data}
            />
        </>
    );
}

function SpecialServiceChargesTable() {
    const columns = getAvailableColumns(ICD_CHOBHAR.specialServiceCharges.data);

    return (
        <>
            <h2 className="subTitle">
                {ICD_CHOBHAR.specialServiceCharges.title}
            </h2>
            <DataTable
                columns={columns}
                data={ICD_CHOBHAR.specialServiceCharges.data}
            />
        </>
    );
}

function SubLeaseChargesTable() {
    const columns = getAvailableColumns(ICD_CHOBHAR.subLeaseCharges.data);

    return (
        <>
            <h2 className="subTitle">{ICD_CHOBHAR.subLeaseCharges.title}</h2>
            <DataTable
                columns={columns}
                data={ICD_CHOBHAR.subLeaseCharges.data}
            />
        </>
    );
}

// Domestic Charges Tables
function DomesticVehicleEntryTable() {
    const columns = getAvailableColumns(
        ICD_CHOBHAR.domesticCharges.sections.vehicleEntry.data
    );

    return (
        <>
            <h2 className="subTitle">
                {ICD_CHOBHAR.domesticCharges.sections.vehicleEntry.title}
            </h2>
            <DataTable
                columns={columns}
                data={ICD_CHOBHAR.domesticCharges.sections.vehicleEntry.data}
            />
        </>
    );
}

function DomesticLoadingUnloadingTable() {
    const columns = getAvailableColumns(
        ICD_CHOBHAR.domesticCharges.sections.loadingUnloading.data
    );

    return (
        <>
            <h2 className="subTitle">
                {ICD_CHOBHAR.domesticCharges.sections.loadingUnloading.title}
            </h2>
            <DataTable
                columns={columns}
                data={
                    ICD_CHOBHAR.domesticCharges.sections.loadingUnloading.data
                }
            />
        </>
    );
}

function DomesticForkliftTable() {
    const columns = getAvailableColumns(
        ICD_CHOBHAR.domesticCharges.sections.forklift.data
    );

    return (
        <>
            <h2 className="subTitle">
                {ICD_CHOBHAR.domesticCharges.sections.forklift.title}
            </h2>
            <DataTable
                columns={columns}
                data={ICD_CHOBHAR.domesticCharges.sections.forklift.data}
            />
        </>
    );
}

function DomesticWeightTable() {
    const columns = getAvailableColumns(
        ICD_CHOBHAR.domesticCharges.sections.weight.data
    );

    return (
        <>
            <h2 className="subTitle">
                {ICD_CHOBHAR.domesticCharges.sections.weight.title}
            </h2>
            <DataTable
                columns={columns}
                data={ICD_CHOBHAR.domesticCharges.sections.weight.data}
            />
        </>
    );
}

function DomesticWarehousingTable() {
    const columns = getAvailableColumns(
        ICD_CHOBHAR.domesticCharges.sections.warehousing.data
    );

    return (
        <>
            <h2 className="subTitle">
                {ICD_CHOBHAR.domesticCharges.sections.warehousing.title}
            </h2>
            <DataTable
                columns={columns}
                data={ICD_CHOBHAR.domesticCharges.sections.warehousing.data}
            />
        </>
    );
}

function DomesticOpenYardTable() {
    const columns = getAvailableColumns(
        ICD_CHOBHAR.domesticCharges.sections.openYard.data
    );

    return (
        <>
            <h2 className="subTitle">
                {ICD_CHOBHAR.domesticCharges.sections.openYard.title}
            </h2>
            <DataTable
                columns={columns}
                data={ICD_CHOBHAR.domesticCharges.sections.openYard.data}
            />
        </>
    );
}

function DomesticSubLeaseWarehouseTable() {
    const columns = getAvailableColumns(
        ICD_CHOBHAR.domesticCharges.sections.subLeaseWarehouse.data
    );

    return (
        <>
            <h2 className="subTitle">
                {ICD_CHOBHAR.domesticCharges.sections.subLeaseWarehouse.title}
            </h2>
            <DataTable
                columns={columns}
                data={
                    ICD_CHOBHAR.domesticCharges.sections.subLeaseWarehouse.data
                }
            />
        </>
    );
}

function DomesticParkingTable() {
    const columns = getAvailableColumns(
        ICD_CHOBHAR.domesticCharges.sections.parking.data
    );

    return (
        <>
            <h2 className="subTitle">
                {ICD_CHOBHAR.domesticCharges.sections.parking.title}
            </h2>
            <DataTable
                columns={columns}
                data={ICD_CHOBHAR.domesticCharges.sections.parking.data}
            />
        </>
    );
}

function DomesticCleaningTable() {
    const columns = getAvailableColumns(
        ICD_CHOBHAR.domesticCharges.sections.cleaning.data
    );

    return (
        <>
            <h2 className="subTitle">
                {ICD_CHOBHAR.domesticCharges.sections.cleaning.title}
            </h2>
            <DataTable
                columns={columns}
                data={ICD_CHOBHAR.domesticCharges.sections.cleaning.data}
            />
        </>
    );
}

function DomesticSubLeaseTable() {
    const columns = getAvailableColumns(
        ICD_CHOBHAR.domesticCharges.sections.subLease.data
    );

    return (
        <>
            <h2 className="subTitle">
                {ICD_CHOBHAR.domesticCharges.sections.subLease.title}
            </h2>
            <DataTable
                columns={columns}
                data={ICD_CHOBHAR.domesticCharges.sections.subLease.data}
            />
        </>
    );
}

// Main grouped components
function CargoHandlingChargesTables() {
    return (
        <>
            <h1 className="title">Cargo Handling Charges</h1>
            <LoadingUnloadingChargesTable />
            <TerminalHandlingChargesTable />
        </>
    );
}

function EquipmentChargesTables() {
    return (
        <>
            <h1 className="title">Equipment Charges</h1>
            <ForkliftChargesTable />
            <WeightChargesTable />
            <CleaningChargesTable />
        </>
    );
}

function WarehousingChargesTables() {
    return (
        <>
            <h1 className="title">Warehousing Charges</h1>
            <WarehousingImportsTable />
            <WarehousingExportsTable />
            <OpenYardStorageTable />
        </>
    );
}

function ParkingAndStorageChargeTables() {
    return (
        <>
            <h1 className="title">Parking and Storage Charges</h1>
            <ParkingFreightVehiclesTable />
            <ParkingContainersTable />
        </>
    );
}

function SpecialServicesTables() {
    return (
        <>
            <h1 className="title">Special Services Charges</h1>
            <SpecialServiceChargesTable />
            <SubLeaseChargesTable />
        </>
    );
}

function DomesticChargesTables() {
    return (
        <>
            <h1 className="title">{ICD_CHOBHAR.domesticCharges.title}</h1>
            <DomesticVehicleEntryTable />
            <DomesticLoadingUnloadingTable />
            <DomesticForkliftTable />
            <DomesticWeightTable />
            <DomesticWarehousingTable />
            <DomesticOpenYardTable />
            <DomesticSubLeaseWarehouseTable />
            <DomesticParkingTable />
            <DomesticCleaningTable />
            <DomesticSubLeaseTable />
        </>
    );
}

export default function ICDChobharTables() {
    return (
        <>
            <VehicleEntryChargesTable />
            <CargoHandlingChargesTables />
            <EquipmentChargesTables />
            <WarehousingChargesTables />
            <ParkingAndStorageChargeTables />
            <SpecialServicesTables />
            <DomesticChargesTables />
        </>
    );
}

import { ICP_BIRATNAGAR } from '../../data/tarrifData/icpBiratnagar';
import { getAvailableColumns } from '../../utils/getAvailableColumns';
import DataTable from '../ui/DataTable';

function FreightEntryChargesTable() {
    const columns = getAvailableColumns(ICP_BIRATNAGAR.freightEntryCharges);

    return (
        <>
            <h2 className="subTitle">Freight Entry Charges</h2>
            <DataTable
                columns={columns}
                data={ICP_BIRATNAGAR.freightEntryCharges}
            />
        </>
    );
}

function CargoHandlingChargesTables() {
    const columns = getAvailableColumns(ICP_BIRATNAGAR.cargoHandlingCharges);
    return (
        <>
            <h2 className="title">Cargo Handling Charges</h2>
            <DataTable
                columns={columns}
                data={ICP_BIRATNAGAR.cargoHandlingCharges}
            />
        </>
    );
}

function WarehousingChargesTables() {
    const importColumns = getAvailableColumns(
        ICP_BIRATNAGAR.warehousingChargesImports
    );
    const exportColumns = getAvailableColumns(
        ICP_BIRATNAGAR.warehousingChargesExports
    );
    const openYarfStorageColumns = getAvailableColumns(
        ICP_BIRATNAGAR.warehousingOpenYardStorage
    );
    return (
        <>
            <h1 className="title">Warehousing Charges</h1>
            <h2 className="subTitle">Import</h2>
            <DataTable
                columns={importColumns}
                data={ICP_BIRATNAGAR.warehousingChargesImports}
            />
            <h2 className="subTitle">Export</h2>
            <DataTable
                columns={exportColumns}
                data={ICP_BIRATNAGAR.warehousingChargesExports}
            />
            <h2 className="subTitle">Open Yard Storage</h2>
            <DataTable
                columns={openYarfStorageColumns}
                data={ICP_BIRATNAGAR.warehousingOpenYardStorage}
            />
        </>
    );
}

function ParkingAndStorageChargeTables() {
    const freightVechileColumns = getAvailableColumns(
        ICP_BIRATNAGAR.parkingStorageFreightVehicle
    );

    const containerColumns = getAvailableColumns(
        ICP_BIRATNAGAR.parkingStorageContainer
    );
    const cleaningOfContainersColumns = getAvailableColumns(
        ICP_BIRATNAGAR.cleaningOfContainers
    );
    const subLeaseChargesColumns = getAvailableColumns(
        ICP_BIRATNAGAR.subLeaseCharges
    );
    const forkliftChargesColumns = getAvailableColumns(
        ICP_BIRATNAGAR.forkliftCharges
    );

    return (
        <>
            <h1 className="title">Parking and Storage Charges</h1>
            <h2 className="subTitle">Freight Vehicle</h2>
            <DataTable
                columns={freightVechileColumns}
                data={ICP_BIRATNAGAR.parkingStorageFreightVehicle}
            />
            <h2 className="subTitle">Container</h2>
            <DataTable
                columns={containerColumns}
                data={ICP_BIRATNAGAR.parkingStorageContainer}
            />
            <h2 className="subTitle">Cleaning of Containers</h2>
            <DataTable
                columns={cleaningOfContainersColumns}
                data={ICP_BIRATNAGAR.cleaningOfContainers}
            />
            <h2 className="subTitle">Sub Lease Charges</h2>
            <DataTable
                columns={subLeaseChargesColumns}
                data={ICP_BIRATNAGAR.subLeaseCharges}
            />
            <h2 className="subTitle">Forklift Charges</h2>
            <DataTable
                columns={forkliftChargesColumns}
                data={ICP_BIRATNAGAR.forkliftCharges}
            />
        </>
    );
}

function RailHandlingChargesTables() {
    const importTerminalHandlingChargesColumns = getAvailableColumns(
        ICP_BIRATNAGAR.railHandlingChargesImport
    );
    const exportTerminalHandlingChargesColumns = getAvailableColumns(
        ICP_BIRATNAGAR.railHandlingChargesExport
    );
    const railHandlingBreakupColumns = getAvailableColumns(
        ICP_BIRATNAGAR.railHandlingBreakup
    );

    const railHandlingBulkCargoChargesColumns = getAvailableColumns(
        ICP_BIRATNAGAR.railHandlingBulkCargo
    );
    return (
        <>
            <h1 className="title">Rail Handling Charges</h1>
            <h2 className="subTitle">Import Terminal Handling Charges</h2>
            <DataTable
                columns={importTerminalHandlingChargesColumns}
                data={ICP_BIRATNAGAR.railHandlingChargesImport}
            />
            <h2 className="subTitle">Export Terminal Handling Charges</h2>
            <DataTable
                columns={exportTerminalHandlingChargesColumns}
                data={ICP_BIRATNAGAR.railHandlingChargesExport}
            />
            <h2 className="subTitle">Rail Handling Breakup</h2>
            <DataTable
                columns={railHandlingBreakupColumns}
                data={ICP_BIRATNAGAR.railHandlingBreakup}
            />
            <h2 className="subTitle">
                Terminal Handling Charges-Bagged, Break Bulk, Bulk Cargo & Loose
                Cargo 
            </h2>
            <DataTable
                columns={railHandlingBulkCargoChargesColumns}
                data={ICP_BIRATNAGAR.railHandlingBulkCargo}
            />
        </>
    );
}
export default function ICPBiratnagerTables() {
    return (
        <>
            <FreightEntryChargesTable />
            <CargoHandlingChargesTables />
            <WarehousingChargesTables />
            <ParkingAndStorageChargeTables />
            <RailHandlingChargesTables />
        </>
    );
}

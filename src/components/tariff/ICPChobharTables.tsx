import { ICP_CHOBHAR } from '../../data/tarrifData/icpChobhar';
import TableWithHeading from '../TableWithHeading';

export default function ICDChobharTables() {
    const {
        vehicleEntryCharges,
        loadingUnloadingCharges,
        terminalHandlingCharges,
        forkliftCharges,
        weightCharges,
        warehousingImports,
        warehousingExports,
        openYardStorage,
        parkingFreightVehicles,
        parkingContainers,
        cleaningCharges,
        specialServiceCharges,
        subLeaseCharges,
        domesticCharges
    } = ICP_CHOBHAR;

    return (
        <>
            <TableWithHeading
                title={vehicleEntryCharges.title}
                data={vehicleEntryCharges.data}
            />

            <h1 className="title">Cargo Handling Charges</h1>
            <TableWithHeading
                title={loadingUnloadingCharges.title}
                data={loadingUnloadingCharges.data}
            />
            <TableWithHeading
                title={terminalHandlingCharges.title}
                data={terminalHandlingCharges.data}
            />

            <h1 className="title">Equipment Charges</h1>
            <TableWithHeading
                title={forkliftCharges.title}
                data={forkliftCharges.data}
            />
            <TableWithHeading
                title={weightCharges.title}
                data={weightCharges.data}
            />
            <TableWithHeading
                title={cleaningCharges.title}
                data={cleaningCharges.data}
            />

            <h1 className="title">Warehousing Charges</h1>
            <TableWithHeading
                title={warehousingImports.title}
                data={warehousingImports.data}
            />
            <TableWithHeading
                title={warehousingExports.title}
                data={warehousingExports.data}
            />
            <TableWithHeading
                title={openYardStorage.title}
                data={openYardStorage.data}
            />

            <h1 className="title">Parking and Storage Charges</h1>
            <TableWithHeading
                title={parkingFreightVehicles.title}
                data={parkingFreightVehicles.data}
            />
            <TableWithHeading
                title={parkingContainers.title}
                data={parkingContainers.data}
            />

            <h1 className="title">Special Services Charges</h1>
            <TableWithHeading
                title={specialServiceCharges.title}
                data={specialServiceCharges.data}
            />
            <TableWithHeading
                title={subLeaseCharges.title}
                data={subLeaseCharges.data}
            />

            <h1 className="title">{domesticCharges.title}</h1>
            {Object.values(domesticCharges.sections).map(
                (section: any, idx: number) => (
                    <TableWithHeading
                        key={idx}
                        title={section.title}
                        data={section.data}
                    />
                )
            )}
        </>
    );
}

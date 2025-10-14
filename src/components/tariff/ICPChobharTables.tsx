import { ICP_CHOBHAR } from '../../data/tarrifData/icpChobhar';
import TariffTable from '../TariffTable';

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
            <TariffTable
                title={vehicleEntryCharges.title}
                data={vehicleEntryCharges.data}
            />

            <h1 className="title">Cargo Handling Charges</h1>
            <TariffTable
                title={loadingUnloadingCharges.title}
                data={loadingUnloadingCharges.data}
            />
            <TariffTable
                title={terminalHandlingCharges.title}
                data={terminalHandlingCharges.data}
            />

            <h1 className="title">Equipment Charges</h1>
            <TariffTable
                title={forkliftCharges.title}
                data={forkliftCharges.data}
            />
            <TariffTable
                title={weightCharges.title}
                data={weightCharges.data}
            />
            <TariffTable
                title={cleaningCharges.title}
                data={cleaningCharges.data}
            />

            <h1 className="title">Warehousing Charges</h1>
            <TariffTable
                title={warehousingImports.title}
                data={warehousingImports.data}
            />
            <TariffTable
                title={warehousingExports.title}
                data={warehousingExports.data}
            />
            <TariffTable
                title={openYardStorage.title}
                data={openYardStorage.data}
            />

            <h1 className="title">Parking and Storage Charges</h1>
            <TariffTable
                title={parkingFreightVehicles.title}
                data={parkingFreightVehicles.data}
            />
            <TariffTable
                title={parkingContainers.title}
                data={parkingContainers.data}
            />

            <h1 className="title">Special Services Charges</h1>
            <TariffTable
                title={specialServiceCharges.title}
                data={specialServiceCharges.data}
            />
            <TariffTable
                title={subLeaseCharges.title}
                data={subLeaseCharges.data}
            />

            <h1 className="title">{domesticCharges.title}</h1>
            {Object.values(domesticCharges.sections).map(
                (section: any, idx: number) => (
                    <TariffTable
                        key={idx}
                        title={section.title}
                        data={section.data}
                    />
                )
            )}
        </>
    );
}

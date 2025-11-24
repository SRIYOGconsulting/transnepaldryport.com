import { useState } from 'react';
import hero from '../assets/img/tariff/hero.png';
import ICPBiratnagerTables from '../components/tariff/ICPBiratnagerTables';
import Banner from '../components/ui/Banner';
import ICDKakarbhittaTables from '../components/tariff/ICDKakarvittaTables';
import ICDTatopaniTables from '../components/tariff/ICDTatpaniTables';
import ICDChobharTables from '../components/tariff/ICPChobharTables';
import { useMeta } from '../utils/useMeta';
// Constants
const BANNER_CONFIG = {
    title: 'Tariff Information',
    subtitle: '',
    hero: hero
} as const;

const TARIFF_TABLES = {
    icpBiratnagar: {
        key: 'icpBiratnagar',
        label: 'ICP Biratnagar',
        component: ICPBiratnagerTables
    },
    icdKakarbhitta: {
        key: 'icdKakarbhitta',
        label: 'ICD Kakarbhitta',
        component: ICDKakarbhittaTables
    },
    icdTatopani: {
        key: 'icdTatopani',
        label: 'ICD Tatopani',
        component: ICDTatopaniTables
    },
    icdChobhar: {
        key: 'icdChobhar',
        label: 'ICD Chobhar',
        component: ICDChobharTables
    }
} as const;

type TableKey = keyof typeof TARIFF_TABLES;

// Types
interface TabButtonProps {
    label: string;
    isActive: boolean;
    onClick: () => void;
}

interface TableSectionProps {
    selectedTable: TableKey;
}

// Components
const TabButton = ({ label, isActive, onClick }: TabButtonProps) => {
    const baseClasses =
        'px-4 py-3 lg:px-6 lg:py-2 rounded-lg font-medium transition-colors';
    const activeClasses = 'bg-blue-900 text-white';
    const inactiveClasses = 'bg-gray-100 text-blue-900 hover:bg-gray-200';

    return (
        <button
            onClick={onClick}
            className={`${baseClasses} ${isActive ? activeClasses : inactiveClasses}`}
            aria-pressed={isActive}
        >
            {label}
        </button>
    );
};

const TabNavigation = ({
    selectedTable,
    onTableSelect
}: {
    selectedTable: TableKey;
    onTableSelect: (table: TableKey) => void;
}) => {
    return (
        <section className="px-4 lg:px-0">
            <div className="mb-5 flex flex-col gap-3 sm:flex-row lg:gap-4">
                {Object.values(TARIFF_TABLES).map(table => (
                    <TabButton
                        key={table.key}
                        label={table.label}
                        isActive={selectedTable === table.key}
                        onClick={() => onTableSelect(table.key)}
                    />
                ))}
            </div>
        </section>
    );
};

const TableSection = ({ selectedTable }: TableSectionProps) => {
    const TableComponent = TARIFF_TABLES[selectedTable].component;

    return (
        <section className="px-4 lg:px-0">
            <TableComponent />
        </section>
    );
};

// Main Component
export default function Tariff() {
    useMeta({
    title: " Tariff  |  TransNepal Freight Services Pvt. Ltd.",
    description: "Meet the executive board and leadership team of TransNepal Dry Port.",
    ogImage: "",
    canonical: "https://test.transnepaldryport.com/tariff"
  });
    const [selectedTable, setSelectedTable] =
        useState<TableKey>('icpBiratnagar');

    const handleTableSelect = (table: TableKey) => {
        setSelectedTable(table);
    };

    return (
        <main>
            <Banner
                title={BANNER_CONFIG.title}
                subtitle={BANNER_CONFIG.subtitle}
                img={BANNER_CONFIG.hero}
            />

            <div className="container">
                <TabNavigation
                    selectedTable={selectedTable}
                    onTableSelect={handleTableSelect}
                />

                <TableSection selectedTable={selectedTable} />
            </div>
        </main>
    );
}

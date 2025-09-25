import type { ReactNode } from 'react';

export type Column<T> = {
    key: keyof T | null;
    label: string;
};

export type TableProps<T> = {
    columns: Column<T>[];
    data: T[];
};

function DataTable<T>({ columns = [], data = [] }: TableProps<T>) {
    const renderCell = (row: T, key: keyof T | null): ReactNode => {
        if (key === null) return <span>&nbsp;</span>;
        const value = row[key];
        if (
            value === null ||
            value === undefined ||
            typeof value === 'object' ||
            typeof value === 'function'
        ) {
            return '-';
        }
        return value as ReactNode;
    };

    return (
        <section className="my-5">
            <table className="w-full table-auto border-collapse border border-gray-300">
                <thead>
                    <tr className="h-9 bg-sky-950 text-left text-white">
                        {columns.map((col, index) => (
                            <th
                                key={index}
                                className="border border-gray-300 px-4 py-2"
                            >
                                {col.label || <span>&nbsp;</span>}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, rowIndex) => (
                        <tr key={rowIndex} className="border-t border-gray-300">
                            {columns.map((col, colIndex) => (
                                <td
                                    key={colIndex}
                                    className="border border-gray-300 px-4 py-2"
                                >
                                    {renderCell(row, col.key)}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    );
}

export default DataTable;

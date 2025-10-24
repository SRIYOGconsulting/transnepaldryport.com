import { getAvailableColumns } from '../utils/getAvailableColumns';
import DataTable from './ui/DataTable';

type TableData = {
    title: string;
    data: any[];
};

export default function TableWithHeading({ title, data }: TableData) {
    if (!data || data.length === 0) return null;

    const columns = getAvailableColumns(data);

    return (
        <div className="w-full">
            <h2 className="mb-4 text-xl font-semibold text-gray-900 sm:mb-6 sm:text-2xl lg:text-3xl">
                {title}
            </h2>
            <div className="overflow-x-auto">
                <DataTable columns={columns} data={data} />
            </div>
        </div>
    );
}

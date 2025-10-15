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
        <>
            <h2 className="subTitle">{title}</h2>
            <DataTable columns={columns} data={data} />
        </>
    );
}

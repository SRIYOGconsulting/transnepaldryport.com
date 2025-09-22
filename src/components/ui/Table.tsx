type Table = {
    id: number;
    [key: string]: string | number;
};

type TableProps = {
    data: Table[];
    h1Title: string;
    h2Title: string;
    dataMapping: (data: Table) => { h1Data: string; h2Data: string };
};

export default function Table({
    data,
    h1Title,
    h2Title,
    dataMapping
}: TableProps) {
    return (
        <section className="my-8 overflow-x-auto">
            <table className="min-w-full table-auto border-collapse border border-gray-300">
                <thead>
                    <tr className="h-9 bg-sky-950 text-left text-white">
                        <th className="border border-gray-300 px-4 py-2">
                            S.N
                        </th>
                        <th className="border border-gray-300 px-4 py-2">
                            {h1Title}
                        </th>
                        <th className="border border-gray-300 px-4 py-2">
                            {h2Title}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(item => {
                        const { h1Data, h2Data } = dataMapping(item); // Mapping data before rendering

                        return (
                            <tr
                                key={item.id}
                                className="border-t border-gray-300"
                            >
                                <td className="border border-gray-300 px-4 py-2">
                                    {item.id}
                                </td>
                                <td className="border border-gray-300 px-4 py-2">
                                    {h1Data}
                                </td>
                                <td className="border border-gray-300 px-4 py-2">
                                    {h2Data}
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </section>
    );
}

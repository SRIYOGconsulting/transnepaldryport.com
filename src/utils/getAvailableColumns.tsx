import type { Column } from '../components/ui/DataTable';

export function getAvailableColumns<T extends Record<string, any>>(
    data: T[]
): Column<T>[] {
    if (data.length === 0) return [];

    const baseKeys: (keyof T)[] = ['sn', 'activities'].filter(key =>
        data.some(row => key in row)
    );

    const dynamicKeys = new Set<keyof T>();

    data.forEach(row => {
        Object.keys(row).forEach(key => {
            const typedKey = key as keyof T;
            if (!baseKeys.includes(typedKey)) {
                dynamicKeys.add(typedKey);
            }
        });
    });

    const baseColumns: Column<T>[] = baseKeys.map(key => ({
        key,
        label: capitalize(key.toString())
    }));

    const dynamicColumns: Column<T>[] = Array.from(dynamicKeys).map(key => ({
        key,
        label: key.toString().toUpperCase()
    }));

    return [...baseColumns, ...dynamicColumns];
}

function capitalize(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

import type { Column } from '../components/ui/DataTable';

// Utility function to generate columns based on available keys
export function getAvailableColumns<T>(data: T[]): Column<T>[] {
    if (data.length === 0) return [];

    const baseColumns: Column<T>[] = [
        { key: 'sn' as keyof T, label: 'SN' },
        { key: 'activities' as keyof T, label: 'Activities' }
    ];

    const keysToCheck: (keyof T)[] = [
        'vehicle' as keyof T,
        'teu' as keyof T,
        'feu' as keyof T
    ];

    const dynamicColumns = keysToCheck
        .filter(key =>
            data.some(row => row[key] !== undefined && row[key] !== null)
        )
        .map(key => ({
            key,
            label: key.toUpperCase()
        }));

    return [...baseColumns, ...dynamicColumns];
}

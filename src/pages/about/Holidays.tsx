import hero from '../../assets/img/about/holidays/hero.png';
import Banner from '../../components/ui/Banner';
import DataTable, { type Column } from '../../components/ui/DataTable';
import { HOLIDAYS } from '../../data/aboutUsData/holidays';

const BANNER = {
    title: 'Holidays',
    subtitle: 'Keep Track of Time-Off Schedule',
    img: hero
};

type Holiday = {
    id: number;
    holiday: string;
    days: number;
};
const columns: Column<Holiday>[] = [
    { key: 'id', label: 'S.N' },
    { key: 'holiday', label: 'Holiday' },
    { key: 'days', label: 'Days' }
];

export default function Holidays() {
    return (
        <main>
            <Banner
                title={BANNER.title}
                subtitle={BANNER.subtitle}
                img={BANNER.img}
            />
            <div className="container">
                <h1 className="h-6 w-64 justify-start font-['Poppins'] text-xl font-semibold text-indigo-950">
                    Total Holidays: 15 days
                </h1>
                <DataTable columns={columns} data={HOLIDAYS.holidays} />
                <h1 className="h-6 w-64 justify-start font-['Poppins'] text-xl font-semibold text-orange-800/80">
                    Total Holidays: 1 day
                </h1>
                <DataTable columns={columns} data={HOLIDAYS.womenHolidays} />
            </div>
        </main>
    );
}

import hero from '../../assets/img/about/holidays/hero.png';
import Banner from '../../components/ui/Banner';
import { HOLIDAYS } from '../../data/aboutUsData/holidays';

const BANNER = {
    title: 'Holidays',
    subtitle: 'Keep Track of Time-Off Schedule',
    img: hero
};

const paddign = 'px-4 py-5 sm:px-20 lg:px-25';

type Table = {
    id: number;
    holiday: string;
    days: number;
};

type TableProps = {
    holidays: Table[];
};

function Table({ holidays }: TableProps) {
    return (
        <section className="my-8">
            <table className="w-full table-auto border-collapse border border-gray-300">
                <thead>
                    <tr className="h-9 bg-sky-950 text-left text-white">
                        <th className="border border-gray-300 px-4 py-2">
                            S.N
                        </th>
                        <th className="border border-gray-300 px-4 py-2">
                            Holidays
                        </th>
                        <th className="border border-gray-300 px-4 py-2">
                            Days
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {holidays.map(holiday => (
                        <tr
                            key={holiday.id}
                            className="border-t border-gray-300"
                        >
                            <td className="border border-gray-300 px-4 py-2">
                                {holiday.id}
                            </td>
                            <td className="border border-gray-300 px-4 py-2">
                                {holiday.holiday}
                            </td>
                            <td className="border border-gray-300 px-4 py-2">
                                {holiday.days}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    );
}

export default function Holidays() {
    return (
        <main>
            <Banner
                title={BANNER.title}
                subtitle={BANNER.subtitle}
                img={BANNER.img}
            />
            <div className="my-20">
                <div className={`w-full ${paddign}`}>
                    <h1 className="h-6 w-64 justify-start font-['Poppins'] text-xl font-semibold text-indigo-950">
                        Total Holidays: 15 days
                    </h1>
                    <Table holidays={HOLIDAYS.holidays} />
                </div>
                <div className={`w-full ${paddign}`}>
                    <h1 className="h-6 w-64 justify-start font-['Poppins'] text-xl font-semibold text-orange-800/80">
                        Total Holidays: 15 days
                    </h1>
                    <Table holidays={HOLIDAYS.womenHolidays} />
                </div>
            </div>
        </main>
    );
}

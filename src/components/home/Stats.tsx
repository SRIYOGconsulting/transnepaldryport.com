import React from 'react';
import { STAT_ITEM, type StatItem } from '../../data/homePageData/statItem';

const Stats: React.FC = () => {
    return (
        <section className="w-full bg-sky-950 py-6 lg:py-10">
            <div className="mx-auto flex flex-col sm:flex-row h-auto lg:h-24 max-w-7xl items-center justify-between gap-6 lg:gap-0 px-4 lg:px-4">
                {STAT_ITEM.map(({ count, title }: StatItem, idx: number) => (
                    <StatCard key={idx} count={count} title={title} />
                ))}
            </div>
        </section>
    );
};

type StatCardProps = {
    count: number;
    title: string;
};

function StatCard({ count, title }: StatCardProps) {
    return (
        <div className="flex flex-col items-center text-center">
            <span className="font-inter text-3xl sm:text-4xl lg:text-5xl leading-[30px] sm:leading-[40px] lg:leading-[50px] font-bold text-white">
                {count.toLocaleString()}
            </span>
            <span className="text-lg sm:text-xl lg:text-2xl leading-[30px] sm:leading-[40px] lg:leading-[50px] font-semibold text-white">
                {title}
            </span>
        </div>
    );
}

export default Stats;

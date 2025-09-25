import React from 'react';
import { STAT_ITEM, type StatItem } from '../../data/homePageData/statItem';

const Stats: React.FC = () => {
    return (
        <section className="w-full bg-sky-950 py-6 lg:py-10">
            <div className="mx-auto flex h-auto max-w-7xl flex-col items-center justify-between gap-6 px-4 sm:flex-row lg:h-24 lg:gap-0 lg:px-4">
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
            <span className="font-inter text-3xl leading-[30px] font-bold text-white sm:text-4xl sm:leading-[40px] lg:text-5xl lg:leading-[50px]">
                {count.toLocaleString()}
            </span>
            <span className="text-lg leading-[30px] font-semibold text-white sm:text-xl sm:leading-[40px] lg:text-2xl lg:leading-[50px]">
                {title}
            </span>
        </div>
    );
}

export default Stats;

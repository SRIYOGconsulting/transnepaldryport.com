import React from 'react';
import { STAT_ITEM, type StatItem } from '../../data/homePageData/statItem';

const Stats: React.FC = () => {
    return (
        <section className="w-full bg-sky-950 py-10">
            <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-4">
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
            <span className="font-inter text-5xl leading-[50px] font-bold text-white">
                {count.toLocaleString()}
            </span>
            <span className="text-2xl leading-[50px] font-semibold text-white">
                {title}
            </span>
        </div>
    );
}

export default Stats;

import React from 'react';
import { STAT_ITEM, type StatItem } from '../../data/homePageData/statItem';

const Stats: React.FC = () => {
    return (
        <div className="w-full bg-sky-950 py-10">
            <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-4">
                {STAT_ITEM.map((item: StatItem, idx: number) => (
                    <div
                        key={idx}
                        className="flex flex-col items-center text-center"
                    >
                        <span className="font-['Inter'] text-5xl leading-[50px] font-bold text-white">
                            {item.count.toLocaleString()}
                        </span>
                        <span className="text-2xl leading-[50px] font-semibold text-white">
                            {item.title}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Stats;

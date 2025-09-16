type GetInTouchWithUsCardProps = {
    logo: React.ReactNode;
    title: string;
    description: string;
};

export default function GetInTouchWithUsCard({
    logo,
    title,
    description
}: GetInTouchWithUsCardProps) {
    return (
        <div className="inline-flex h-16 flex-col items-start justify-start gap-2.5 self-stretch rounded-[5px] bg-white px-5 py-3.5 shadow-[0px_1px_5px_0px_rgba(0,0,0,0.20)]">
            <div className="inline-flex items-start justify-start gap-4">
                <div className="flex items-center justify-start gap-3">
                    {logo}
                </div>
                <div className="inline-flex h-9 w-44 flex-col items-start justify-start gap-[5px]">
                    <h3 className="h-4 justify-start self-stretch font-['Padauk'] text-base leading-normal font-bold tracking-tight text-black">
                        {title}
                    </h3>
                    <p className="justify-start self-stretch font-['Poppins'] text-[10px] leading-normal font-light tracking-tight text-black">
                        {description}
                    </p>
                </div>
            </div>
        </div>
    );
}

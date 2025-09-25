type TextWithLeftSideLogoProps = {
    logo: string;
    amount?: string | number;
    title: string;
};

type LogosWithTitleProps = {
    data: TextWithLeftSideLogoProps[];
};

import TextWithLeftSideLogo from './ui/TextWithLeftSideLogo';

export default function LogosWithTitle({ data }: LogosWithTitleProps) {
    return (
        <section className="my-10 grid grid-cols-2 gap-4 lg:grid-cols-4 lg:px-20">
            {data.map((item, index) => (
                <TextWithLeftSideLogo
                    key={index}
                    logo={item.logo}
                    amount={item.amount}
                    title={item.title}
                />
            ))}
        </section>
    );
}

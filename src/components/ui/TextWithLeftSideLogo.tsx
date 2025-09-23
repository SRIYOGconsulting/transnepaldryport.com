type TextWithLeftSideLogoProps = {
    logo: string;
    amount?: string | number;
    title: string;
};
export default function TextWithLeftSideLogo({
    logo,
    amount,
    title
}: TextWithLeftSideLogoProps) {
    return (
        <section className="flex gap-5">
            <img className="h-12 w-12" src={logo} alt="Logo" />
            <div className="flex flex-col">
                <h3 className="text-xlfot-semi text-blue-900">{amount}</h3>
                <p className="text-base font-normal text-blue-900">{title}</p>
            </div>
        </section>
    );
}

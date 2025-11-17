import { MdContactMail } from 'react-icons/md';
import { Link } from 'react-router-dom';

export function DesktopContactUsButton() {
    return (
        <Link to="/contact">
        <div className="fixed top-1/2 right-0 z-40 hidden h-40 w-10 -translate-y-1/2 transform flex-col items-center justify-center gap-2.5 rounded-tl-[10px] rounded-bl-[10px] bg-sky-950 p-2.5 lg:flex lg:h-52 lg:w-12">
            <div className="rotate-90">
                <span className="font-['Inter'] text-base font-bold whitespace-nowrap text-white capitalize lg:text-xl">
                    CONTACT US
                </span>
            </div>
        </div>
        </Link>
    );
}

export function MobileContactUsButton() {
    return (
        <Link to ="/contact">
        <div className="fixed right-4 bottom-4 z-40 lg:hidden">
            <button className="flex h-12 w-12 items-center justify-center rounded-full bg-sky-950 shadow-lg transition-transform hover:scale-110">
                <MdContactMail className="text-2xl text-white" />
            </button>
        </div>
        </Link>
    );
}

import { FaPhoneAlt } from 'react-icons/fa';
import hero from '../assets/img/contact/hero.png';
import Banner from '../components/ui/Banner';
import { CONTACT } from '../data/contactData/contact';
import { IoLocation } from 'react-icons/io5';
import { IoIosTimer } from 'react-icons/io';
import { useMeta } from '../utils/useMeta'; 
const BANNER = {
    title: 'Contact Us',
    subtitle: 'Get in Touch for Any Assistance',
    img: hero
};

function ContactDetailsSection() {
    useMeta({
    title: " Contacts  |  TransNepal Freight Services Pvt. Ltd.",
    description: "Reach our team for support and inquiries.",
    ogImage: "",
    canonical: "https://test.transnepaldryport.com/contact"
  });
    return (
        <div className="flex flex-col gap-6 lg:gap-10">
            <section className="flex gap-3 lg:gap-4">
                <IoLocation className="mt-1 text-lg text-blue-900 lg:text-base" />
                <div className="flex flex-col justify-start">
                    <h4 className="text-sm font-semibold text-blue-900 lg:text-base">
                        Address
                    </h4>
                    <p className="text-sm leading-loose font-medium text-blue-900 lg:text-base">
                        {CONTACT.address.line1}, {CONTACT.address.city}
                    </p>
                </div>
            </section>

            <section className="flex gap-3 lg:gap-4">
                <FaPhoneAlt className="mt-1 text-lg text-blue-900 lg:text-base" />
                <div className="flex flex-col justify-start">
                    <h4 className="text-sm font-semibold text-blue-900 lg:text-base">
                        Contact
                    </h4>
                    {CONTACT.contact.map(contact => (
                        <a
                            href={contact.url}
                            key={contact.title}
                            className="text-sm leading-loose font-medium text-blue-900 lg:text-base"
                        >
                            <span>{contact.title}:</span>
                            <span>{contact.info}</span>
                        </a>
                    ))}
                </div>
            </section>

            <section className="flex gap-3 lg:gap-4">
                <IoIosTimer className="mt-1 text-lg text-blue-900 lg:text-base" />
                <div className="flex flex-col justify-start">
                    <h4 className="text-sm font-semibold text-blue-900 lg:text-base">
                        Working Hours
                    </h4>
                    <p className="text-sm leading-loose font-medium text-blue-900 lg:text-base">
                        {CONTACT.workingHours.weekdays}
                    </p>
                </div>
            </section>
        </div>
    );
}

function Map() {
    return (
        <div className="mt-6 h-64 w-full overflow-hidden rounded-lg lg:h-80">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14287.033183029727!2d87.276028!3d26.463519!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ef74147f7fa62d%3A0x631d4e7be0d690c2!2sTrans%20Nepal%20Freight%20Services%20Pvt.%20Ltd.!5e0!3m2!1sen!2snp!4v1758816161896!5m2!1sen!2snp"
                className="h-full w-full"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
    );
}

function ContactInfoSection() {
    return (
        <section className="w-full lg:w-auto">
            <div>
                <h1 className="title inline-block border-b-2 border-red-500 text-xl lg:text-2xl">
                    {CONTACT.overview.title}
                </h1>
                <h2 className="title mt-2 text-lg lg:text-xl">
                    {CONTACT.overview.subtitle}
                </h2>
                <p className="my-4 text-sm leading-relaxed font-medium lg:mb-5 lg:text-base lg:leading-loose">
                    {CONTACT.overview.description}
                </p>

                <ContactDetailsSection />
            </div>
        </section>
    );
}

function FormSection() {
    return (
        <section className="flex w-full items-center justify-center rounded-2xl border border-blue-900 p-6 lg:w-auto lg:rounded-3xl lg:p-10">
            <form className="flex w-full flex-col gap-4 lg:gap-5">
                <div className="flex flex-col gap-2">
                    <label
                        className="text-sm font-normal text-blue-900/70 lg:text-base"
                        htmlFor="name"
                    >
                        Name
                    </label>
                    <input
                        className="h-12 w-full rounded-md bg-slate-100 px-4 lg:h-16 lg:w-130"
                        type="text"
                        id="name"
                        name="name"
                        required
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label
                        className="text-sm font-normal text-blue-900/70 lg:text-base"
                        htmlFor="phone-number"
                    >
                        Phone Number
                    </label>
                    <input
                        className="h-12 w-full rounded-md bg-slate-100 px-4 lg:h-16 lg:w-130"
                        type="tel"
                        id="phone-number"
                        name="phone-number"
                        required
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label
                        className="text-sm font-normal text-blue-900/70 lg:text-base"
                        htmlFor="send-message"
                    >
                        Message
                    </label>
                    <textarea
                        className="h-24 w-full rounded-md bg-slate-100 px-4 py-3 lg:h-32 lg:w-130"
                        id="send-message"
                        name="send-message"
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="mt-4 h-12 w-40 rounded-2xl bg-blue-900 font-semibold text-white transition-colors hover:bg-blue-800 lg:mt-0"
                >
                    Send
                </button>
            </form>
        </section>
    );
}

export default function Contact() {
    return (
        <main>
            <Banner
                title={BANNER.title}
                subtitle={BANNER.subtitle}
                img={BANNER.img}
            />

            <section className="container">
                <div className="flex flex-col gap-8 lg:flex-row lg:gap-10">
                    <ContactInfoSection />
                    <FormSection />
                </div>
                <Map />
            </section>
        </main>
    );
}
